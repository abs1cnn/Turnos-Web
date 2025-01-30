package org.example.backend.repository;

import org.example.backend.models.ObraSocial;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ObraSocialRepository extends JpaRepository<ObraSocial, Long> {
    Optional<ObraSocial> findByNombre(String nombre);
}
