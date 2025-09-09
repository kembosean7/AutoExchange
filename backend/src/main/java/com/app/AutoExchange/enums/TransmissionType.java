package com.app.AutoExchange.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum TransmissionType {

    MANUAL("Manual"),
    AUTOMATIC("Automatic"),
    CVT("CVT"),
    SEMI_AUTOMATIC("Semi-Automatic"),
    DUAL_CLUTCH("Dual Clutch");

    private final String displayName;

}
