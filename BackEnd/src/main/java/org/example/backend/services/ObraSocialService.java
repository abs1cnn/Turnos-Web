package org.example.backend.services;

import org.example.backend.models.ObraSocial;
import org.example.backend.repository.ObraSocialRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ObraSocialService {

    private final ObraSocialRepository obraSocialRepository;

    public ObraSocialService(ObraSocialRepository obraSocialRepository) {
        this.obraSocialRepository = obraSocialRepository;
    }

    public List<ObraSocial> obtenerTodas() {
        return obraSocialRepository.findAll();
    }

    public Optional<ObraSocial> obtenerPorId(Long id) {
        return obraSocialRepository.findById(id);
    }

    public Optional<ObraSocial> obtenerPorNombre(String nombre) {
        return obraSocialRepository.findByNombre(nombre);
    }

    public ObraSocial guardar(ObraSocial obraSocial) {
        return obraSocialRepository.save(obraSocial);
    }

    public void eliminar(Long id) {
        obraSocialRepository.deleteById(id);
    }
}
