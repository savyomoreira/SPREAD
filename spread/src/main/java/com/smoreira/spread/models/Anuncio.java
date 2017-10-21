package com.smoreira.spread.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name="ANUNCIO")
public class Anuncio{

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name= "id")
   private Long id;
   
   @ManyToOne
   @JoinColumn(name="id_usuario", referencedColumnName="id" )
   private Usuario usuario;
   
   @Column(name= "descricao")
   private String descricao;

   @Column(name= "data_anuncio")
   private Date dataAnuncio;

   @ManyToOne(fetch = FetchType.EAGER, targetEntity = CategoriaAnuncio.class,
           cascade = CascadeType.ALL)
   @JoinColumn(name = "ID_CATEGORIA_ANUNCIO")
   private CategoriaAnuncio categoria;

   @Column(name = "foto", length = 65535)
   private String foto;

}
