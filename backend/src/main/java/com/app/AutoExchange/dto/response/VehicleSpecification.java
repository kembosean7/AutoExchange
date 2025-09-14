package com.app.AutoExchange.dto.response;

import com.app.AutoExchange.dto.request.VehicleSearchRequest;
import com.app.AutoExchange.entity.Vehicle;
import com.app.AutoExchange.enums.VehicleStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.criteria.Predicate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VehicleSpecification {
    public static Specification<Vehicle> buildSpecification(VehicleSearchRequest searchRequest) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            // Always filter by ACTIVE status
            predicates.add(criteriaBuilder.equal(root.get("status"), VehicleStatus.ACTIVE));

            // Search term (title, description, make name, model name)
            if (searchRequest.getSearchTerm() != null && !searchRequest.getSearchTerm().trim().isEmpty()) {
                String searchPattern = "%" + searchRequest.getSearchTerm().toLowerCase() + "%";

                Predicate titleMatch = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("title")), searchPattern);
                Predicate descriptionMatch = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("description")), searchPattern);
                Predicate makeMatch = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("make").get("name")), searchPattern);
                Predicate modelMatch = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("model").get("name")), searchPattern);

                predicates.add(criteriaBuilder.or(titleMatch, descriptionMatch, makeMatch, modelMatch));
            }

            // Make filter
            if (searchRequest.getMakeId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("make").get("id"), searchRequest.getMakeId()));
            }

            // Model filter
            if (searchRequest.getModelId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("model").get("id"), searchRequest.getModelId()));
            }

            // Year range
            if (searchRequest.getMinYear() != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("year"), searchRequest.getMinYear()));
            }
            if (searchRequest.getMaxYear() != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("year"), searchRequest.getMaxYear()));
            }

            // Price range
            if (searchRequest.getMinPrice() != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("price"), searchRequest.getMinPrice()));
            }
            if (searchRequest.getMaxPrice() != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("price"), searchRequest.getMaxPrice()));
            }

            // Max mileage
            if (searchRequest.getMaxMileage() != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("mileage"), searchRequest.getMaxMileage()));
            }

            // Body type
            if (searchRequest.getBodyType() != null) {
                predicates.add(criteriaBuilder.equal(root.get("bodyType"), searchRequest.getBodyType()));
            }

            // Fuel type
            if (searchRequest.getFuelType() != null) {
                predicates.add(criteriaBuilder.equal(root.get("fuelType"), searchRequest.getFuelType()));
            }

            // Transmission type
            if (searchRequest.getTransmissionType() != null) {
                predicates.add(criteriaBuilder.equal(root.get("transmissionType"), searchRequest.getTransmissionType()));
            }

            // Condition
            if (searchRequest.getCondition() != null) {
                predicates.add(criteriaBuilder.equal(root.get("condition"), searchRequest.getCondition()));
            }

            // Location filters
            if (searchRequest.getCity() != null && !searchRequest.getCity().trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("city")),
                        "%" + searchRequest.getCity().toLowerCase() + "%"));
            }

            if (searchRequest.getProvince() != null && !searchRequest.getProvince().trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("province")),
                        "%" + searchRequest.getProvince().toLowerCase() + "%"));
            }

            // Featured only
            if (searchRequest.getFeaturedOnly() != null && searchRequest.getFeaturedOnly()) {
                predicates.add(criteriaBuilder.equal(root.get("isFeatured"), true));
                predicates.add(criteriaBuilder.greaterThan(root.get("featuredUntil"),
                        criteriaBuilder.currentTimestamp()));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Vehicle> isActive() {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("status"), VehicleStatus.ACTIVE);
    }

    public static Specification<Vehicle> belongsToUser(Integer userId) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("seller").get("id"), userId);
    }

    public static Specification<Vehicle> hasStatus(VehicleStatus status) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("status"), status);
    }

    public static Specification<Vehicle> isFeatured() {
        return (root, query, criteriaBuilder) -> {
            Predicate isFeatured = criteriaBuilder.equal(root.get("isFeatured"), true);
            Predicate notExpired = criteriaBuilder.greaterThan(root.get("featuredUntil"),
                    criteriaBuilder.currentTimestamp());
            return criteriaBuilder.and(isFeatured, notExpired);
        };
    }

    public static Specification<Vehicle> isPremium() {
        return (root, query, criteriaBuilder) -> {
            Predicate isPremium = criteriaBuilder.equal(root.get("isPremium"), true);
            Predicate notExpired = criteriaBuilder.greaterThan(root.get("premiumUntil"),
                    criteriaBuilder.currentTimestamp());
            return criteriaBuilder.and(isPremium, notExpired);
        };
    }

    public static Specification<Vehicle> inPriceRange(BigDecimal minPrice, BigDecimal maxPrice) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (minPrice != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("price"), minPrice));
            }
            if (maxPrice != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("price"), maxPrice));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<Vehicle> inLocation(String city, String province) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (city != null && !city.trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("city")),
                        "%" + city.toLowerCase() + "%"));
            }
            if (province != null && !province.trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("province")),
                        "%" + province.toLowerCase() + "%"));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
