package com.app.AutoExchange.repository;

import com.app.AutoExchange.entity.Vehicle;
import com.app.AutoExchange.entity.VehicleImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VehicleImageRepository extends JpaRepository<VehicleImage, Long> {

    List<VehicleImage> findByVehicleOrderByDisplayOrderAsc(Vehicle vehicle);

    List<VehicleImage> findByVehicleIdOrderByDisplayOrderAsc(Long vehicleId);

    Optional<VehicleImage> findByVehicleAndIsPrimaryTrue(Vehicle vehicle);

    @Query("SELECT vi FROM VehicleImage vi WHERE vi.vehicle.id = :vehicleId ORDER BY vi.isPrimary DESC, vi.displayOrder ASC")
    List<VehicleImage> findByVehicleIdOrderByPrimaryAndDisplayOrder(@Param("vehicleId") Long vehicleId);

    long countByVehicle(Vehicle vehicle);

    long countByVehicleId(Long vehicleId);

    void deleteByVehicle(Vehicle vehicle);

    void deleteByVehicleId(Long vehicleId);
}
