package com.smoreira.spread.service;

import com.smoreira.spread.models.CategoriaAnuncio;
import com.smoreira.spread.repository.CategoriaAnuncioepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaAnuncioService {

    @Autowired
    private CategoriaAnuncioepository categoriaAnuncioepository;

    public List<CategoriaAnuncio> getAll(){
        return categoriaAnuncioepository.findAll();
    }
}
