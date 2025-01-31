package org.example.backend.controllers;

import org.example.backend.models.Especialidad;
import org.example.backend.services.EspecialidadService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

        import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/especialidades")
public class EspecialidadController {

    private final EspecialidadService especialidadService;

    public EspecialidadController(EspecialidadService especialidadService) {
        this.especialidadService = especialidadService;
    }

    // Obtener todas las especialidades
    @GetMapping
    public List<Especialidad> obtenerTodas() {
        return especialidadService.obtenerTodas();
    }

    // Obtener una especialidad por ID
    @GetMapping("/{id}")
    public ResponseEntity<Especialidad> obtenerPorId(@PathVariable int id) {
        Optional<Especialidad> especialidad = especialidadService.obtenerPorId(id);
        if (especialidad.isPresent()) {
            return ResponseEntity.ok(especialidad.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // Crear una nueva especialidad
    @PostMapping
    public ResponseEntity<Especialidad> crearEspecialidad(@RequestBody Especialidad especialidad) {
        Especialidad nuevaEspecialidad = especialidadService.guardar(especialidad);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevaEspecialidad);
    }

    // Actualizar una especialidad existente
    @PutMapping("/{id}")
    public ResponseEntity<Especialidad> actualizarEspecialidad(@PathVariable int id, @RequestBody Especialidad especialidad) {
        Optional<Especialidad> existingEspecialidad = especialidadService.obtenerPorId(id);
        if (existingEspecialidad.isPresent()) {
            especialidad.setIdEspecialidade(id);
            Especialidad updatedEspecialidad = especialidadService.actualizar(especialidad);
            return ResponseEntity.ok(updatedEspecialidad);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // Eliminar una especialidad por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarEspecialidad(@PathVariable int id) {
        Optional<Especialidad> especialidad = especialidadService.obtenerPorId(id);
        if (especialidad.isPresent()) {
            especialidadService.eliminar(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
