import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  state ={
    manager:'',
    players:[],
    balance:'',
    value:'',
    message:'Nothing happend'
  }
  handleChange = (e) =>{
    this.state.value = e.target.value;
  }

  onSubmitForm = async (e) =>{
    e.preventDefault();
    this.setState({message:'Waiting for transaction to happend'});
    const accouns = await web3.eth.getAccounts();
    await lottery.methods.enter().send({
      from:accouns[0],
      value:web3.utils.toWei(this.state.value,'ether')
    });
    this.setState({value:''})
    this.setState({message:'You have succesfully entered'});
  };

  handleWinner = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({ message: 'A winner has been picked!' });
  };

  async componentDidMount(){
    const manager = await lottery.methods.manager().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    const players = await lottery.methods.getPlayers().call();
    this.setState({manager,balance, players});
  }
  render() {
    return (
     <div>
       <h2>Lottery Contract</h2>
       <p>This contract is managed by {this.state.manager}</p>
        <p>These are currently total of {this.state.players.length} players</p>
        <p>Competing for {web3.utils.fromWei(this.state.balance)} ethers</p>
        <hr/>
        <form onSubmit={this.onSubmitForm}>
        <h4>Want to try your luck</h4>
        <label>Amount of ethers to send</label>
        <input onChange={this.handleChange} />
        <br/>
        <button>Enter</button>
        </form>
        <h1>{this.state.message}</h1>

        <br/>
        <h4>Pick a winner</h4>
        <button onClick={this.handleWinner}>Find a Winner</button>
     </div>
    );
  }
}

export default App;
