// this file is for playground and test - please ignore it

// var provider_host = 'http://flyether:8545'
// var provider_host = "http://v.mkvd.net:8080"
var provider_host = "http://v.mkvd.net:8080"

web3.setProvider(new web3.providers.HttpProvider(provider_host));

var coinbase = web3.eth.coinbase;
var balance = web3.eth.getBalance(coinbase)
console.log("balance", Number(balance))

var abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "x",
        "type": "uint256"
      }
    ],
    "name": "set",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "name": "retVal",
        "type": "uint256"
      }
    ],
    "type": "function"
  }
]

var MyContract = web3.eth.contract(abi);
var myContractInstance = MyContract.at('0xd02f71360ad2c8d3e0eef06ca85f4a70818f35b0');


console.log(myContractInstance)

console.log("get:", Number(myContractInstance.get()))

window.myContractInstance = myContractInstance
// myContractInstance.set(1)
