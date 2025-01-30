package org.example.backend.controllers;

import org.example.backend.models.ObraSocial;
import org.example.backend.services.ObraSocialService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

        import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/obras-sociales")
public class ObraSocialController {

    private final ObraSocialService obraSocialService;

    public ObraSocialController(ObraSocialService obraSocialService) {
        this.obraSocialService = obraSocialService;
    }

    @GetMapping
    public List<ObraSocial> obtenerTodas() {
        return obraSocialService.obtenerTodas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ObraSocial> obtenerPorId(@PathVariable Long id) {
        return obraSocialService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ObraSocial> crearObraSocial(@RequestBody ObraSocial obraSocial) {
        ObraSocial nuevaObra = obraSocialService.guardar(obraSocial);
        return ResponseEntity.ok(nuevaObra);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarObraSocial(@PathVariable Long id) {
        if (obraSocialService.obtenerPorId(id).isPresent()) {
            obraSocialService.eliminar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
