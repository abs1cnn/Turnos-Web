package org.example.backend.services;


import org.example.backend.models.Especialidad;
import org.example.backend.repository.EspecialidadRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EspecialidadService {

    private final EspecialidadRepository especialidadRepository;

    public EspecialidadService(EspecialidadRepository especialidadRepository) {
        this.especialidadRepository = especialidadRepository;
    }

    // Obtener todas las especialidades
    public List<Especialidad> obtenerTodas() {
        return especialidadRepository.findAll();
    }

    // Obtener una especialidad por ID
    public Optional<Especialidad> obtenerPorId(int id) {
        return especialidadRepository.findById(id);
    }

    // Guardar una nueva especialidad
    public Especialidad guardar(Especialidad especialidad) {
        return especialidadRepository.save(especialidad);
    }

    // Eliminar una especialidad por ID
    public void eliminar(int id) {
        especialidadRepository.deleteById(id);
    }

    // Actualizar una especialidad (opcional, si la necesitas)
    public Especialidad actualizar(Especialidad especialidad) {
        return especialidadRepository.save(especialidad);
    }
}
