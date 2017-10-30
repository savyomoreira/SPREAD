package com.smoreira.spread.models.dto;

import com.smoreira.spread.models.entity.Anuncio;
import com.smoreira.spread.models.entity.SolicitacoeServico;

import java.util.HashMap;
import java.util.List;

public class SolicitacaoServicoDTO extends HashMap<String, Object> {
    public SolicitacaoServicoDTO(SolicitacoeServico anuncio) {
        this.put("id", anuncio.getId());
        this.put("dataAgendamento", anuncio.getDataAgendamento());
        this.put("anuncio", new AnuncioDTO(anuncio.getAnuncio()));
        this.put("cliente", new UsuarioDTO(anuncio.getCliente()));
        this.put("statusSolicitacão", anuncio.getStatusSolicitacao().getDecicaoStatus());
    }

}
