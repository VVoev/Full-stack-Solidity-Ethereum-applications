import React, { Component } from 'react'
import {Form, Button,Message,Input} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3'
import {Link,Router} from '../../../routes';
import Layout from '../../../components/Layout';

export default class RequestNew extends Component {

    state = {
        value:'',
        description:'',
        recipient:'',
        loading:false,
        errorMsg:''
    }
    static async getInitialProps(props){
        const {address} = props.query;
        return {address};
    }
    handleFormSubmit = async (e)=>{
        e.preventDefault();
        const campaign = Campaign(this.props.address);
        const {description,value,recipient} = this.state;

        this.setState({loading:true,errorMsg:''});
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(description,web3.utils.toWei(value,'ether'),recipient).send({
                from:accounts[0]
            })
            Router.pushRoute(`/campaigns/${this.props.address}/requests`)
        } catch (error) {
            this.setState({errorMsg:error.message})
        }
        this.setState({loading:false});
    }
    render() {
        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                    Back
                </a>
                </Link>
                <h3>Create a Request</h3>
           <Form onSubmit={this.handleFormSubmit} error={!!this.state.errorMsg}>
               <Form.Field>
                   <label>Description</label>
                   <Input value={this.state.description} onChange={(e)=>this.setState({description:e.target.value})}/>
               </Form.Field>

                   <Form.Field>
                   <label>Value in Ether</label>
                   <Input value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}/>                   
               </Form.Field>

                   <Form.Field>
                   <label>Recipient</label>
                   <Input value={this.state.recipient} onChange={(e)=>this.setState({recipient:e.target.value})}/>                   
               </Form.Field>
               <Message error header="Ooops" content={this.state.errorMsg}/>
               <Button primary loading={this.state.loading}>Create</Button>
           </Form>
           </Layout>
        )
    }
}
