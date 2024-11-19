package com.mock.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mock.dto.request.InsuranceTypeDTO;
import com.mock.service.InsuranceTypeService;

/**
 * The InsuranceTypeController handles HTTP requests related to insurance types.
 * It provides endpoints for creating, retrieving, updating, and deleting insurance types.
 * 
 * This controller uses dependency injection to interact with the InsuranceTypeService,
 * which contains the business logic for insurance type operations.
 * 
 * Endpoints:
 * - GET /api/insurance-types: Retrieve a list of all insurance types.
 * - GET /api/insurance-types/{id}: Retrieve details of a specific insurance type by ID.
 * - POST /api/insurance-types: Create a new insurance type.
 * - PUT /api/insurance-types/{id}: Update an existing insurance type by ID.
 * - DELETE /api/insurance-types/{id}: Delete an insurance type by ID.
 * 
 * Exception Handling:
 * - Handles cases where the requested insurance type is not found and returns appropriate HTTP status codes.
 * 
 * Example usage:
 * - This controller can be used in an insurance management system to manage different categories of insurance.
 * 
 * Author: kiet-kun-afk
 * Date: 11/19/2024
 */
@RestController
@RequestMapping("/api/insurance-types")
public class InsuranceTypeController {

    @Autowired
    private InsuranceTypeService insuranceTypeService;

    @GetMapping("")
    public ResponseEntity<?> getAllInsuranceTypes() {
        // Logic to retrieve all insurance types
        return ResponseEntity.ok(insuranceTypeService.getAllInsuranceTypes());
    }

    @PostMapping("")
    public ResponseEntity<?> getAllInsuranceTypes(@RequestBody InsuranceTypeDTO request) throws Exception {
        // Logic to create a new insurance type
        return ResponseEntity.ok(insuranceTypeService.createInsuranceType(request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getInsuranceTypeById(@PathVariable int id) {
        // Logic to retrieve details of a specific insurance type by ID
        return ResponseEntity.ok(insuranceTypeService.getInsuranceTypeById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateInsuranceType(@RequestBody InsuranceTypeDTO request, @PathVariable int id)
            throws Exception {
        // Logic to update an existing insurance type by ID
        return ResponseEntity.ok(insuranceTypeService.updateInsuranceType(request, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteInsuranceType(@PathVariable int id) {
        // Logic to delete an insurance type by ID
        return ResponseEntity.ok(insuranceTypeService.deleteInsuranceType(id));
    }
}
