package com.app.AutoExchange.dto.response;

import com.app.AutoExchange.enums.*;
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
public class VehicleResponse {


    private Long id;
    private String title;
    private String description;

    // Make and Model info
    private Long makeId;
    private String makeName;
    private Long modelId;
    private String modelName;

    private Integer year;
    private String trim;

    // Technical specs
    private BodyType bodyType;
    private FuelType fuelType;
    private TransmissionType transmissionType;
    private Integer numberOfDoors;
    private Integer seatingCapacity;
    private BigDecimal engineSize;
    private Integer horsePower;
    private String driveType;

    // Condition and history
    private VehicleCondition condition;
    private Integer mileage;
    private Integer previousOwners;
    private boolean hasAccidentHistory;
    private boolean hasServiceHistory;

    // Location
    private String city;
    private String province;
    private String postalCode;

    // Pricing
    private BigDecimal price;
    private boolean isPriceNegotiable;

    // Features
    private String features;
    private String extras;

    // Seller info (limited)
    private Integer sellerId;
    private String sellerFirstName;
    private String sellerPhone;

    // Status and metrics
    private VehicleStatus status;
    private boolean isFeatured;
    private boolean isPremium;
    private Integer viewCount;
    private Integer inquiryCount;

    // Images
    private List<VehicleImageResponse> images;
    private String primaryImageUrl;

    // Timestamps
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}