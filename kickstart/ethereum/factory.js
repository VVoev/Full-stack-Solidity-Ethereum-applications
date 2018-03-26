import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),'0x0Bd13C770AdCbB88D8AAE8ED49ab6b382719212f');

export default instance;