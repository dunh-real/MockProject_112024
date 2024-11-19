package com.mock.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mock.dto.request.InsuranceTypeDTO;
import com.mock.entity.InsuranceType;
import com.mock.repo.InsuranceTypeRepository;

/**
 * 
 */
@Service
public class InsuranceTypeService {

    @Autowired
    InsuranceTypeRepository insuranceTypeRepository;

    // method get all insurance types
    public Object getAllInsuranceTypes() {
        return insuranceTypeRepository.findAll();
    }

    // method create a new insurance type
    public InsuranceType createInsuranceType(InsuranceTypeDTO dto) throws Exception {
        InsuranceType insuranceType = insuranceTypeRepository.findByName(dto.getName());
        if (insuranceType != null) {
            throw new IllegalArgumentException("Already exists with name " + insuranceType.getName());
        }
        return insuranceTypeRepository.save(InsuranceType.builder().name(dto.getName()).build());
    }

    // method to retrieve a specific insurance by id
    public InsuranceType getInsuranceTypeById(int id) {
        return insuranceTypeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Insurance type not found with id " + id));
    }

    // method to update an existing insurance type
    public InsuranceType updateInsuranceType(InsuranceTypeDTO dto, int id) throws Exception {
        InsuranceType insuranceType = getInsuranceTypeById(id);
        InsuranceType updatedInsuranceType = insuranceTypeRepository.findByName(dto.getName());

        if (updatedInsuranceType != null && updatedInsuranceType.getId() != insuranceType.getId()) {
            throw new IllegalArgumentException("Already exists with name " + updatedInsuranceType.getName());
        }

        insuranceType.setName(dto.getName());
        return insuranceTypeRepository.save(insuranceType);
    }

    // method to delete an insurance type
    public InsuranceType deleteInsuranceType(int id) {
        InsuranceType insuranceType = getInsuranceTypeById(id);
        insuranceTypeRepository.delete(insuranceType);
        return insuranceType;
    }
}
