# Swap Contract README

This README provides an overview of the **Swap** smart contract, designed to facilitate the exchange of two different ERC-20 tokens between two designated parties. Prior to using this contract, please ensure you have a basic understanding of Ethereum, smart contracts, and ERC-20 tokens.

## Table of Contents

- Contract Overview
- Usage
- Security Considerations
- License

---

## Contract Overview

The **Swap** contract is a simple Ethereum smart contract written in Solidity. Its primary purpose is to enable the exchange of two different ERC-20 tokens between two specific parties, `owner1` and `owner2`.

Key Components:

- `tokenA`: ERC-20 token that `owner1` wants to exchange.
- `owner1`: Address of the first party initiating the swap.
- `tokenB`: ERC-20 token that `owner2` wants to exchange.
- `owner2`: Address of the second party participating in the swap.

## Usage

To use the **Swap** contract:

1. Deploy the contract, providing these parameters:

   - `_tokenA`: Address of `tokenA`.
   - `_owner1`: Address of `owner1`.
   - `_tokenB`: Address of `tokenB`.
   - `_owner2`: Address of `owner2`.

2. Ensure both `owner1` and `owner2` approve the contract to spend their respective ERC-20 tokens using the `approve` function.

3. Initiate the swap by calling the `swap` function with these parameters:

   - `_amount1`: Amount of `tokenA` to transfer from `owner1` to `owner2`.
   - `_amount2`: Amount of `tokenB` to transfer from `owner2` to `owner1`.

   Only `owner1` and `owner2` can execute the `swap` function.

4. The contract securely transfers tokens using the `_safeTransferFrom` function.

## Security Considerations

- Ensure both parties (`owner1` and `owner2`) approve the contract for token allowances before initiating a swap.
- Only `owner1` and `owner2` can execute the `swap` function.
- The `_safeTransferFrom` function is used for secure token transfers.
- Carefully review and understand the contract before using it in a production environment.

---

Use this README as a guide for understanding and using the **Swap** smart contract. Thoroughly test and assess its suitability for your specific use case before deploying it.
