package com.smoreira.spread.models.dto;

import com.smoreira.spread.models.entity.Anuncio;

import java.util.HashMap;
import java.util.List;

public class AnuncioDTO extends HashMap<String, Object> {
    public AnuncioDTO(Anuncio anuncio) {
        this.put("id", anuncio.getId());
        this.put("descricao", anuncio.getDescricao());
        this.put("foto", anuncio.getFoto());
        this.put("categoria", anuncio.getCategoria());
        this.put("usuario", anuncio.getUsuario());
        this.put("tituloAnuncio", anuncio.getTituloAnuncio());
    }

}
