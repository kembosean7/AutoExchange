package com.app.AutoExchange.auth;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class AuthEmailService {

    private final JavaMailSender mailSender;

    public AuthEmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendVerificationCode(String email, String token) throws MessagingException {

        String subject = "Verify Your Account";
        String link = "http://localhost:8080/api/v1/auth/verify?token=" + token;


        String body = """
                <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;">
                    <div style="text-align:center;">
                        <h2>Help us protect your <span style="color:#d35400;">account</span></h2>
                        <p>Before you finish creating your account, we need to verify your identity.</p>
                        <p>On the verification page, enter the following code:</p>
                        <div style="background:#f2f2f2;padding:15px;margin:20px 0;font-size:22px;font-weight:bold;">
                            %s
                        </div>
                        <p>Your verification code expires after <b>20 minutes</b>.</p>
                        <p>
                            Or click this link to verify directly:<br/>
                            <a href="%s" style="color:#1a73e8;">%s</a>
                        </p>
                        <p style="font-size:12px;color:#777;">
                            You must confirm your email within 3 days of signing up. 
                            If you do not confirm, your account will be deleted.
                        </p>
                    </div>
                </div>
                """.formatted(token, link, link);

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(email);
        helper.setSubject(subject);
        helper.setText(body, true);

        mailSender.send(message);
    }
}