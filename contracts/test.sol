// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.26;

import "./PoseidonT3.sol";

interface PoseidonT2 {
    function hash(uint[1] calldata input) external pure returns (uint);
}

contract Test {
    function test() public view returns (uint) {
        uint a = PoseidonT2(0x22233340039aAB0C858bc6086f508d9A4f2fA4db).hash(
            [2 ** 250]
        );
        uint b = PoseidonT3.hash([2 ** 250, 3]);
        return a + b;
    }
}
