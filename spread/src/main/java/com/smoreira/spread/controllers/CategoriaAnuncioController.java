package com.smoreira.spread.controllers;

import com.smoreira.spread.service.CategoriaAnuncioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categoria")
public class CategoriaAnuncioController
{
    @Autowired
    private CategoriaAnuncioService categoriaAnuncioService;

    @GetMapping
    public ResponseEntity<?> getAll(){
        return new ResponseEntity(categoriaAnuncioService.getAll(), HttpStatus.OK);
    }
   
}
