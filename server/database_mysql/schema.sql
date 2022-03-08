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
id_type int not null, 
description varchar(255),
city varchar(255),
price varchar(30),
PRIMARY KEY (id_stadium) 
FOREIGN KEY (id_type) REFERENCES typeofsport (id_type)

);

CREATE TABLE events(
  id_event int NOT null AUTO_INCREMENT,
  id_team_one int NOT NULL
  id_team_two int NOT NULL
  id_stadium int not null
  dateevent date
  departevent time
  finishevent time
  advance float 
  statusevent boolean 
  FOREIGN KEY (id_stadium) REFERENCES stadium(id-stadium)
  FOREIGN KEY (id) REFERENCES user (id)
)



CREATE TABLE typeofsport(
  id_type int NOT NULL AUTO_INCREMENT
  label varchar(20) NOT NULL
  numberplayersofteam int not null 
PRIMARY KEY (id_type)
)
CREATE TABLE scheduleStudium(
  id_schaduleStudium int not null AUTO_INCREMENT
  time varchar(30)
  available boolean DEFAULT true
  id_studium int not null 
  FOREIGN KEY (id_stadium) REFERENCES stadium(id-stadium)
  PRIMARY KEY (id_schaduleStudium)
  )
CREATE TABLE team(
  id_team int not null AUTO_INCREMENT
  teamName varchar (50)
  player1 int DEFAULT NULL
  player2 int DEFAULT NULL
  player3 int DEFAULT NULL
  player4 int DEFAULT NULL
  player5 int DEFAULT NULL
  player6 int DEFAULT NULL
  player7 int DEFAULT NULL
  player8 int DEFAULT NULL
  player9 int DEFAULT NULL
  player10 int DEFAULT NULL
  player11 int DEFAULT NULL
  player12 int DEFAULT NULL
 PRIMARY KEY (id_team)
 FOREIGN KEY (player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12) REFERENCES user (id_user)
)


/* excute schema  */
/* mysql -u root -p <server/database_mysql/schema.sql
 */