var Web3 = require('web3');
var bip39 = require('bip39');
var HDKey = require('hdkey');
var ethUtil = require('ethereumjs-util');

// Generating a private / public key pair using web3.js.
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var wallet = web3.eth.accounts.create(web3.utils.randomHex(32));
console.log(wallet);

// Generating a private / public key pair including a mnemonic. We use Hierarchical Deterministic (HD) wallet structure.
const mnemonic = bip39.generateMnemonic();
console.log(mnemonic);
const seed = bip39.mnemonicToSeedSync(mnemonic).toString('hex');
const root = HDKey.fromMasterSeed(seed);
const masterPrivateKey = root.privateKey.toString('hex');
console.log(masterPrivateKey);

const addrNode = root.derive("m/44'/60'/0'/0/0"); //line 1
const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
const addr = ethUtil.publicToAddress(pubKey).toString('hex');
console.log("0x" + addr);