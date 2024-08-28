// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0 <0.9.0;

interface PoseidonT2 {
    function hash(uint[1] calldata input) external pure returns (uint);
}

contract Test {
    function test() public pure returns (uint) {
        return
            PoseidonT2(0x22233340039aAB0C858bc6086f508d9A4f2fA4db).hash(
                [2 ** 250]
            );
    }
}
