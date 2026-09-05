package com.app.AutoExchange.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum FuelType {

    PETROL("Petrol"),
    DIESEL("Diesel"),
    ELECTRIC("Electric"),
    HYBRID("Hybrid"),
    PLUGIN_HYBRID("Plugin Hybrid"),
    CNG("CNG"),
    LPG("LPG");

    private final String displayName;

}
