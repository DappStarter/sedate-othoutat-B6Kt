require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan response spider assume install perfect fringe ghost'; 
let testAccounts = [
"0x50d93768bfb359b11b6241c0763c3ffe717aa24e4c4ba22e2c5776b4c98e2934",
"0x94ed781e7f7813cf7b00b97bbe15cea814f341ef91ed16940002ad8b03c98958",
"0xf1e0f40cb8b73bf68131a058fc28b3861ef32b3f62643ef301eba9f0db5606ac",
"0xfd3b8a32f9ab3d58c2260add63849bc411e0d8dfcea91d3d4f2027eb4421397f",
"0xa5c1f5f7b3e31a5d359b20726538a46d7aec9cea45512c1815e614e6d490b481",
"0x7f17d48df51e92cb661de46084d58cb38e9094befc817bcd2e61af551108521a",
"0x9ae9f133eed720777f823ed644c721cbaf602532e5894572083bb39188fa385d",
"0x2bed5051fa3774333c707eaa97649485e50d494e25ddf562770d2d55829f6e0f",
"0x2a201d67b0a9e87ded60bd2f34675cacf533cbd1b4b4b047bf3e29b65549450e",
"0xc2313704524af6367eae846900cb6236da490d0944604f1d311c8b77e4741229"
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


