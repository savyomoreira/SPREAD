package com.smoreira.spread.controllers;

import com.smoreira.spread.models.entity.Servico;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/servico")
public class ServicoController {
    @RequestMapping(method = RequestMethod.GET)
    public List<Servico> getAll(){
        List<Servico> servicoList = new ArrayList<>();
        servicoList.add(new Servico());
        servicoList.add(new Servico());
        return servicoList;
    }
}
