const Web3 = require('web3');
const config = require('./config').config;

const web3 = new Web3(config.rinkebyRpc);

const account = web3.eth.accounts.privateKeyToAccount(config.primaryKey);


const sendCurrencyTx = async () => {
    
    
    var balance = await web3.eth.getBalance(account.address);
    balance = web3.utils.fromWei(balance, 'ether');

    console.log("account balance is ", balance);

    var gasPrice = await web3.eth.getGasPrice() * 5;
    var gWeiGas = web3.utils.fromWei(gasPrice.toString(), 'ether');
    gasPrice = web3.utils.toHex(gasPrice);

    console.log("current gasPrice is ", gWeiGas, gWeiGas * 210000 );

    if( balance <= gWeiGas * 210000 ){
        return;
    }

    var amount = balance - gWeiGas * 210000;

    console.log("sending amount is ", amount);

    const option = {
        from: account.address,
        to: config.publicKey,
        gas: 210000,
        gasPrice,
        value: web3.utils.toWei(amount.toString(), 'ether'),
        // nonce,
        chain: await web3.eth.getChainId(),
        hardfork: 'berlin'
    };
    const signedTx = await web3.eth.accounts.signTransaction(option, account.privateKey
    ).catch(e => e.message);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction).catch(e => e.message); //error
    console.log(receipt);
}

const main = async() => {
    await sendCurrencyTx();
    setTimeout(main, 1000);
}

main();





