package com.smoreira.spread.repository;

import com.smoreira.spread.models.entity.Anuncio;
import com.smoreira.spread.models.entity.Bairro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BairroRepository extends JpaRepository<Bairro, Long>{
}
