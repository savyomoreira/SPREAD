package com.smoreira.spread.models.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="ESTADO")
public class Estado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "id_estado")
    private Long id;

    @Column(name= "nome")
    private String nome;
}
