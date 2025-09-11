package com.app.AutoExchange.entity;

import com.app.AutoExchange.enums.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "make_id", nullable = false)
    private VehicleMake make;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "model_id", nullable = false)
    private VehicleModel mode;

    @Column(nullable = false)
    private Integer year;

    @Column(length = 50)
    private String trim;

    @Enumerated(EnumType.STRING)
    private BodyType bodyType;

    @Enumerated(EnumType.STRING)
    private FuelType fuelType;

    @Enumerated(EnumType.STRING)
    private TransmissionType transmissionType;

    private Integer numberOfDoors;

    private Integer seatingCapacity;

    @Column(precision = 3, scale = 1)
    private BigDecimal engineSize;

    @Column(length = 20)
    private Integer horsePower;

    private String driveType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private VehicleCondition condition;

    private Integer mileage;

    private Integer previousOwner = 1;

    private boolean hasAccidentHistory = false;

    private boolean hasServiceHistory = true;

    @Column(nullable = false, length = 100)
    private String city;

    @Column(nullable = false, length = 100)
    private String province;

    private String postalCode;

    @Column(precision = 10, scale = 8)
    private BigDecimal latitude;

    @Column(precision = 11, scale = 8)
    private BigDecimal longitude;

    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal price;

    @Column(precision = 15, scale = 2)
    private BigDecimal originalPrice;

    private boolean isPriceNegotiable = true;

    @Column(columnDefinition = "TEXT")
    private String features;

    @Column(columnDefinition = "TEXT")
    private String extras;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seller_id", nullable = false)
    private User user;

    @Column(length = 20)
    private String sellerPhone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private VehicleStatus status = VehicleStatus.DRAFT;

    private boolean isFeatured = false;
    private boolean isPremium = false;

    @Column(nullable = false)
    @Builder.Default
    private Integer viewCount = 0;

    @Column(nullable = false)
    @Builder.Default
    private Integer inquiryCount = 0;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Column(name = "featured_until")
    private LocalDateTime featuredUntil;

    @Column(name = "premium_until")
    private LocalDateTime premiumUntil;

    @OneToMany(mappedBy = "vehicle", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<VehicleImage> images;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
        if (originalPrice == null) {
            originalPrice = price;
        }
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Helper methods
    public boolean isFeaturedActive() {
        return isFeatured && featuredUntil != null && featuredUntil.isAfter(LocalDateTime.now());
    }

    public boolean isPremiumActive() {
        return isPremium && premiumUntil != null && premiumUntil.isAfter(LocalDateTime.now());
    }

    public boolean isAvailable() {
        return status == VehicleStatus.ACTIVE;
    }
}