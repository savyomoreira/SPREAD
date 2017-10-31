package com.smoreira.spread.controllers;

import com.smoreira.spread.models.dto.AnuncioDTO;
import com.smoreira.spread.models.entity.Anuncio;
import com.smoreira.spread.models.entity.FotosAnuncio;
import com.smoreira.spread.service.AnuncioService;
import com.smoreira.spread.service.BairroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bairro")
public class BairroController {

    @Autowired
    private BairroService bairroService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll(){
        return new ResponseEntity(bairroService.getAll(), HttpStatus.OK);
    }


}
