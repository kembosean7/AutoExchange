package com.app.AutoExchange.enums;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum VehicleCondition {
    EXCELLENT("Excellent - Like new condition"),
    VERY_GOOD("Very Good - Minor wear"),
    GOOD("Good - Some wear but well maintained"),
    FAIR("Fair - Noticeable wear"),
    POOR("Poor - Significant wear or damage"),
    SALVAGE("Salvage - Requires major repairs");

    private final String description;
}
