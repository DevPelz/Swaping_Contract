// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.19;

import "./interfaces/IERC20.sol";

contract Swap {
    IERC tokenA;
    address immutable owner1;
    IERC tokenB;
    address immutable owner2;

    constructor(
        address _tokenA,
        address _owner1,
        address _tokenB,
        address _owner2
    ) {
        tokenA = IERC(_tokenA);
        owner1 = _owner1;
        tokenB = IERC(_tokenB);
        owner2 = _owner2;
    }

    function swap(uint256 _amount1, uint256 _amount2) external {
        require(msg.sender == owner1 || msg.sender == owner2, "Unauthorized");
        // check that conttract has enough allowance to spen tokens
        require(
            tokenA.allowance(owner1, address(this)) >= _amount1,
            "TokenA allowance too low"
        );

        require(
            tokenB.allowance(owner2, address(this)) >= _amount2,
            "TokenB allowance too low"
        );

        // transfer tokenA from owner1 to owner2
        _safeTransferFrom(tokenA, owner1, owner2, _amount1);

        // transfer tokenB from owner2 to owner1
        _safeTransferFrom(tokenB, owner2, owner1, _amount2);
    }

    // transferring the tokens using a safeTransferFrom function
    function _safeTransferFrom(
        IERC token,
        address sender,
        address to,
        uint256 amount
    ) private {
        bool sent = token.transferFrom(sender, to, amount);
        require(sent == true, "ERC20: Tranfer Failed");
    }
}
