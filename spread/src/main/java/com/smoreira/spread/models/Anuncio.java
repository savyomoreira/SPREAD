package com.smoreira.spread.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="anuncio")
public class Anuncio
{

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name= "id_anuncio")
   private Long id;
   
   @ManyToOne
   @JoinColumn(name="id_usuario", referencedColumnName="id_usuario" )
   private Usuario usuario;
   
   @Column(name= "descricao")
   private String descricao;

   public Anuncio(Long id, Usuario usuario, String descricao) {
      this.id = id;
      this.usuario = usuario;
      this.descricao = descricao;
   }

   public Anuncio() {
   }

   public Long getId()
   {
      return this.id;
   }

   public void setId(Long id)
   {
      this.id = id;
   }

   public Usuario getUsuario()
   {
      return this.usuario;
   }

   public void setUsuario(Usuario usuario)
   {
      this.usuario = usuario;
   }

   public String getDescricao()
   {
      return this.descricao;
   }

   public void setDescricao(String descricao)
   {
      this.descricao = descricao;
   }
}
