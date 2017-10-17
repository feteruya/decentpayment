pragma solidity ^0.4.2;

contract OracleI {
  event EventDispatched(string _eventName, address from, string body);

  uint callCount;

  function sendEvent(string _eventName, string _body) {
    address fromContract = msg.sender;
    callCount += 1;
    EventDispatched(_eventName, fromContract, _body);
  }

  function getCallCount() returns (uint) {
    return (callCount);
  }
}