package com.app.AutoExchange.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VehicleMakeResponse {

    private Long id;
    private String name;
    private String countryCode;
    private List<VehicleModelResponse> models;
    private Long vehicleCount;
}
