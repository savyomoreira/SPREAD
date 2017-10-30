package com.smoreira.spread.models.enumerated;

public enum StatusSolicitacaoEnum {

    SERVICO_AGENDADO("Servico Agendado"),
    SERVICO_REALIZADO("Servico Realizado"),
    SERVICO_CANCELADO("Servico Cancelado");

    private String decicaoStatus;

    StatusSolicitacaoEnum(String decicaoStatus) {
        this.decicaoStatus = decicaoStatus;
    }

    public String getDecicaoStatus() {
        return this.decicaoStatus;
    }
}
