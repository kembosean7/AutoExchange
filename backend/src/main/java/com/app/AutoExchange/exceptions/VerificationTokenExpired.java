package com.app.AutoExchange.exceptions;

public class VerificationTokenExpired extends RuntimeException{
    public VerificationTokenExpired(String message){
        super(message);
    }
}
