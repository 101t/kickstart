import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xDc0fcb4625BA2f7207698f0a82389601aa0C7D24'
)

export default instance;
