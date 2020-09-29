if (typeof web3 !== 'undefined') {
    console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/e7ff0d744db146bb8bcc8f2ef4a0c608"));
} else {
    console.log('No Web3 Detected... using HTTP Provider')
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/e7ff0d744db146bb8bcc8f2ef4a0c608"));
}
function getBalance() {
let address, wei, balance
address = document.getElementById("address").value
try {
web3.eth.getBalance(address, function (error, wei) {
if (!error) {
    var balance = web3.fromWei(wei, 'ether');
    document.getElementById("output").innerHTML = balance + " ETH";
}
});
} catch (err) {
document.getElementById("output").innerHTML = err;
}
}