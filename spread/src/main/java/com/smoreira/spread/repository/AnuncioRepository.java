package com.smoreira.spread.repository;

import com.smoreira.spread.models.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnuncioRepository  extends JpaRepository<Anuncio, Long>{
}
