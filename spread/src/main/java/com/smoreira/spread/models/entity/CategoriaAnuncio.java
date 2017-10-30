package com.smoreira.spread.models.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="CATEGORIA_ANUNCIO")
public class CategoriaAnuncio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "ID_CATEGORIA_ANUNCIO")
    private Long id;

    @Column(name= "nome")
    private String nome;
}
