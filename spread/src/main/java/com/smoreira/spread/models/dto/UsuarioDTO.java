package com.smoreira.spread.models.dto;

import com.smoreira.spread.models.entity.Anuncio;
import com.smoreira.spread.models.entity.Usuario;

import java.util.HashMap;

public class UsuarioDTO extends HashMap<String, Object> {
    public UsuarioDTO(Usuario usuario) {
        this.put("id", usuario.getId());
        this.put("nome", usuario.getName());
        this.put("cep", usuario.getCep());
        this.put("email", usuario.getEmail());
        this.put("cidade", usuario.getCidade());
        this.put("bairro", usuario.getBairro());
        this.put("estado", usuario.getEstado());
        this.put("telefone", usuario.getTelefone());
    }
}
