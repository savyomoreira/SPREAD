package com.smoreira.spread.models.entity;

import javax.persistence.*;
import java.util.Date;

//@Data
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

   @Column(name = "titulo_anuncio")
   private String tituloAnuncio;

   public Long getId() {
      return this.id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public Usuario getUsuario() {
      return this.usuario;
   }

   public void setUsuario(Usuario usuario) {
      this.usuario = usuario;
   }

   public String getDescricao() {
      return this.descricao;
   }

   public void setDescricao(String descricao) {
      this.descricao = descricao;
   }

   public Date getDataAnuncio() {
      return this.dataAnuncio;
   }

   public void setDataAnuncio(Date dataAnuncio) {
      this.dataAnuncio = dataAnuncio;
   }

   public CategoriaAnuncio getCategoria() {
      return this.categoria;
   }

   public void setCategoria(CategoriaAnuncio categoria) {
      this.categoria = categoria;
   }

   public String getFoto() {
      return this.foto;
   }

   public void setFoto(String foto) {
      this.foto = foto;
   }

   public String getTituloAnuncio() {
      return this.tituloAnuncio;
   }

   public void setTituloAnuncio(String tituloAnuncio) {
      this.tituloAnuncio = tituloAnuncio;
   }
}
