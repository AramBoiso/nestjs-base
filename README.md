<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

\*AUTHOR: aram_boiso.\*\*

**¿SUGERENCIAS?**
Si tienes alguna sugerencia o aporte no dudes en contactarme y hacérmela saber, aqui abajo te dejo mis redes sociales:
Facebook: https://www.facebook.com/aramboisso
Instagram: https://www.instagram.com/aram_boiso/?hl=es-la
Correo Electrónico: aramboisso@gmail.com

## Description

Este proyecto esta diseñado con la finalidad de ser clonado y que pueda ser la base de un nuevo proyecto de nestjs.
Actualmente cuenta con las características:

- Estructura del proyecto inspirada en el siguiente post: https://medium.com/the-crowdlinker-chronicle/best-way-to-structure-your-directory-code-nestjs-a06c7a641401
- Configuración con variables de entorno.
- Funcionamiento con el cliente de base de datos MySQL.
- Entidad User y Password pre construidas.
- Modulo Auth (implementado)
- LocalGuard.
- JwtGuard.
- Migraciones configuradas.

## Installation

```bash
//Instalación de dependencias
$ npm install

//Desvinculación del repositorio original
$ git remote rm origin

//Vinculación con otro repositorio
$ git add origin "url_new_repository"

//Verificación
$ git remote -v

```

## Environment Variables

### App Config

| Nombre   | Tipo   |
| -------- | ------ |
| APP_PORT | number |
| APP_HOST | string |
| APP_PORT | number |

### Database config

| Nombre                      | Tipo        |
| --------------------------- | ----------- |
| MYSQL_HOST                  | string      |
| MYSQL_PORT                  | number      |
| MYSQL_USERNAME              | string      |
| MYSQL_PASSWORD              | string      |
| MYSQL_DATABASE_NAME         | string      |
| MYSQL_ENTITIES              | string      |
| MYSQL_AUTO_LOAD_ENTITIES    | number(0-1) |
| MYSQL_MIGRATIONS            | string      |
| MYSQL_MIGRATIONS_TABLE_NAME | string      |
| MYSQL_MIGRATIONS_DIR        | string      |
| MYSQL_MIGRATIONS_RUN        | number(1,0) |
| MYSQL_MIGRATIONS_LOGGING    | number(1,0) |
| MYSQL_SYNCHRONIZE           | number(1,0) |

### JWT

### App Config

| Nombre         | Tipo   |
| -------------- | ------ |
| JWT_KEY_SECRET | string |
| JWT_EXPIRE_IN  | string |

## Terminal Commands

```bash
//Iniciar el servidor
$ npm run start

//Iniciar el servidor en modo desarrollo
$ npm run start:dev

//Iniciar el servidor en modo producción
$ npm run start:prod

//Generar migración
$ npm run migration:generate "migration_name"

//Correr la migración
$ npm run migration:run

//Revertir la migración
$ npm run migration:revert
```

## PATHS

- ENTITIES: src/models/**/**/entities/\*entity{.ts,.js}
- MIGRATIONS: src/database/migrations/\*{.ts,.js}
- MIGRATIONS_DIR: src/database/migrations

## License

Nest is [MIT licensed](LICENSE).
