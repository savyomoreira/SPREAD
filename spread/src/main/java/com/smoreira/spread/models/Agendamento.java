package com.smoreira.spread.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="agendamento")
public class Agendamento
{

   @Id
   @GeneratedValue
   @Column(name= "id_agendamento")
   private Integer id;
   
   @ManyToOne()
   @JoinColumn(name="id_usuario_solicitante", referencedColumnName="id_usuario" )
   private Usuario usuarioSolicitante;
   
   @ManyToOne
   @JoinColumn(name="id_anuncio", referencedColumnName="id_anuncio" )
   private Anuncio anuncio;
   
   @Column(name= "data")
   private Date data;

   public Integer getId()
   {
      return this.id;
   }

   public void setId(Integer id)
   {
      this.id = id;
   }

//   public Usuario getUsuarioSolicitante()
//   {
//      return this.usuarioSolicitante;
//   }
//
//   public void setUsuarioSolicitante(Usuario usuarioSolicitante)
//   {
//      this.usuarioSolicitante = usuarioSolicitante;
//   }

   public Anuncio getAnuncio()
   {
      return this.anuncio;
   }

   public void setAnuncio(Anuncio anuncio)
   {
      this.anuncio = anuncio;
   }

   public Date getData()
   {
      return this.data;
   }

   public void setData(Date data)
   {
      this.data = data;
   }
}
