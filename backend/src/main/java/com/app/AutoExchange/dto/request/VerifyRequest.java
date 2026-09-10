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
    @Pattern(regexp = "^$|^[0-9]{5}$", message = "OTP must be an exact 6-digit number")
    private String token;

}
