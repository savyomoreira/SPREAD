package com.smoreira.spread.models.entity;

import com.smoreira.spread.models.enumerated.StatusSolicitacaoEnum;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity()
@Table(name = "SOLICITACAO_SERVICO")
public class SolicitacoeServico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_solicitacao_servico")
    private Long id;

    @ManyToOne(targetEntity = Anuncio.class)
    @JoinColumn(name = "id_anuncio", nullable = true)
    private Anuncio anuncio;

    @Column(name = "descricao")
    private String descricao;

    @ManyToOne(targetEntity = Usuario.class)
    @JoinColumn(name = "id_cliente", nullable = true)
    private Usuario cliente;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "DATA_AGENDAMENTO")
    private Date dataAgendamento;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_solicitacao")
    private StatusSolicitacaoEnum statusSolicitacao;

}
