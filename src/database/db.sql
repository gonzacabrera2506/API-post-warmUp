CREATE TABLE categoria (
  id INT(11) NOT NULL,
  descripcion VARCHAR(50) NOT NULL
);

ALTER TABLE categoria
  ADD PRIMARY KEY (id);

ALTER TABLE categoria
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
 
 CREATE TABLE post (
  id INT(11) NOT NULL,
  titulo VARCHAR(50) NOT NULL,
  contenido VARCHAR(150) NOT NULL,
  imagen VARCHAR(100) NOT NULL,
  categoria_id INT(11) NOT NULL,
  fechaCreacion DATE NOT NULL,
  CONSTRAINT fk_categoria FOREIGN KEY(categoria_id) REFERENCES categoria(id)
);

ALTER TABLE post
  ADD PRIMARY KEY (id);

ALTER TABLE post
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

INSERT INTO categoria (descripcion) 
  VALUES ('Desarrollo');