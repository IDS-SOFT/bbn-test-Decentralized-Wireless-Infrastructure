//SPDX-License-Identifier:GPL-3.0

pragma solidity ^0.8.0;

contract WirelessInfrastructure {
    // Define the terms of the contract
    string public infrastructureName;
    uint public infrastructureCost;

    // Define the parties involved
    address public owner;
    mapping(address => bool) public investors;

    // Define the constructor function
    constructor(string memory _infrastructureName, uint _infrastructureCost) {
        owner = msg.sender;
        infrastructureName = _infrastructureName;
        infrastructureCost = _infrastructureCost;
    }

    // Define the function for adding investors
    function addInvestor(address _investorAddress) public {
        require(msg.sender == owner, "Only the owner can add investors");
        investors[_investorAddress] = true;
    }

    // Define the function for investing in the infrastructure
    function investInInfrastructure() public payable {
        require(investors[msg.sender], "You are not an authorized investor");
        require(msg.value > 0, "You must invest more than 0 ETH");
    }

    // Define the function for checking the investment balance
    function checkInvestmentBalance (/*address _investorAddress*/) public view returns (uint) {
        return address(this).balance;
    }
}
