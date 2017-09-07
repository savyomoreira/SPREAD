package com.smoreira.spread.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import java.util.Date;

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
   
   private String comentario;
   
   private Date data;

   public Integer getId()
   {
      return this.id;
   }

   public void setId(Integer id)
   {
      this.id = id;
   }

   public Servico getServico()
   {
      return this.servico;
   }

   public void setServico(Servico servico)
   {
      this.servico = servico;
   }

   public Agendamento getAgendamento()
   {
      return this.agendamento;
   }

   public void setAgendamento(Agendamento agendamento)
   {
      this.agendamento = agendamento;
   }

   public String getComentario()
   {
      return this.comentario;
   }

   public void setComentario(String comentario)
   {
      this.comentario = comentario;
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
