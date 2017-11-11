package com.smoreira.spread.service;

import com.smoreira.spread.models.entity.Anuncio;
import com.smoreira.spread.models.enumerated.StatusSolicitacaoEnum;
import com.smoreira.spread.repository.AnuncioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class AnuncioService {

    @Autowired
    private AnuncioRepository anuncioRepository;

    @Autowired
    private CategoriaAnuncioService categoriaAnuncioService;

    @Autowired
    private UsuarioService usuarioService;

    public List<Anuncio> getAll(){
        return anuncioRepository.findAll();
    }

    public Anuncio getOne(Long id){
        return anuncioRepository.getOne(id);
    }

    public List<Anuncio> getByCategoria(Long id){
        return anuncioRepository.findByCategoriaId(id);
    }

    public Long save(Anuncio anuncio){
        anuncio.setCategoria(categoriaAnuncioService.getOne(anuncio.getCategoria().getId()));

        anuncio.setDataAnuncio(new Date());

        Long result = anuncioRepository.save(anuncio).getId();

       return result;
    }
}
