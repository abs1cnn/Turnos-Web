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

}
