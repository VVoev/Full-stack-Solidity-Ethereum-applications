import React, { Component } from 'react'
import Layout from '../../components/Layout';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes'

export default class CampaignNew extends Component {

    state = {
        minimumContribution:'',
        errorMessage:'',
        loading:false,
    }

    formHandler = async (event) =>{
        event.preventDefault();
        this.setState({
            loading:true,
            errorMessage:''
        })
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
                from:accounts[0]
            })
            Router.pushRoute('/');
        } catch (error) {
            console.log(error);
            this.setState({errorMessage:error.message});
        }
        this.setState({loading:false})    
    }
    render() {
        return (
            <h1>
                <Layout>
                    <h3>Create A Campaign</h3>

                    <Form onSubmit={this.formHandler} error={!!this.state.errorMessage}>
                        <Form.Field>
                            <label>Minimum Contribution</label>
                            <Input label="wei" labelPosition="right" value={this.state.minimumContribution}
                            onChange={(e)=>this.setState({minimumContribution:e.target.value})}/>
                        </Form.Field>
                        <Message error header="Oops" content={this.state.errorMessage} />
                        <Button primary loading={this.state.loading}>Create</Button>
                    </Form>
                </Layout>
            </h1>
        )
    }
}
