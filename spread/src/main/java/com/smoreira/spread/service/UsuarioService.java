package com.smoreira.spread.service;

import com.smoreira.spread.models.entity.Usuario;
import com.smoreira.spread.models.security.Credentials;
import com.smoreira.spread.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService extends BaseService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> getAll(){
        return usuarioRepository.findAll();
    }

    public Usuario getOne(Long id){
        return usuarioRepository.findOne(id);
    }

    public Usuario findByEmail(String email){
        return usuarioRepository.findByEmail(email);
    }
}
