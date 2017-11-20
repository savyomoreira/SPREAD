package com.smoreira.spread.repository;

import com.smoreira.spread.models.entity.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnuncioRepository  extends JpaRepository<Anuncio, Long>{

    @Query("select anuncio from Anuncio anuncio where anuncio.categoria.id = :idCategoria")
    List<Anuncio> findByCategoriaId(@Param("idCategoria") Long idCategoria);

    @Query(" select anuncio from Anuncio anuncio " +
            " join fetch anuncio.usuario usuario "+
            " where usuario.id = :idUser")
    List<Anuncio> findByUserId(@Param("idUser") Long idUser);

}
