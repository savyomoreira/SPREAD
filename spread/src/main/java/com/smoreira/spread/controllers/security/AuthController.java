package com.smoreira.spread.controllers.security;

import com.smoreira.spread.models.entity.Anuncio;
import com.smoreira.spread.models.entity.Usuario;
import com.smoreira.spread.models.security.Credentials;
import com.smoreira.spread.service.AuthService;
import com.smoreira.spread.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AuthController {

    @Autowired
    private AuthService authService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Usuario> login(@RequestBody Credentials credentials){
        Usuario usuario = authService.Login(credentials);
        if(usuario != null){
            return new ResponseEntity(usuario, HttpStatus.OK);
        }else{
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }

    }
}
