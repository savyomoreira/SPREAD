package com.smoreira.spread.models.entity;

import lombok.Data;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name="agendamento")
public class Agendamento
{

   @Id
   @GeneratedValue
   @Column(name= "id_agendamento")
   private Integer id;
   
   @ManyToOne()
   @JoinColumn(name="id_usuario_solicitante", referencedColumnName="id" )
   private Usuario usuarioSolicitante;
   
   @ManyToOne
   @JoinColumn(name="id_anuncio", referencedColumnName="id" )
   private Anuncio anuncio;
   
   @Column(name= "data")
   private Date data;


}
