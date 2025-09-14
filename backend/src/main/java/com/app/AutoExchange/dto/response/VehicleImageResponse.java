package com.app.AutoExchange.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VehicleImageResponse {

    private Long id;
    private String imageUrl;
    private String thumbnailUrl;
    private String altText;
    private Integer displayOrder;
    private boolean isPrimary;
}
