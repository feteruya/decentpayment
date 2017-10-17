// Import CSS. <-- Webpack cuida da geração de assets
import "../stylesheets/app.css";

// Import de bibliotecas
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';

// Import dos contratos
import dpclaim_artifacts from '../../build/contracts/DPClaim.json';
import oracle_artifacts from '../../build/contracts/OracleI.json';

var DPClaim = contract(dpclaim_artifacts);
var OracleI = contract(oracle_artifacts);

// Código para interagir com o contrato
var accounts;
var account;
var deployedOracle;

window.App = {
  start: function() {
    var self = this;

    // Inicializa contrato
    DPClaim.setProvider(web3.currentProvider);
    OracleI.setProvider(web3.currentProvider);
    
    // Inicia endereco do Oracle
    OracleI.deployed().then(function(instance) {
      deployedOracle = instance;
      console.log('Oracle iniciado em: ' + deployedOracle.address)
      return instance;
    }).then(function(instance) {
      // instance.EventDispatched().watch ( (err, response) => {  //set up listener for the AuctionClosed Event
      //   console.log(err);
      //   //once the event has been detected, take actions as desired
      //   console.log('Evento foi executado ' + JSON.stringify(response));
      // });  
    });




    // Busca contas
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("Ocorreu um erro ao buscar suas contas.");
        return;
      }

      if (accs.length == 0) {
        alert("Nenhuma cnta encontrada! Garanta que o Ethereum client está confiogurado corretamente.");
        return;
      }

      accounts = accs;
      account = accounts[0];
    });
  },

  setStatus: function(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
  },

  createContract: function() {
    var self = this;

    var nfeKey = document.getElementById("nfeKey").value;

    self.setStatus("Criando contrato... (aguarde)");
    
    console.log(nfeKey, deployedOracle.address)
    DPClaim.new(nfeKey, deployedOracle.address, {from: account, gas: 3000000}).then(function(instance) {
      self.setStatus(`Contrato criado com sucesso no endereço ${instance.address}`);
      
      // instance.ClaimNFEKeyRequired().watch ( (err, response) => {  //set up listener for the AuctionClosed Event
      //   console.log(err);
      //   //once the event has been detected, take actions as desired
      //   console.log('Evento foi executado ' + JSON.stringify(response));
      // });

      // Evento foi executato 
      // {
      //   "logIndex":0,"transactionIndex":0,
      //   "transactionHash":"0x15dfdd5d465f58dcf2c9bffa60a5f4c8687fe3351c06b1a0de7b7e60390bb9b5",
      //   "blockHash":"0x2d71c325ff9cb54d0e890d2d3565183b6991f69ad97005acc7fcb7bb5fd4a192",
      //   "blockNumber":71,
      //   "address":"0x448fb25100fe293050ce8dbe5e31af7f365ccad8",
      //   "type":"mined",
      //   "event":"ClaimNFEKeyRequired",
      //   "args": {"_nfeKey":"0x0000000000000000000000000000000000000000000000000000000000000000"}
      // }

      console.log(instance.address);  
    }).catch(function(err) {
      console.log(err);
      alert('Algo deu errado ao criar o contrato. Veja o console.')
    });
  }


};

// Padrao do Truffle
window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  App.start();
});
