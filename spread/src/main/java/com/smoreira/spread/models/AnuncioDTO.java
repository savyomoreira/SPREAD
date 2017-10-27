package com.smoreira.spread.models;

import java.util.HashMap;

public class AnuncioDTO extends HashMap<String, Object> {
    public AnuncioDTO(Anuncio anuncio) {
        this.put("id", anuncio.getId());
        this.put("descricao", anuncio.getDescricao());
        this.put("foto", anuncio.getFoto());
        this.put("categoria", anuncio.getCategoria());
        this.put("usuario", anuncio.getUsuario());
    }
}
