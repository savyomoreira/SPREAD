package com.smoreira.spread.service;

import com.smoreira.spread.models.entity.Usuario;
import com.smoreira.spread.models.security.Credentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    UsuarioService usuarioService;

    public Usuario Login(Credentials credentials){
        return usuarioService.findByEmail(credentials.getLogin());
    }
}
