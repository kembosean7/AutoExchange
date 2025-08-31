package com.app.AutoExchange.auth;

import com.app.AutoExchange.config.JwtService;
import com.app.AutoExchange.exceptions.*;
import com.app.AutoExchange.user.Role;
import com.app.AutoExchange.user.User;
import com.app.AutoExchange.user.UserRepository;
import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final AuthEmailService emailService;

    public AuthenticationResponse signup(RegisterRequest request) throws MessagingException, IOException {

        Optional<User> existingUser = repository.findByEmail(request.getEmail());
        if(existingUser.isPresent()){
            throw new EmailAlreadyExistsException("User with the same email already exist");
        }

        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();


        String token = UUID.randomUUID().toString().replaceAll("[^0-9]", "").substring(0, 5);
        user.setVerificationToken(token);
        user.setTokenExpiryDate(LocalDateTime.now().plusMinutes(20));
        user.setEnabled(false);

        repository.save(user);

        emailService.sendVerificationCode(user.getEmail(), token);



        var accessToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);

        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();


    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword())
        );

        var user = repository.findByEmail(request.getEmail()).orElseThrow();
        if(!user.isVerified()){
            throw new AccountNotVerifiedException( "Please verify your email before logging in");

        }
        var accessToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);

        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();

    }

    public VerificationResponse verifyAccount(String token) {
        Optional<User> optionalUser = repository.findByVerificationToken(token);

        if(optionalUser.isEmpty()){
            throw new InvalidVerificationTokenException("Invalid verification token");
        }

        User user = optionalUser.get();

        if (user.getTokenExpiryDate().isBefore(LocalDateTime.now())){
            throw new VerificationTokenExpired("Verification token expired");
        }

        user.setEnabled(true);
        user.setVerificationToken(null);
        user.setTokenExpiryDate(null);

        repository.save(user);

        VerificationResponse response = VerificationResponse.builder()
                .msg("Account verified successfully")
                .status("success")
                .timestamp(LocalDateTime.now())
                .build();


        return response;
    }

    public VerificationResponse resendVerificationToken(String email) throws MessagingException {
        Optional<User> optionalUser = repository.findByEmail(email);

        if(optionalUser.isEmpty()){
            throw new UsernameNotFoundException("User not found with the email");

        }

        User user =optionalUser.get();

        if(user.isVerified()) throw new AccountAlreadyVerifiedException("Account is already verified");

        String newToken = UUID.randomUUID().toString().replaceAll("[^0-9]", "").substring(0, 5);
        user.setVerificationToken(newToken);
        user.setTokenExpiryDate(LocalDateTime.now().plusMinutes(20));

        repository.save(user);

        emailService.sendVerificationCode(user.getEmail(), newToken);

        return VerificationResponse.builder().msg(
                "Verification code resent successfully")
                .status("success")
                .timestamp(LocalDateTime.now())
                .build();


    }
}
