package org.example.backend.services;

import org.example.backend.models.Cliente;
import org.example.backend.models.ObraSocial;
import org.example.backend.repository.ClienteRepository;
import org.example.backend.repository.ObraSocialRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {
    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository, ObraSocialRepository obraSocialRepository) {
        this.clienteRepository = clienteRepository;
    }

    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }


}
