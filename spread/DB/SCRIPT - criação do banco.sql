CREATE SCHEMA `base_tcc` DEFAULT CHARACTER SET utf8 ;


drop table IF EXISTS USUARIO; 
create table USUARIO(
  id INT(6) primary key AUTO_INCREMENT,
  nome varchar(100) not null,
  sexo varchar(9) not null CHECK (sexo = 'MASCULINO' or 'FEMININO'),
  senha varchar(8) not null,
  email varchar(50) not null,
  telefone varchar(50) not null,
  endereco varchar(100) not null,
  bairro varchar(100) not null,
  cidade varchar(100) not null,
  estado varchar(100) not null,
  cep varchar(15) not null,
  complemento varchar(100)
);

drop table IF EXISTS ANUNCIO;
create table ANUNCIO(
  id INT(6) primary key AUTO_INCREMENT,
  descicao varchar(100) not null,
  id_usuario INT(6),
  deta_anuncio datetime
  
);

create table AGENDAMENTO(
	ID_AGENDAMENTO int(6) primary key auto_increment,
    ID_ANUNCIO INT,
    ID_USUARIO_CONTRATANTE INT,
    DATA_AGENDAMENTO datetime,
    COMENTARIO varchar(200)
);

DROP TABLE if exists AVALIACAO;
create table AVALIACAO(
	ID_AVALIACAO int(6) primary key auto_increment,
    ID_AGENDAMENTO INT NOT NULL,
    DATA_AVALIACAO datetime NOT NULL,
    NOTA INT NOT NULL, 
    COMENTARIO varchar(200) NOT NULL
);

ALTER TABLE AVALIACAO
ADD FOREIGN KEY (ID_AGENDAMENTO) REFERENCES AGENDAMENTO(ID_AGENDAMENTO); 

ALTER TABLE ANUNCIO
ADD FOREIGN KEY (id_usuario) REFERENCES USUARIO(id); 

ALTER TABLE AGENDAMENTO
ADD FOREIGN KEY (ID_USUARIO_CONTRATANTE) REFERENCES USUARIO(id); 

ALTER TABLE AGENDAMENTO
ADD FOREIGN KEY (ID_ANUNCIO) REFERENCES ANUNCIO(id); 


ALTER TABLE `base_tcc`.`ANUNCIO` 
ADD COLUMN `data_anuncio` DATE NULL AFTER `id_usuario`;

DROP TABLE if exists  base_tcc.CATEGORIA_ANUNCIO;
create table  base_tcc.CATEGORIA_ANUNCIO(
	ID_CATEGORIA_ANUNCIO int(6) primary key auto_increment,
	nome varchar(200) NOT NULL
);

ALTER TABLE `base_tcc`.`ANUNCIO` 
ADD COLUMN `ID_CATEGORIA_ANUNCIO` int;


ALTER TABLE base_tcc.ANUNCIO
ADD FOREIGN KEY (ID_CATEGORIA_ANUNCIO) 
REFERENCES base_tcc.CATEGORIA_ANUNCIO(ID_CATEGORIA_ANUNCIO); 


alter table base_tcc.ANUNCIO add column foto MEDIUMTEXT;

ALTER TABLE `base_tcc`.`ANUNCIO` 
ADD COLUMN `titulo_anuncio` varchar(255);

create table  base_tcc.SOLICITACAO_SERVICO(
	id_solicitacao_servico int(6) primary key auto_increment,
	id_anuncio int(6) NOT NULL,
    id_cliente int(6) NOT NULL,
    DATA_AGENDAMENTO datetime
);

ALTER TABLE base_tcc.SOLICITACAO_SERVICO
ADD FOREIGN KEY (id_anuncio) 
REFERENCES base_tcc.ANUNCIO(id); 

ALTER TABLE base_tcc.SOLICITACAO_SERVICO
ADD FOREIGN KEY (id_cliente) 
REFERENCES base_tcc.USUARIO(id); 

ALTER TABLE `base_tcc`.`SOLICITACAO_SERVICO` 
ADD COLUMN `status_solicitacao` varchar(20);



