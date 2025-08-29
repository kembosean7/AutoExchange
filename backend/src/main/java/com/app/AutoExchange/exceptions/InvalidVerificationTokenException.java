package com.app.AutoExchange.exceptions;

public class InvalidVerificationTokenException extends RuntimeException{
    public InvalidVerificationTokenException(String message){
        super(message);
    }
}
