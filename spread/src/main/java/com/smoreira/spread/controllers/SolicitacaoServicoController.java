package com.smoreira.spread.controllers;


import com.smoreira.spread.models.entity.SolicitacoeServico;
import com.smoreira.spread.models.enumerated.StatusSolicitacaoEnum;
import com.smoreira.spread.service.SolicitacaoServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/solicitacaoService")
public class SolicitacaoServicoController {

    @Autowired
    private SolicitacaoServicoService solicitacaoService;

    @RequestMapping(value = "{id}" ,method = RequestMethod.GET)
    public ResponseEntity<?> getAll(@PathVariable Long id){
        return new ResponseEntity(solicitacaoService.getByIdAnunciante(id), HttpStatus.OK);
    }

    @RequestMapping(value = "byClienteId/{id}" ,method = RequestMethod.GET)
    public ResponseEntity<?> getByIdCliente(@PathVariable Long id){
        return new ResponseEntity(solicitacaoService.getByIdCliente(id), HttpStatus.OK);
    }

    @RequestMapping(value = "one/{id}" ,method = RequestMethod.GET)
    public ResponseEntity<?> getone(@PathVariable Long id){
        return new ResponseEntity(solicitacaoService.findOne(id), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> save(@RequestBody SolicitacoeServico solicitacoeServico){
        solicitacoeServico.setStatusSolicitacao(StatusSolicitacaoEnum.AGUARDANDO_CONFIRMACAO);
        solicitacoeServico.setDataAgendamento(new Date());
        solicitacaoService.save(solicitacoeServico);
        return new ResponseEntity(HttpStatus.OK);
    }


    @PutMapping("/{idSolicitacao}")
    public ResponseEntity<?> confirmarSolicitacao(@PathVariable Long idSolicitacao,
                                                  @RequestBody Date dataAgendamendamento){
        solicitacaoService.confirmarSolicitacao(idSolicitacao, dataAgendamendamento);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("confirmarRealizacaoServico/")
    public ResponseEntity<?> confirmarRealizacaoServico(@RequestBody Long idSolicitacao){
        solicitacaoService.confirmarRealizacaoServico(idSolicitacao);
        return new ResponseEntity(HttpStatus.OK);
    }



}
