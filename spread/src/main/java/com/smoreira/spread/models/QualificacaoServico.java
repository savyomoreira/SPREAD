package com.smoreira.spread.models;

import lombok.Data;

import javax.persistence.*;

import java.util.Date;

@Data
@Entity
@Table(name="qualificacao_servico")
public class QualificacaoServico
{

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name= "id_qualificacao_servico")
   private Integer id;
   
   @ManyToOne
   private Servico servico;
   
   @ManyToOne
   private Agendamento agendamento;

   @Column(name = "comentario")
   private String comentario;

   @Column(name = "data_Comentario")
   @Temporal(TemporalType.DATE)
   private Date data;


}
