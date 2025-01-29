package org.example.backend.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "obras_sociales")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class ObraSocial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String nombre;

    @Column(length = 255)
    private String descripcion;

    // Relación con Cliente
    @OneToMany(mappedBy = "obraSocial", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Cliente> clientes;
}