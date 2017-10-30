package com.smoreira.spread.service;

import com.smoreira.spread.mapper.SolicitacaoServicoMapper;
import com.smoreira.spread.models.dto.SolicitacaoServicoDTO;
import com.smoreira.spread.repository.SolicitacaoServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SolicitacaoServicoService extends BaseService {

    @Autowired
    private SolicitacaoServicoRepository solicitacaoServicoRepository;

    public List<SolicitacaoServicoDTO> getByIdAnunciante(Long idAnunciante){

        return SolicitacaoServicoMapper.
                mappedSolicitacaoServicoToDTO(solicitacaoServicoRepository.getByIdAnunciante(idAnunciante));
    }
}
