pragma solidity ^0.4.20;

contract Lottery {
    address public manager;
    address[] public players;
    uint public randomHash;
    
    modifier ownerOnly() {
        require(msg.sender == manager);
        _;
    }
    
    function getBalance() public view returns(uint) {
        return this.balance;
    }
    
    function Lottery() public {
        manager = msg.sender;
    }
    
    function enter()public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
        random();
    }
    
    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public ownerOnly payable {
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }
    
   function getPlayers()public view returns(address[]){
       return players;
   }
}