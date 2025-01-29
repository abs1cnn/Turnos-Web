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
    private final ObraSocialRepository obraSocialRepository;

    public ClienteService(ClienteRepository clienteRepository, ObraSocialRepository obraSocialRepository) {
        this.clienteRepository = clienteRepository;
        this.obraSocialRepository = obraSocialRepository;
    }

    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> obtenerClientePorId(Long id) {
        return clienteRepository.findById(id);
    }

    public Cliente guardarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente guardarClienteConObraSocial(Cliente cliente, Long idObraSocial) {
        ObraSocial obraSocial = obraSocialRepository.findById(idObraSocial)
                .orElseThrow(() -> new RuntimeException("Obra Social no encontrada"));
        cliente.setObraSocial(obraSocial);
        return clienteRepository.save(cliente);
    }

    public void eliminarCliente(Long id) {
        clienteRepository.deleteById(id);
    }
}
