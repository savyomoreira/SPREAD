package com.smoreira.spread.service;

import com.smoreira.spread.models.Anuncio;
import com.smoreira.spread.models.Usuario;
import com.smoreira.spread.repository.AnuncioRepository;
import com.smoreira.spread.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UsuarioService extends BaseService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> getAll(){
        return usuarioRepository.findAll();
    }

    public Usuario getOne(Integer id){
        return usuarioRepository.findOne(id);
    }
}
