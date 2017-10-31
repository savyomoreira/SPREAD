package com.smoreira.spread.models.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="CIDADE")
public class Cidade {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name= "id_cidade")
   private Long id;

   @ManyToOne(fetch = FetchType.EAGER, targetEntity = Estado.class,
           cascade = CascadeType.ALL)
   @JoinColumn(name = "id_estado")
   private Estado estado;

   @Column(name= "nome")
   private String nome;
}
