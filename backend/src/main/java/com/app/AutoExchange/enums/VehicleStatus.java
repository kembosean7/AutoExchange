package com.app.AutoExchange.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum VehicleStatus {

    ACTIVE("Active"),
    SOLD("Sold"),
    PENDING("Pending Sale"),
    DRAFT("Draft"),
    INACTIVE("Inactive"),
    SUSPENDED("Suspended");

    private final String displayName;
}
