DROP DATABASE IF EXISTS vamos;
CREATE DATABASE vamos;
USE vamos;
CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(255),
  lastName varchar(255),
  email varchar(255),
  password varchar(255),
  address varchar(255),
  city varchar(255),
  phoneNumber int ,
  picture varchar(255),
  PRIMARY KEY (id)
);


CREATE TABLE stadium(
id-stadium int NOT NULL AUTO_INCREMENT,
stadium-name varchar(255), 
stadiumPicture varchar(255),
typeOfSport varchar(255), 
description varchar(255),
city varchar(255)
PRIMARY KEY (id-stadium),
FOREIGN KEY (id-provider) REFERENCES provider(id-provider)
);

/* excute schema  */
/* mysql -u root -p <server/database_mysql/schema.sql
 */