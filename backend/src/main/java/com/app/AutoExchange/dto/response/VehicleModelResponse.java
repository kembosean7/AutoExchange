package com.app.AutoExchange.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VehicleModelResponse {

    private Long id;
    private String name;
    private Integer startYear;
    private Integer endYear;
    private Long vehicleCount;
}
