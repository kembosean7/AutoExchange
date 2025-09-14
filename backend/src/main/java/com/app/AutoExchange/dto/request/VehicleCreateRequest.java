package com.app.AutoExchange.dto.request;

import com.app.AutoExchange.enums.BodyType;
import com.app.AutoExchange.enums.FuelType;
import com.app.AutoExchange.enums.TransmissionType;
import com.app.AutoExchange.enums.VehicleCondition;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VehicleCreateRequest {

    @NotBlank(message = "Title is required")
    @Size(max = 200, message = "Title must not exceed 200 characters")
    private String title;

    @Size(max = 5000, message = "Description must not exceed 5000 characters")
    private String description;

    @NotNull(message = "Make ID is required")
    private Long makeId;

    @NotNull(message = "Model ID is required")
    private Long modeId;

    @NotNull(message = "Year is required")
    @Min(value = 1990, message = "Year must be 1900 or later")
    @Max(value = 2025, message = "Year msut not be in future")
    private Integer year;

    @Size(max = 50, message = "Trim must not exceed 50 characters")
    private String trim;

    @NotNull(message = "Body type is required")
    private BodyType bodyType;

    @NotNull(message = "Fuel type is required")
    private FuelType fuelType;

    @NotNull(message = "Tramission type is required")
    private TransmissionType transmissionType;

    @Min(value = 2, message = "Number of doors must be a least 2")
    @Max(value = 5, message = "Number of doormust not exceed 5")
    private Integer numberfDoors;

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

    @NotNull(message = "Vehicle condition is required")
    private VehicleCondition condition;

    @NotNull(message = "Mileage is required")
    @Min(value = 0, message = "Mileage cannot be negative")
    @Max(value = 2000000, message = "Mileage seems unrealistic")
    private Integer mileage;

    @Min(value = 1, message = "Previous owners must be at least 1")
    @Max(value = 20, message = "Previous owners seems unrealistic")
    private Integer previousOwners = 1;

    private boolean hasAccidentHistory = false;
    private boolean hasServiceHistory = true;

    @Size(max = 50, message = "VIN number must not exceed 50 characters")
    private String vinNumber;

    @Size(max = 50, message = "Registration number must not exceed 50 characters")
    private String registrationNumber;

    @Size(max = 50, message = "Engine number must not exceed 50 characters")
    private String engineNumber;

    @NotBlank(message = "City is required")
    @Size(max = 100, message = "City must not exceed 100 characters")
    private String city;

    @NotBlank(message = "Province is required")
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

    @NotNull(message = "Price is required")
    @DecimalMin(value = "1.00", message = "Price must be at least R1.00")
    @DecimalMax(value = "50000000.00", message = "Price seems unrealistic")
    private BigDecimal price;

    private boolean isPriceNegotiable = true;

    @Size(max = 5000, message = "Features must not exceed 5000 characters")
    private String features;

    @Size(max = 2000, message = "Extras must not exceed 2000 characters")
    private String extras;

    @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Invalid phone number format")
    private String sellerPhone;

    private List<String> imageUrls;
}


