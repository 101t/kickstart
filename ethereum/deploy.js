const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'link miss case east brass index horse pencil mistake evidence assist amateur',
  'https://rinkeby.infura.io/v3/16394fc7373a4305ae934ae8d409c158'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attending to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({gas: '1000000', from : accounts[0]});
  console.log("Contract deployed to", result.options.address);
};

deploy();
