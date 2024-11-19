package com.mock.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * 
 */
@Entity
@Table(name = "insurance_type")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InsuranceType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    // constructor with name parameter
    public InsuranceType(String name) {
        this.name = name;
    }
}
