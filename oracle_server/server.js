var net = require('net');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545/'));
var fs = require('fs');
var http = require('http');

fs.readFile('../build/contracts/OracleI.json', (error, json) => {
  console.log('Server started'); 
  
  if (error) {
      throw error;
  }

  var json = JSON.parse(json);

  // instantiate by address
  var oracleContract = web3.eth.contract(json.abi).at(process.env.CONTRACT_ADDRESS);

  oracleContract.EventDispatched().watch(function(error, event) {
    var result = event.args;
    var baseUrl = 'http://gist.githubusercontent.com/gnumarcelo/07e9e56e28b304e108eef83f70fc03b5/raw/';
    http.get(`${baseUrl}001234b5ff58cd752ec874a7434446bae0d9228d/nfe1.json`, function(res){
      console.log(res)
    })
    // https://gist.github.com/gnumarcelo/07e9e56e28b304e108eef83f70fc03b5

    // console.log(`Sending message from ${result.from}: event[${result._eventName}], body[${result.body}]`);  
  });
});

// TWILLIO_SID=AC7dc9fa683de804bffa3d6eaf40cc2259 TWILLIO_AUTH_TOKEN=78ba763a661e77d68d0917333d16cde1 CONTRACT_ADDRESS=0x82ce64e45e86ed5b81a234d2004b01f2c526373b TWILLIO_FROM_NUMBER=+14086694750  ETHEREUM_RPC_URL=http://localhost:8545/ node watcher.js

// CONTRACT_ADDRESS=0x1cff0dc17fd2f2a56bab826bb8a7abae85d72692 node watcher.js


