package com.smoreira.spread.models.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="BAIRRO")
public class Bairro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "id_bairro")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, targetEntity = Cidade.class,
            cascade = CascadeType.ALL)
    @JoinColumn(name = "id_cidade")
    private Cidade cidade;

    @Column(name= "nome")
    private String nome;
}
