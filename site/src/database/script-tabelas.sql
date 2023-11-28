CREATE DATABASE piraju;
USE piraju;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) unique,
	senha VARCHAR(50)
);

insert into usuario values
(null,'Livia','livia@gmail.com','Livia123'),
(null,'Marcos','marcos@gmail.com','Marcos123'),
(null,'Gabriel','gabriel@sptech.school','Gabriel123'),
(null,'Gustavo','gustavo@gmail.com','Gustavo123'),
(null,'Marcio','marcio@gmail.com','Marcio123');

create table visita (
fk_usuario int auto_increment,
visitou_piraju char(3),
 primary key (fk_usuario,visitou_piraju)
-- foreign key fk_usuario (fk_usuario) references usuario(id)
);

insert into visita values
(1,'Sim'),
(2,'Sim'),
(3,'Nao'),
(4,'Nao'),
(5,'Nao');


CREATE TABLE pt_turistico (
	idPontoTuristico INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
);

insert into pt_turistico values
(null,'Ponte Engenheiro Nelson de Godoy Pereira'),
(null,'Igreja Matriz'),
(null,'Tirolesa das Corredeiras'),
(null,'Iate Clube Piraju'),
(null,'Prainha');

CREATE TABLE avaliacao (
	idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
	fk_PontoTuristico int,-- PONTO TURISTICO
	descricao VARCHAR(150),
	fk_usuario INT,
    nota int,
	FOREIGN KEY fk_usuario (fk_usuario) REFERENCES usuario(id)
);

insert into avaliacao values 
(null,1,'Muito Bom',2,5),
(null,2,'Superou as Expectativas',1,4),
(null,3,'Bom',3,3),
(null,4,'Ok',4,2),
(null,1,'Muito Bom',5,1);


select * from usuario;		
select * from avaliacao;	
select* from pt_turistico;
select * from visita;


select count(visitou_piraju) from visita where visitou_piraju = 'Sim'; -- 2
select count(visitou_piraju) from visita where visitou_piraju = 'Nao'; -- 3

select * from usuario u join
visita v on u.id=v.fk_usuario;