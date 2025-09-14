package com.app.AutoExchange.dto.request;


import com.app.AutoExchange.enums.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VehicleUpdateRequest {

    @Size(max = 200, message = "Title must not exceed 200 characters")
    private String title;

    @Size(max = 5000, message = "Description must not exceed 5000 characters")
    private String description;

    @Size(max = 50, message = "Trim must not exceed 50 characters")
    private String trim;

    private BodyType bodyType;
    private FuelType fuelType;
    private TransmissionType transmissionType;

    @Min(value = 2, message = "Number of doors must be at least 2")
    @Max(value = 5, message = "Number of doors must not exceed 5")
    private Integer numberOfDoors;

    @Min(value = 1, message = "Seating capacity must be at least 1")
    @Max(value = 50, message = "Seating capacity must not exceed 50")
    private Integer seatingCapacity;

    @DecimalMin(value = "0.1", message = "Engine size must be at least 0.1L")
    @DecimalMax(value = "20.0", message = "Engine size must not exceed 20.0L")
    private BigDecimal engineSize;

    @Min(value = 10, message = "Horsepower must be at least 10")
    @Max(value = 2000, message = "Horsepower must not exceed 2000")
    private Integer horsePower;

    @Pattern(regexp = "^(FWD|RWD|AWD|4WD)$", message = "Drive type must be FWD, RWD, AWD, or 4WD")
    private String driveType;

    private VehicleCondition condition;

    @Min(value = 0, message = "Mileage cannot be negative")
    @Max(value = 2000000, message = "Mileage seems unrealistic")
    private Integer mileage;

    @Min(value = 1, message = "Previous owners must be at least 1")
    @Max(value = 20, message = "Previous owners seems unrealistic")
    private Integer previousOwners;

    private Boolean hasAccidentHistory;
    private Boolean hasServiceHistory;

    @Size(max = 100, message = "City must not exceed 100 characters")
    private String city;

    @Size(max = 100, message = "Province must not exceed 100 characters")
    private String province;

    @Pattern(regexp = "^\\d{4}$", message = "Postal code must be 4 digits")
    private String postalCode;

    @DecimalMin(value = "-90.0", message = "Invalid latitude")
    @DecimalMax(value = "90.0", message = "Invalid latitude")
    private BigDecimal latitude;

    @DecimalMin(value = "-180.0", message = "Invalid longitude")
    @DecimalMax(value = "180.0", message = "Invalid longitude")
    private BigDecimal longitude;

    @DecimalMin(value = "1.00", message = "Price must be at least R1.00")
    @DecimalMax(value = "50000000.00", message = "Price seems unrealistic")
    private BigDecimal price;

    private Boolean isPriceNegotiable;

    @Size(max = 5000, message = "Features must not exceed 5000 characters")
    private String features;

    @Size(max = 2000, message = "Extras must not exceed 2000 characters")
    private String extras;

    @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Invalid phone number format")
    private String sellerPhone;

    private VehicleStatus status;
}
