import React, { Component } from 'react';
import {Form,Input,Message,Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes'

export default class ContributeForm extends Component {

    state = {
        value:'',
        errorMessage:'',
        loading:false
    }

    formSubmitHandler = async (e) =>{
        event.preventDefault();
        const campaign =  Campaign(this.props.address);
        this.setState({loading:true,errorMessage:''})
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from:accounts[0],
                value:web3.utils.toWei(this.state.value,'ether')
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        } catch (error) {
            this.setState({errorMessage:error.message})
        }
        this.setState({loading:false,value:''});

    }
    render() {
        return (
            <div>
                <Form onSubmit={this.formSubmitHandler} error={!!this.state.errorMessage}
                >
                    <Form.Field>
                        <label>Amount to contribute</label>
                        <Input 
                        value={this.state.value}
                        onChange={(e)=>this.setState({value:e.target.value})}
                        label="ether" labelPosition="right"
                        />
                        <Message error header="Oops" content={this.state.errorMessage}/>
                        <Button primary loading={this.state.loading}>Contribute</Button>
                    </Form.Field>
                </Form>
            </div>
        )
    }
}
