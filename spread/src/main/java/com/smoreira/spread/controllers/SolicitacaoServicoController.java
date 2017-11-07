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

    @PostMapping()
    public ResponseEntity<?> save(@RequestBody SolicitacoeServico solicitacoeServico){
        solicitacoeServico.setStatusSolicitacao(StatusSolicitacaoEnum.SERVICO_AGENDADO);
        solicitacoeServico.setDataAgendamento(new Date());
        solicitacaoService.save(solicitacoeServico);
        return new ResponseEntity(HttpStatus.OK);
    }



}
