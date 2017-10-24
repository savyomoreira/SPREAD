package com.smoreira.spread.service;

import com.smoreira.spread.models.Anuncio;
import com.smoreira.spread.models.Usuario;
import com.smoreira.spread.repository.AnuncioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnuncioService {

    @Autowired
    private AnuncioRepository anuncioRepository;

    public List<Anuncio> getAll(){
        return anuncioRepository.findAll();
    }

    public void save(Anuncio anuncio){
        anuncioRepository.save(anuncio);
    }
}
