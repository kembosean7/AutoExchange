package com.app.AutoExchange.repository;

import com.app.AutoExchange.entity.User;
import com.app.AutoExchange.entity.Vehicle;
import com.app.AutoExchange.enums.VehicleStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    Page<Vehicle> findByStatusOrderByCreatedAtDesc(VehicleStatus status, Pageable pageable);

    Page<Vehicle> findByUserAndStatusOrderByCreatedAtDesc(User user, VehicleStatus status, Pageable pageable);

    List<Vehicle> findByUserOrderByCreatedAtDesc(User user);

    // Search and filter queries
    @Query("SELECT v FROM Vehicle v WHERE v.status = 'ACTIVE' AND " +
            "(:makeId IS NULL OR v.make.id = :makeId) AND " +
            "(:modelId IS NULL OR v.model.id = :modelId) AND " +
            "(:minPrice IS NULL OR v.price >= :minPrice) AND " +
            "(:maxPrice IS NULL OR v.price <= :maxPrice) AND " +
            "(:minYear IS NULL OR v.year >= :minYear) AND " +
            "(:maxYear IS NULL OR v.year <= :maxYear) AND " +
            "(:city IS NULL OR LOWER(v.city) LIKE LOWER(CONCAT('%', :city, '%')))")
    Page<Vehicle> findVehiclesWithFilters(
            @Param("makeId") Long makeId,
            @Param("modelId") Long modelId,
            @Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice,
            @Param("minYear") Integer minYear,
            @Param("maxYear") Integer maxYear,
            @Param("city") String city,
            Pageable pageable
    );

    // Featured and premium vehicles
    @Query("SELECT v FROM Vehicle v WHERE v.status = 'ACTIVE' AND v.isFeatured = true AND " +
            "v.featuredUntil > CURRENT_TIMESTAMP ORDER BY v.createdAt DESC")
    List<Vehicle> findActiveFeaturedVehicles();

    @Query("SELECT v FROM Vehicle v WHERE v.status = 'ACTIVE' AND v.isPremium = true AND " +
            "v.premiumUntil > CURRENT_TIMESTAMP ORDER BY v.createdAt DESC")
    Page<Vehicle> findActivePremiumVehicles(Pageable pageable);

    // Search by text
    @Query("SELECT v FROM Vehicle v WHERE v.status = 'ACTIVE' AND " +
            "(LOWER(v.title) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(v.description) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(v.make.name) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(v.model.name) LIKE LOWER(CONCAT('%', :searchTerm, '%')))")
    Page<Vehicle> searchVehicles(@Param("searchTerm") String searchTerm, Pageable pageable);

    // Location-based queries
    @Query("SELECT v FROM Vehicle v WHERE v.status = 'ACTIVE' AND " +
            "LOWER(v.city) = LOWER(:city) ORDER BY v.createdAt DESC")
    Page<Vehicle> findByCity(@Param("city") String city, Pageable pageable);

    @Query("SELECT v FROM Vehicle v WHERE v.status = 'ACTIVE' AND " +
            "LOWER(v.province) = LOWER(:province) ORDER BY v.createdAt DESC")
    Page<Vehicle> findByProvince(@Param("province") String province, Pageable pageable);

    // Similar vehicles (same make/model but different vehicle)
    @Query("SELECT v FROM Vehicle v WHERE v.status = 'ACTIVE' AND v.id != :vehicleId AND " +
            "v.make.id = :makeId AND v.model.id = :modelId ORDER BY ABS(v.price - :price) ASC")
    List<Vehicle> findSimilarVehicles(
            @Param("vehicleId") Long vehicleId,
            @Param("makeId") Long makeId,
            @Param("modelId") Long modelId,
            @Param("price") BigDecimal price,
            Pageable pageable
    );

    // Recently viewed vehicles (placeholder - would need view tracking)
    @Query("SELECT v FROM Vehicle v WHERE v.status = 'ACTIVE' ORDER BY v.viewCount DESC, v.createdAt DESC")
    List<Vehicle> findMostViewedVehicles(Pageable pageable);

    // Price range analysis
    @Query("SELECT MIN(v.price), MAX(v.price), AVG(v.price) FROM Vehicle v WHERE v.status = 'ACTIVE' AND " +
            "v.make.id = :makeId AND v.model.id = :modelId")
    Object[] findPriceStatsByMakeAndModel(@Param("makeId") Long makeId, @Param("modelId") Long modelId);

    // Count queries
    long countByUserAndStatus(User user, VehicleStatus status);

    long countByStatus(VehicleStatus status);

    @Query("SELECT COUNT(v) FROM Vehicle v WHERE v.status = 'ACTIVE' AND v.createdAt >= :since")
    long countNewVehiclesSince(@Param("since") java.time.LocalDateTime since);


    // Admin/Management queries
    @Query("SELECT v FROM Vehicle v WHERE v.status = :status ORDER BY v.createdAt DESC")
    Page<Vehicle> findByStatusForAdmin(@Param("status") VehicleStatus status, Pageable pageable);

    @Query("SELECT v FROM Vehicle v WHERE v.user.id = :sellerId ORDER BY v.createdAt DESC")
    List<Vehicle> findAllBySellerId(@Param("sellerId") Integer sellerId);



}
