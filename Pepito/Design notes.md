# Design Notes
[<-- Installation instructions](./README.md)

[<-- Deployment Notes](./Deployment%20notes.md)
## Smart contract backend design
In the following is the design of a dApp to help you in this mission generating disguises for Pepito. But keep this in mind: behind this game, by simply modifying a few lines of code, each disguise can become actually a set of characteristics of a person-in-need that humanitarians can help. Because the blockchain is open, once persons-in-need are recorded, all humanitarian organisations can access the data, and these persons keep full control on these personal data.

![Backend](./Final%20Project%20Design.png)

**As part of future design**, to allow a simple SMS-based signature by the person-in-need while preserving security, we are considering the use of a multisignature pattern, shared between the persons-in-need and the chief of village (the "Factory"). The person-in-need will sign with an OTP and a simple mobile phone. The chief of village will have a tablet or smartphone and will sign with the wallet private key.

## React Frontend design
The frontend of _Machu Picchu_ is derived from Truffle Box React. As compared to the version submitted in December, the `App.js` is reduced to the minimum. All important actions are in distinct React components. We can now improve gradually each function without impacting the others: 
* how to generate disguises,
*  how to store disguises (blockchain or IPFS or OrbitDB or Textile), 
*  how to retrieve a disguise, modify it and store back

We can also derive Pepito into a true humanitarian organisation management system without disrupting the code.

![Frontend](./Final%20Project%20React.png)

# Directory structure
```
.
├── 20201029\ Machu\ Picchu\ Tech\ Stack.png
├── 20201128\ Avatars.jpeg
├── ConsenSys\ Academy?\200\231s\ 2020\ Blockchain\ Developer\ Bootcamp\ Final\ Project\ Spec.docx
├── LICENSE
├── Pepito
│   ├── .env
│   ├── Factory\ Pattern.png
│   ├── Final\ Project\ Design.png
│   ├── Final\ Project\ Design.pptx
│   ├── Final\ Project\ React.png
│   ├── README.md
│   ├── Design\ notes.md
│   ├── avoiding_common_attacks.md
│   ├── contracts
│   │   ├── CodeTemplate.sol
│   │   ├── DraftCommunity.sol
│   │   ├── DraftHelperInstitution.sol
│   │   ├── Migrations.sol
│   │   ├── Pepito.sol
│   │   └── PepitoDisguise.sol
│   ├── design_pattern_decisions.md
│   ├── migrations
│   │   ├── 1_initial_migration.js
│   │   └── 2_deploy_contracts.js
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon-react.ico
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── machupicchu_logo.png
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── xmas.png
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── Disguise.js
│   │   ├── DisguiseControls.js
│   │   ├── DisguiseRetrieve.js
│   │   ├── DisguiseStore.js
│   │   ├── DrawAvataar.js
│   │   ├── MakePepito.js
│   │   ├── OptionTable-v7.js
│   │   ├── OptionTable.js
│   │   ├── contracts_abi
│   │   │   ├── Migrations.json
│   │   │   ├── Pepito.json
│   │   │   ├── PepitoDisguise.json
│   │   │   └── SafeMath.json
│   │   ├── getWeb3.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── test
│   │   ├── 1-PepitoTest.js
│   │   └── 2-PepitoDisguiseTest.js
│   └── truffle-config.js
└── README.md

7 directories, 58 files
```

# ConsenSys Specifications of the dApp
## Smart contract
* (**done**) Be a Truffle project
* Have a smart contract(s) commented according to the specs which:
  + (**done**) Have a circuit breaker design pattern and at least one other design pattern in Module 10 Lesson 1
  + (**done**) Have security features to protect against at least two attack vectors outlined in Module 9 Lesson 3
  + (**done**) Use a library (`SafeMath.sol`, `EthPM`, etc.) or extend another contract
* (**done**) 5 tests or more for each 2 smart contracts
* (**done**) Smart contract should be deployed to a testnet

## Frontend

The front end is liberally inspired from this project [(https://github.com/keep-network/random-avatar)](https://github.com/keep-network/random-avatar) and this project [(https://github.com/fangpenlin/avataaars)](https://github.com/fangpenlin/avataaars)
* (**done**) Have a development server to serve the frontend interaction of the application locally (You should be able to visit a local URL and interact with the application)
  +	(**done**) Frontend should work with `web3.js` / `ethers.js`, Infura and MetaMask to: 
  +	(**done**) Recognize and display current Metamask account
  +	(**done**) Sign transactions that change a deployed contract’s state using MetaMask
*	(**done**) Reflect the successful state change in the UI (currently the contract addresses are displayed)

## Git
*	(**done**) Be uploaded to its own Github repository
*	(**done**) Have a README doc describing the overview of your project, pointing out directory structure and how to build and run your project locally  
*	(**done**) AND A document called design_pattern_decisions.md explaining which design patterns you used
*	(**done**) AND A document called avoiding_common_attacks.md explaining security steps you took what measures you took to ensure your contracts are not susceptible to common attacks
*	(**done**) A screen recording walking through your Dapp.
*	(**done**) AND A document called deployed_addresses.txt that describes where your contracts live (testnet AND address).

## Public testnet setup process: all done but the last bullet
  * TODO: do a React `build`, upload and run the app on `Heroku` or `Fleek` or `Netlifly`. `Fleek` is on `IPFS`

## One last thing: versions of the packages successfully used in development and tests
* Truffle v5.1.46 (core: 5.1.46)
* Solidity - 0.6.0 (solc-js set in truffle-config)
* Node v12.18.4
* Web3.js v1.2.1
* @truffle/hdwallet-provider v1.2.3