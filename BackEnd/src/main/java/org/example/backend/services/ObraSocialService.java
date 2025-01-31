package org.example.backend.services;

import org.example.backend.models.ObraSocial;
import org.example.backend.repository.ObraSocialRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ObraSocialService {

    private final ObraSocialRepository obraSocialRepository;

    public ObraSocialService(ObraSocialRepository obraSocialRepository) {
        this.obraSocialRepository = obraSocialRepository;
    }

    @Transactional
    public List<ObraSocial> obtenerTodas() {
        return obraSocialRepository.findAll();
    }
}
