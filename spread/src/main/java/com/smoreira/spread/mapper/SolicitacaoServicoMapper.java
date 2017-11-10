package com.smoreira.spread.mapper;

import com.smoreira.spread.models.dto.SolicitacaoServicoDTO;
import com.smoreira.spread.models.entity.SolicitacoeServico;

import java.util.ArrayList;
import java.util.List;

public class SolicitacaoServicoMapper {
    public static List<SolicitacaoServicoDTO>
        mappedSolicitacaoServicoToDTO(List<SolicitacoeServico> solicitacaoList){
        List<SolicitacaoServicoDTO> solicitacaoServicoDTOList = new ArrayList<>();
        solicitacaoList.forEach(data ->
                solicitacaoServicoDTOList.add(mappedSolicitacaoServicoToDTO(data)));
        return solicitacaoServicoDTOList;
    }

    public static SolicitacaoServicoDTO
    mappedSolicitacaoServicoToDTO(SolicitacoeServico solicitacao){
        return new SolicitacaoServicoDTO(solicitacao);
    }

}
