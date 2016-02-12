CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger_tb(
id int AUTO_INCREMENT,
burger_name varchar(50),
devoured BOOLEAN,
date CURDATE,
PRIMARY KEY (id)
);