package com.smoreira.spread.controllers;


import com.smoreira.spread.service.SolicitacaoServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/solicitacaoService")
public class SolicitacaoServicoController {

    @Autowired
    private SolicitacaoServicoService solicitacaoService;

    @RequestMapping(value = "{id}" ,method = RequestMethod.GET)
    public ResponseEntity<?> getAll(@PathVariable Long id){
        return new ResponseEntity(solicitacaoService.getByIdAnunciante(id), HttpStatus.OK);
    }

}
