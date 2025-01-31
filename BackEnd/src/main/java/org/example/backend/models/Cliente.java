package org.example.backend.models;

import jakarta.persistence.*;


import java.time.LocalDate;
import lombok.*;
@Entity
@Table(name = "clientes")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_cliente;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false, length = 100)
    private String apellido;

    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @Column(nullable = false, unique = true, length = 20)
    private String telefono;

    @Column(name = "fecha_registro", nullable = false)
    private LocalDate fechaRegistro;

    // Relación con ObraSocial
    @ManyToOne
    // van los nombres de los atributos de la tabla correspondiente, no los atributos de otra tabla que se relaciona
    @JoinColumn(name = "id_obra_social", nullable = false)
    private ObraSocial obraSocial;

}

