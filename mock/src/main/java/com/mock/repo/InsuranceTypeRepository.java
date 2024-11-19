package com.mock.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mock.entity.InsuranceType;

/**
 * 
 */
public interface InsuranceTypeRepository extends JpaRepository<InsuranceType, Integer> {
    InsuranceType findByName(String name);
}
