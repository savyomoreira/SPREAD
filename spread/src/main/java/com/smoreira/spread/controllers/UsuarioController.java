package com.smoreira.spread.controllers;

import com.smoreira.spread.models.Usuario;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//import com.smoreira.spread.models.Usuario;
import java.util.List;
import java.util.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @RequestMapping(method = RequestMethod.GET)
    public List<Usuario> getAll(){
        List<Usuario> usuarioList = new ArrayList<>();
        usuarioList.add(new Usuario("teste", "teste"));
        usuarioList.add(new Usuario("teste1", "teste"));
        usuarioList.add(new Usuario("teste2", "teste"));
        usuarioList.add(new Usuario("teste3", "teste"));
        return usuarioList;
    }
}
