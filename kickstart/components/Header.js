import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';



export default () => {
    return (
        <Menu style={{marginTop:'10px'}}>
           <Link route="/">
                <a className="item">
                    CrowdCoin
                </a>
           </Link>

            <Menu.Menu position="right">
                 <Link route="/">
                     <a className="item">
                         Campaigns
                     </a>
                </Link>

                   <Menu.Item style={{backgroundColor:'#2185d0'}}>
                   <Link route="/campaigns/new">
                        <a style={{color:'white'}}>
                            +
                        </a>
                </Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}


