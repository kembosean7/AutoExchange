package com.app.AutoExchange.service;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class VerificationTokenService {

    public String verificationToken(){
        return UUID.randomUUID()
                .toString()
                .replaceAll("[^0-9]", "")
                .substring(0, 5);
    }

    public LocalDateTime setTokenExpiryDate(){
        return LocalDateTime.now().plusMinutes(20);
    }




}
