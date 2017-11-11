package com.smoreira.spread.repository;

import com.smoreira.spread.models.entity.Anuncio;
import com.smoreira.spread.models.entity.SolicitacoeServico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SolicitacaoServicoRepository extends JpaRepository<SolicitacoeServico, Long>{

    @Query("select s from SolicitacoeServico s "
            + " inner join fetch s.anuncio as anuncio "
            + " inner join fetch anuncio.usuario as anunciante "
            + " where anunciante.id = :idAnunciante ")
    List<SolicitacoeServico> getByIdAnunciante(@Param("idAnunciante") Long idAnunciante);

    @Query("select s from SolicitacoeServico s "
            + " inner join fetch s.anuncio as anuncio "
            + " inner join fetch anuncio.usuario as anunciante "
            + " where s.cliente.id = :idCliente ")
    List<SolicitacoeServico> getByIdCliente(@Param("idCliente") Long idAnunciante);

}
