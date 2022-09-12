var fireAbi = require('./abis/fireToken.json');
var rewardAbi = require('./abis/reward.json');
var routerAbi = require('./abis/router.json');
var bscRouterAbi = require('./abis/bscRouter.json');
var testBAbi = require('./abis/TestB.json');


var config = {
    ropstenRpc: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    avalancheRpc: "https://api.avax.network/ext/bc/C/rpc",
    bscRpc: "https://speedy-nodes-nyc.moralis.io/e46ea4ff63505674796a414a/bsc/mainnet",

    //first
    // primaryKey1: "94d7caa3b5fcd671d1687f5132d4b67",
    // primaryKey2: "2ac0bda82962ca170bb93487c9347e1fb",   
    
       
    
    fireAddress: "0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5",
    usdtAddress: "0xc7198437980c041c805a1edcba50c1ce5db95118",
    busdAddress: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",

    fireAbi: fireAbi,
    rewardAddress: "0xbAd32DeaD95Eb55Ae849c6309ecA1b3d1b03bf69",
    rewardAbi: rewardAbi,

    wavaxAddress: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
    routerAddress: "0x60aE616a2155Ee3d9A68541Ba4544862310933d4",
    routerAbi: routerAbi,

    bankAbi: testBAbi,
    bankAddress: "0xCc4642E9c5c9Cc06371447662bde61C9c9Eb8727",
    //bankAddress2: "0x23cB4f098dEc5139a9e0B1Fa290B1c180226FE74"
};

exports.config = config;