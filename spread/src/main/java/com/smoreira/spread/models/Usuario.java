package com.smoreira.spread.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="usuario")
public class Usuario {

	@Id
	@SequenceGenerator(allocationSize=1, initialValue=1, sequenceName="sq_id_usuario", name="sq_id_usuario")
	@GeneratedValue(generator="sq_id_usuario", strategy=GenerationType.SEQUENCE)
	@Column(name = "id_usuario")
	private Integer id;
	
	@Column(name = "nome")
	private String name;
	private String email;
	private String telefone;
	private String cep;
	private String bairro;
	private String rua;
	private String cidade;
	private String estado;
	// private String foto;
	
	public Usuario(String name, String email) {
		super();
		this.name = name;
		this.email = email;
	}
	public Usuario() {
	}

	public Integer getId() {
		return this.id;
	}


	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return this.telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCep() {
		return this.cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getBairro() {
		return this.bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getRua() {
		return this.rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getCidade() {
		return this.cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return this.estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	// public String getFoto()
	// {
	// return this.foto;
	// }
	//
	// public void setFoto(String foto)
	// {
	// this.foto = foto;
	// }
}
