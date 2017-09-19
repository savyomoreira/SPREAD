package com.smoreira.spread.service;

import com.smoreira.spread.models.Anuncio;
import com.smoreira.spread.models.Usuario;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnuncioService {

    public List<Anuncio> getAll(){
        List<Anuncio> anuncioList = new ArrayList<>();
        anuncioList.add(new Anuncio(1L,new Usuario(), "teste"));
        anuncioList.add(new Anuncio(2L,new Usuario(), "teste1"));
        anuncioList.add(new Anuncio(3L,new Usuario(), "teste2"));
        anuncioList.add(new Anuncio(4L,new Usuario(), "teste3"));
        return anuncioList;
    }
}
