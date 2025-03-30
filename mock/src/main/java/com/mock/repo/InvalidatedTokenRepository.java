package com.mock.repo;

import com.mock.entity.InvalidatedToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface InvalidatedTokenRepository extends JpaRepository<InvalidatedToken,Integer> {
    boolean existsById(UUID uuid);
}
