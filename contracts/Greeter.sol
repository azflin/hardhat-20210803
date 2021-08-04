//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract Greeter {
  uint public x = 42;

  function add(uint _x) external {
    x += _x;
  }
}
