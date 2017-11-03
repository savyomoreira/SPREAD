package com.smoreira.spread.controllers;

import com.smoreira.spread.models.entity.Anuncio;
import com.smoreira.spread.models.dto.AnuncioDTO;
import com.smoreira.spread.models.entity.FotosAnuncio;
import com.smoreira.spread.service.AnuncioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/anuncio")
public class AnuncioController{

    @Autowired
    private AnuncioService anuncioService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll(){
        FotosAnuncio anuncio = new FotosAnuncio();
        anuncio.getAnuncio();
        return new ResponseEntity(anuncioService.getAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    public ResponseEntity<AnuncioDTO> getOne(@PathVariable Long id){
        Anuncio anuncio = anuncioService.getOne(id);
        return new ResponseEntity(new AnuncioDTO(anuncio), HttpStatus.OK);
    }

    @RequestMapping(value = "/byCategoria/{idCategoria}",method = RequestMethod.GET)
    public ResponseEntity<?> getByCategoria(@PathVariable Long idCategoria){
        return new ResponseEntity(anuncioService.getByCategoria(idCategoria), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> save(@RequestBody Anuncio anuncio){
        anuncioService.save(anuncio);
        return new ResponseEntity(HttpStatus.OK);
    }
}
