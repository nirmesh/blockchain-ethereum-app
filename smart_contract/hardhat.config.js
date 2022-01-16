require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Z21CdtypEdeff3_Ut2pR8-wMTZbbdMWV',
      accounts: ['084770a2b7bd1da51c002750ecd5f53d35853f8c40cd9cf9aea193d8a8026c54'],
    },
  },
};