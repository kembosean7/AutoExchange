package com.app.AutoExchange.controller;

import com.app.AutoExchange.service.AuthenticationService;
import com.app.AutoExchange.dto.request.AuthenticationRequest;
import com.app.AutoExchange.dto.request.RegisterRequest;
import com.app.AutoExchange.dto.response.AuthenticationResponse;
import com.app.AutoExchange.dto.response.VerificationResponse;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    final private AuthenticationService service;

    @PostMapping("/signup")
    public ResponseEntity<AuthenticationResponse> signup(@Valid
            @RequestBody RegisterRequest request) throws MessagingException, IOException {

        AuthenticationResponse response = service.signup(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);


    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@Valid
            @RequestBody AuthenticationRequest request){

        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/verify")
    public ResponseEntity<VerificationResponse> verifyAccount(@RequestParam("token") String token){

        return  ResponseEntity.ok(service.verifyAccount(token));
    }

    @PostMapping("/resend-verification")
    public ResponseEntity<VerificationResponse> resendVerificationToken(@RequestParam("email") String email ) throws MessagingException {

        return ResponseEntity.ok(service.resendVerificationToken(email));
    }


}
