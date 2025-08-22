package com.app.AutoExchange.auth;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Transactional
public class AuthenticationResponse {

    private String accessToken;
    private String refreshToken;
}
