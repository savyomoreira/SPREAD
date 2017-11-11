package com.smoreira.spread.service;

import com.smoreira.spread.mapper.SolicitacaoServicoMapper;
import com.smoreira.spread.models.dto.SolicitacaoServicoDTO;
import com.smoreira.spread.models.entity.SolicitacoeServico;
import com.smoreira.spread.models.enumerated.StatusSolicitacaoEnum;
import com.smoreira.spread.repository.SolicitacaoServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class SolicitacaoServicoService extends BaseService {

    @Autowired
    private SolicitacaoServicoRepository solicitacaoServicoRepository;

    public List<SolicitacaoServicoDTO> getByIdAnunciante(Long idAnunciante){

        return SolicitacaoServicoMapper.
                mappedSolicitacaoServicoToDTO(solicitacaoServicoRepository.getByIdAnunciante(idAnunciante));
    }

    public List<SolicitacaoServicoDTO> getByIdCliente(Long idAnunciante){

        return SolicitacaoServicoMapper.
                mappedSolicitacaoServicoToDTO(solicitacaoServicoRepository.getByIdCliente(idAnunciante));
    }

    public SolicitacaoServicoDTO findOne(Long id){
        return SolicitacaoServicoMapper.
                mappedSolicitacaoServicoToDTO(solicitacaoServicoRepository.getOne(id));
    }

    public void save(SolicitacoeServico solicitacoeServico){
        solicitacaoServicoRepository.save(solicitacoeServico);
    }

    public void confirmarSolicitacao(Long idSolicitacao,
                                     Date dataAgendamendamento){

        SolicitacoeServico solicitacoeServico =
                this.solicitacaoServicoRepository.getOne(idSolicitacao);

        solicitacoeServico.setDataAgendamento(dataAgendamendamento);

        solicitacoeServico.setStatusSolicitacao(StatusSolicitacaoEnum.SERVICO_AGENDADO);

        solicitacaoServicoRepository.save(solicitacoeServico);
    }
}
