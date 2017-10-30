package com.smoreira.spread.models.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Data
@Entity
@Table(name="USUARIO")
public class Usuario {

	@Id
	@Column(name = "id")
	private Long id;
	
	@Column(name = "nome")
	private String name;

	@Column(name = "email")
	private String email;

	@Column(name = "senha")
	private String senha;

	@Column(name = "telefone")
	private String telefone;

	@Column(name = "cep")
	private String cep;

	@Column(name = "bairro")
	private String bairro;

	@Column(name = "endereco")
	private String endereco;

	@Column(name = "cidade")
	private String cidade;

	@Column(name = "ESTADO")
	private String estado;
	// private String foto;

	@Column(name = "complemento")
	private String complemento;
	
	public Usuario(String name, String email) {
		super();
		this.name = name;
		this.email = email;
	}
	public Usuario() {
	}


}
