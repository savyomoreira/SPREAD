package com.smoreira.spread.models.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="USUARIO")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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

	@ManyToOne(targetEntity = Bairro.class, fetch = FetchType.EAGER)
	@JoinColumn(name="id_bairro", referencedColumnName="id_bairro" )
	private Bairro bairro;

	@Column(name = "endereco")
	private String endereco;

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
