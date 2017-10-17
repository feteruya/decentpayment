pragma solidity ^0.4.2;

contract OracleI {
  event EventDispatched(string _eventName, address from, bytes32 body);

  uint callCount;

  function sendEvent(string _eventName, bytes32 _body) {
    address fromContract = msg.sender;
    callCount += 1;
    EventDispatched(_eventName, fromContract, _body);
  }

  function getCallCount() returns (uint) {
    return (callCount);
  }
}