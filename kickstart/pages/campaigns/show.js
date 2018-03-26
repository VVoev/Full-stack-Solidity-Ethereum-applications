import React, { Component } from 'react'
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import {Card} from 'semantic-ui-react';
import web3 from '../../ethereum/web3'

export default class CampaignShow extends Component {

    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return {
            minimumContribution:summary[0],
            balance:summary[1],
            requestsCount:summary[2],
            approversCount:summary[3],
            manager:summary[4]
        };
    }

    renderCards(){
        const {balance, manager,minimumContribution,requestsCount,approversCount} = this.props;
        const items = [
            {
                header:manager,
                meta:'Adress of the manager',
                description:'The Manager has been the creator of this campaign',
                style:{overflowWrap:'break-word'}
            },
            {
                header:minimumContribution,
                meta:'Minimum Contribution (wei)',
                description:'You must contribute at least this much wei to become a approver',
            },
            {
                header:requestsCount,
                meta:'Number of requests',
                description:'Total number of requests',
            },
            {
                header:approversCount,
                meta:'Number of approvers',
                description:'Total number of people who already donated',
            },
            {
                header:web3.utils.fromWei(balance,'ether'),
                meta:'Campaign balance(ether)',
                description:'The balance of the campaign',
            }
        ]

        return <Card.Group items={items}/>
    }
    render() {
        return (
            <Layout>
                <h3>
                    CampaignShow
                </h3>
                {this.renderCards()}
            </Layout>
        )
    }
}
