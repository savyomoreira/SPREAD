package com.smoreira.spread.service;

import com.smoreira.spread.models.entity.Anuncio;
import com.smoreira.spread.models.entity.Bairro;
import com.smoreira.spread.repository.AnuncioRepository;
import com.smoreira.spread.repository.BairroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class BairroService {

    @Autowired
    private BairroRepository bairroRepository;

    public List<Bairro> getAll(){
        return bairroRepository.findAll();
    }


}
