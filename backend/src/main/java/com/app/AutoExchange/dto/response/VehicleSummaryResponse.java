package com.app.AutoExchange.dto.response;

import com.app.AutoExchange.enums.FuelType;
import com.app.AutoExchange.enums.VehicleCondition;
import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VehicleSummaryResponse {

    private Long id;
    private String title;
    private String makeName;
    private String modelName;
    private Integer year;
    private BigDecimal price;
    private Integer mileage;
    private VehicleCondition condition;
    private FuelType fuelType;
    private String city;
    private String province;
    private String primaryImageUrl;
    private boolean isFeatured;
    private boolean isPremium;
    private LocalDateTime createdAt;
}
