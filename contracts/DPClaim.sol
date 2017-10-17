pragma solidity ^0.4.2;

import "./OracleI.sol";

contract DPClaim {
  OracleI oracleI;

  struct LegalDoctoInfo {
      string cnpj;
      uint128 amount;
  }
  //variables
	string nfeKey;
  LegalDoctoInfo doctoInfo;

  //constructor
  function DPClaim(string _nfeKey, address _oracleAddress) {
		nfeKey = _nfeKey;
    oracleI = OracleI(_oracleAddress);
    oracleI.sendEvent("requestNFE", nfeKey);
	}

  //methods
	function getNFEKey() returns(string) {
	  return nfeKey;
	}

  // oracle callback
  function __callback(string cnpj, uint128 amount) {
    //aqui, validar para somente o oracle poder enviar informacoes
    // https://solidity.readthedocs.io/en/develop/types.html
    doctoInfo = LegalDoctoInfo(cnpj, amount);
  }
}