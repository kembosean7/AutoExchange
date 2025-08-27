package com.app.AutoExchange.auth;

import com.app.AutoExchange.user.User;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    final private AuthenticationService service;

    @PostMapping("/signup")
    public ResponseEntity<AuthenticationResponse> signup(@Valid
            @RequestBody RegisterRequest request){

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

}
