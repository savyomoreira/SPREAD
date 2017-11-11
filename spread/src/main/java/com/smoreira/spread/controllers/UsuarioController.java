package com.smoreira.spread.controllers;

import com.smoreira.spread.models.entity.Anuncio;
import com.smoreira.spread.models.entity.Usuario;
import com.smoreira.spread.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//import com.smoreira.spread.models.entity.Usuario;
import java.util.List;
import java.util.*;

import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> save(@RequestBody Usuario usuario){
        usuarioService.save(usuario);
        return new ResponseEntity(HttpStatus.OK);
    }
}
