# decentpayment
Projeto de exemplo usando truffle + oracle

## Requisitos
1. Nodejs
2. TestRPC (npm install -g ethereumjs-testrpc)
3. Truffle (npm install -g truffle)

## Instalação
1. Clonar o repositorio: `git clone git@github.com:gnumarcelo/decentpayment.git`
2. Entrar no diretorio clonado: `cd decentpayment`
3. Instalar dependências: `npm install`

## Utilização
Para executar o projeto ser necessário tres abas no terminal, como segue:
### Aba 1 (testrpc)
1. Iniciar o testrpc com o comando: `testrpc`

### Aba 2 (Servidor web truffle)
1. Entrar no diretorio do projeto: `cd decentpayment`
2. Compilar os contratos: `truffle compile`
3. Deploy dos contratos: `truffle migrate`
4. Executar o servidor com o comando `npm run dev`
5. Abrir pagina no navegador: `http://localhost:8080/`

### Aba3 (Executar o Oracle)
1. Entrar no diretorio do projeto: `cd decentpayment`
2. Entrar no diretorio do oracle: `cd oracle_server`
3. Iniciar o servidor do oracle: `node server.js`

## Importante
Como estamos usando o testrpc, toda vez que o mesmo for reiniciado será necessário repetir os passos da aba 2 e 3, ja que o mesmo apenas mantém dados do blockchain na memória.
