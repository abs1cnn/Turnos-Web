
package org.example.backend.repository;

import org.example.backend.models.Especialidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EspecialidadRepository extends JpaRepository<Especialidad, Integer> {
    // Aquí puedes agregar consultas personalizadas si es necesario
}
