import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),'0x88E2DD2529f861C112508dCedCB3e9426afA5471');

export default instance;