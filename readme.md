<p align="center"><img alt="Material-UI POC" src="https://user-images.githubusercontent.com/12038461/68550201-7abcb800-03df-11ea-96c7-1adc31d2fd3a.png"></p>

# Ecoleta
### Next Level Week #1
Projeto desenvolvido durante a Next Level Week #1, uma iniciativa da [Rocketseat](https://rocketseat.com.br/). O projeto é composto por um backend de API REST que é usada por uma aplicação web para cadastro de registros e uma aplicação mobile que consome esses registros e os exibe ao usuário.

### Tecnologias
* Node.js
* Express
* Typescript
* ReactJS
* React Native

### Pré-Requisitos
* [Node.js](https://nodejs.org/en/) (vem com o npm)
* [Expo](https://expo.io/) ( `npm install expo-cli --global` )

### Rodando o Projeto
Antes de rodar o backend, front-end web e front-end mobile, altere o valor da constante LOCAL_IP nos arquivos `server\src\controllers\PointsController.ts`, `server\src\controllers\ItemsController.ts` e `mobile\src\services\api.ts` colocando o valor do seu IP local.

#### API REST (Backend)
* Abra um terminal na pasta /server
* > npm install
* > npm run knex:migrate
* > npm run knex:seed
* > npm run dev

#### Aplicativo Web (Front-end)
* Abra um terminal na pasta /web
* > npm install
* > npm run start
* Cadastre um ponto de coleta

#### Aplicativo Mobile (Front-end)
* Instale o Expo no seu celular [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) ou [iPhone](https://apps.apple.com/app/apple-store/id982107779)
* Abra um terminal na pasta /mobile
* > npm install
* > npm run start
* Abra o aplicativo Expo no seu celular e leia o código de barras da instância Expo aberta no seu navegador
* Pesquise pela UF, Cidade e pontos de coleta cadastrados no item anterior e os veja na tela

### Minhas Redes
* [Linkedin](https://www.linkedin.com/in/joserogeriofilho/)
* [GitHub] (https://github.com/joserogeriofilho)
* [Behance](https://www.behance.net/joserogeriofilho)
