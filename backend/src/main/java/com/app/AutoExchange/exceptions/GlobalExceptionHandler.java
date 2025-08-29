package com.app.AutoExchange.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, Object> errors = new HashMap<>();
        errors.put("status", HttpStatus.BAD_REQUEST.value());
        errors.put("error", "Validation Error");

        List<Map<String, String>> errorDetails = new ArrayList<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            Map<String, String> fieldError = new HashMap<>();
            fieldError.put("field", error.getField());
            fieldError.put("message", error.getDefaultMessage());
            errorDetails.add(fieldError);
        });

        errors.put("messages", errorDetails);
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Map<String, Object>> handleBadCredentialsException(BadCredentialsException ex) {
        Map<String, Object> errors = new HashMap<>();
        errors.put("status", HttpStatus.UNAUTHORIZED.value());
        errors.put("error", "Invalid Credentials");
        errors.put("message", "Invalid username or password");
        return new ResponseEntity<>(errors, HttpStatus.UNAUTHORIZED);
    }
    @ExceptionHandler(AccountNotVerifiedException.class)
    public ResponseEntity<Map<String, String>> handleAccountNotVerified(AccountNotVerifiedException ex) {
        Map<String, String> response = new HashMap<>();
        response.put("error", "Account Not Verified");
        response.put("message", ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<Map<String, String>> handleEmailAlreadyExists(EmailAlreadyExistsException ex){
        Map<String, String> response = new HashMap<>();
        response.put("error", "EmailAlreadyExists");
        response.put("message", ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(InvalidVerificationTokenException.class)
    public ResponseEntity<Map<String, String>> handleInvalidToken(InvalidVerificationTokenException ex){
        Map<String, String> response = new HashMap<>();
        response.put("error", "InvalidToken");
        response.put("message", ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(VerificationTokenExpired.class)
    public ResponseEntity<Map<String, String>> handleExpiredToken(VerificationTokenExpired ex) {
        Map<String, String> response = new HashMap<>();
        response.put("error", "TokenExpired");
        response.put("message", ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.GONE);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Map<String, Object>> handleRuntimeException(RuntimeException ex) {
        Map<String, Object> errors = new HashMap<>();
        errors.put("status", HttpStatus.CONFLICT.value());
        errors.put("error", "Conflict");
        errors.put("message", ex.getMessage());
        return new ResponseEntity<>(errors, HttpStatus.CONFLICT);
    }
}
