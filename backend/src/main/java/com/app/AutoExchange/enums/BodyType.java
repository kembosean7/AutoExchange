package com.app.AutoExchange.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum BodyType {

    SEDAN("Sedan"),
    HATCHBACK("Hatchback"),
    SUV("SUV"),
    COUPE("Coupe"),
    CONVERTIBLE("Convertible"),
    WAGON("Wagon"),
    PICKUP("Pickup Truck"),
    VAN("Van"),
    MOTORCYCLE("Motorcycle"),
    TRUCK("Truck");

    private final String displaName;


}
