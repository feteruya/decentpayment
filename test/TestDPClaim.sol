pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/DPClaim.sol";

contract TestDPClaim {

  function testKeyWithNewDPClain() {
    DPClaim dpclaim = new DPClaim('abcd123');

    bytes32 expected = 'abcd123';

    Assert.equal(dpclaim.getNFEKey(), expected, "Contract should have a key supplied when it was created");
  }

}
