package com.smoreira.spread.models.entity;

import javax.persistence.*;
import java.sql.Blob;

//@Data
//@Entity
//@Table(name="FOTOS_ANUNCIO")
public class FotosAnuncio {

    @ManyToOne(targetEntity = Anuncio.class, fetch =FetchType.LAZY)
    @JoinColumn(name = "id",updatable = false, insertable = false)
    private Anuncio anuncio;

    //@Lob
    //@Column(name = "foto")
    @Transient
    private Blob foto;

    public Anuncio getAnuncio() {
        return this.anuncio;
    }

    public void setAnuncio(Anuncio anuncio) {
        this.anuncio = anuncio;
    }

    public Blob getFoto() {
        return this.foto;
    }

    public void setFoto(Blob foto) {
        this.foto = foto;
    }
}
