pragma solidity ^0.4.20;

contract Inbox{
    string public message;
    
    function Inbox(string initialMsg)public {
        message = initialMsg;
    }
    
    function setMessage(string newMessage)public {
        message = newMessage;
    }
    
    function getMessage()public view returns(string){
        return message;
    }
    
    
}