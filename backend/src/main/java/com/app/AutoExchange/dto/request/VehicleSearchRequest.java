package com.app.AutoExchange.dto.request;

import com.app.AutoExchange.enums.BodyType;
import com.app.AutoExchange.enums.FuelType;
import com.app.AutoExchange.enums.TransmissionType;
import com.app.AutoExchange.enums.VehicleCondition;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VehicleSearchRequest {

    private String searchTerm;
    private Long makeId;
    private Long modelId;
    private Integer minYear;
    private Integer maxYear;
    private BigDecimal minPrice;
    private BigDecimal maxPrice;
    private Integer maxMileage;
    private BodyType bodyType;
    private FuelType fuelType;
    private TransmissionType transmissionType;
    private VehicleCondition condition;
    private String city;
    private String province;
    private Boolean featuredOnly;
    private String sortBy; // price, year, mileage, created_at
    private String sortDirection;// asc, desc

    private int page = 0;
    private int size = 20;


}
