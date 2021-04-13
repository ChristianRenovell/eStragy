# Frontend 
npm install
cd frontend
ng serve 

servidor corriendo en http://localhost:4200/

## Backend PHP

Añadir en un servidor el archivo savecountris.php (backendPHP/savecountris.php) modificar la variable de entorno a su servidor en el frontend. (frontend/src/environments/environment.ts)

    apiServer: 'http://localhost/estragy/savecountris.php'
  
## Base de datos para PHP

CREATE DATABASE `estragy`;

CREATE TABLE `countriesphp` (
	`name` VARCHAR(400) DEFAULT '',
	`capital` VARCHAR,
	PRIMARY KEY (`name`)
);

## Backend Node

Instalar en un servidor el proyecto backend, ejecutar 'npm install', modificar la variable de entorno a su servidor en el frontend (frontend/src/environments/environment.ts)

    apiServer: 'http://localhost:2000/savecountries'

## Base de datos para Node

CREATE DATABASE `estragy`;

CREATE TABLE `countries` (
	`id` INT,
	`name` VARCHAR(400),
	`capital` VARCHAR(400),
	`createdAt` DATETIME,
	`updatedAt` DATETIME,
	PRIMARY KEY (`name`)
);


## Funciones extra

Re:plaim: chat en lines para WhatsApp ,Telegram etc...
ngx-toastr: Servicio para mostrar mensajes rápidos y sencillos al usuario. 
