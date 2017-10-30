package com.smoreira.spread.repository;


import com.smoreira.spread.models.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Usuario findByEmail(@Param("email")String email);
}
