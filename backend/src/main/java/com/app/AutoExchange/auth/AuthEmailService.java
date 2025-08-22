package com.app.AutoExchange.auth;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class AuthEmailService {

    private final JavaMailSender mailSender;

    public AuthEmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendVerificationCode(String email, String token){

        String link = "http://localhost:8080/api/v1/auth/verify?token=" + token;
        String subject = "Verify Your Account";
        String body = "Click the link to verify your account: " + link;

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email);
        msg.setSubject(subject);
        msg.setText(body);
        mailSender.send(msg);

    }
}
