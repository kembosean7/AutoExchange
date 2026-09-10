package com.app.AutoExchange.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VerifyRequest {


    @NotBlank(message = "Token is required")
    @Size(min = 6, max = 6, message = "OTP is invalid")
    @Pattern(regexp = "^[0-9]+$", message = "OTP must contain numbers only")
    private String token;

}
