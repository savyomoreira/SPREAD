package com.smoreira.spread.repository;

import com.smoreira.spread.models.Anuncio;
import com.smoreira.spread.models.CategoriaAnuncio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaAnuncioepository extends JpaRepository<CategoriaAnuncio, Long>{
}
