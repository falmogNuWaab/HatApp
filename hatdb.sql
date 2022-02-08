create database hatdb;

use hatdb;

create table hats (
id int NOT NULL auto_increment primary key,
type nvarchar(30) not null,
material nvarchar(30)not null,
color nvarchar(30)not null,
images nvarchar(100)not null,
facts nvarchar(250)not null
);

create table users (
id int NOT NULL auto_increment primary key,
firstname nvarchar(30) not null,
lastname nvarchar(30)not null
);

create table myhats (
id int NOT NULL auto_increment primary key,
userid int not null,
hatid int not null,
foreign key (userid) references users(id),
foreign key (hatid) references hats(id)
);

create table monthlyhats (
id int NOT NULL auto_increment primary key,
userid int not null,
hatid int not null,
lastworndate nvarchar(20)not null,
foreign key (userid) references users(id),
foreign key (hatid) references hats(id)
);

select * from hats;
select * from users;
select * from myhats;
select * from monthlyhats;