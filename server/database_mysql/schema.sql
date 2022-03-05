DROP DATABASE IF EXISTS vamos;
CREATE DATABASE vamos;
USE vamos;
CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255),
  email varchar(255),
  password varchar(255),
  address varchar(255),
  dateOfBirth varchar(255),
  city varchar(255),
  phoneNumber int ,
  picture varchar(255),
  PRIMARY KEY (id)
);


CREATE TABLE stadium(
id_stadium int NOT NULL AUTO_INCREMENT,
stadium_name varchar(255), 
stadiumPicture varchar(255),
typeOfSport varchar(255), 
description varchar(255),
city varchar(255),
PRIMARY KEY (id_stadium)
);

CREATE TABLE event(
  id_event int NOT null AUTO_INCREMENT,
  id_team_one int NOT NULL
  id_team_two int NOT NULL
  time date 
  FOREIGN KEY (id_stadium) REFERENCES stadium(id-stadium)
  FOREIGN KEY (id) REFERENCES user (id)
)
CREATE TABLE team

--FOREIGN KEY (id) REFERENCES user (id)
--FOREIGN KEY (id_provider) REFERENCES provider(id_provider)

CREATE TABLE 








/* excute schema  */
/* mysql -u root -p <server/database_mysql/schema.sql
 */