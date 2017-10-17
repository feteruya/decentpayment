// var DPClaim = artifacts.require("./DPClaim.sol");

// contract('DPClaim', function(accounts) {
//   it("should send event on its creation", function() {
//     DPClaim.new('abc123').then(function(instance) {
//       // Print the new address
//       console.log(instance.address);
//       // return instance;              
//     }).then(function(result) {
//       // result is an object with the following values:
//       //
//       // result.tx      => transaction hash, string
//       // result.logs    => array of decoded events that were triggered within this transaction
//       // result.receipt => transaction receipt object, which includes gas used
      
//       // We can loop through result.logs to see if we triggered the Transfer event.
//       var isEventSent = false;
//       for (var i = 0; i < result.logs.length; i++) {
//           var log = result.logs[i];
      
//           if (log.event == "ClaimKeyRequired") {
//           isEventSent = true;
//           break;
//           }
//       }
//       return isEventSent;
//     }).then(function(isEventSent) {
//       assert.equal(isEventSent, true, "Event wasn't fired on contract's initialization");
//     });
//   });
// });
