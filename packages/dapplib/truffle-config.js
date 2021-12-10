require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remain hole guess arctic bubble gaze'; 
let testAccounts = [
"0xfa6357d90cea04b142f21003d9bf42b7b61f6f98369272e0dee0d9cbafeb814d",
"0x26d4e0eb15032ba2b0f09eb505007f639fbe435107c6fb4a6df09a7204593fec",
"0x78bd63a46c2ae4e829fc1207236224ab8665230dd6718aeea5784b17214d0042",
"0x7c5fc590fcf8010f5b9618742542f3b190c2a946ae295496afa9c57637b04ccc",
"0x412d9869a3ec0175b3f66996beb2fd62716a9b493084890c7184bb8e2ed01a3d",
"0x0ac189a14aa8a8f8016e018d3207c55dde4e93da1e010972bf5247531388a655",
"0x17ad70d1b841cbe3858b529844c628e48bd73461734d6bb009562c7589467ac5",
"0xfb46caec8ff73a5cff7a908cca15d8d3e268d36f702b0ce35756340e98e76114",
"0x78f7ee045e499ada1cb97035fa0c560a56b12e05186b21c0e579f37a6405f21a",
"0xf6b04bfdb3945a67eda34426ff1f8e159eb3ebc37b01d5a396d829f00d017e66"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


