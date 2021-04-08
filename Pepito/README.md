
# Presentation
|![](https://upload.wikimedia.org/wikipedia/en/9/93/Pepito_Bottaro.jpg)|Pepito is the name of the main character of a [French comic book](https://en.wikipedia.org/wiki/Pepito_(comics)) I loved when I was a kid, in 1960. Pepito was a young corsair of the Caribbean islands. His specialty was his disguises, with which he could fool Hernandez Banana, the Governor of the island of Las Ananas, his favorite (and not very smart) victim. |
|-------|:---------|


In this game, your mission is to build a disguise for Pepito, from [a set of existing components](https://avataaars.com/). Once you built this disguise, you'll record it on the blockchain so that Pepito is sure he'll not reuse it again and will never take twice the same disguise.

![Target look](../20201128%20Avatars.jpeg)

Actually, our real purpose in _Machu Picchu_ is to build a blockchain-based tool to manage personal data of persons-in-need worldwide and the financial humanitarian assistance tokens that helper organisations would give to these persons-in-need. These tokens can be exchanged and bundled in a DEX until their owner have enough tokens that it becomes cost-effective to exchange then into fiat money. More info here: [ConsenSys Academy graduation days](https://youtu.be/9fWTD8gf-Us).

In final the win-win situation is
* Helper institutions share the data of the persons-in-need to improve the efficiency of their incentive and aid programs
* Persons-in-need are free to share and exchange their tokens until they decide to make it real fiat money
* Any private of public entity (large or small) who targets these persons can use the data, that are not confiscated by any single actor.

The amount of "Cash Voucher Assistance" (CVA) totalled $5.6bn in 2019, doubling 2016 levels and accounting for 17.9% of total humanitarian assistance. Financial services targeting the same population is 10 times this amount.

## Credits
Big thanks to the following resources:

* [https://avataaars.com/](https://avataaars.com): the initial creator of the images
* [https://github.com/fangpenlin/avataaars](https://github.com/fangpenlin/avataaars): the creator of the React avataar random generator
* [https://github.com/keep-network/random-avatar](https://github.com/keep-network/random-avatar): using avataar to illustrate its own blockchain secure random number generator 

# Demo setup

## MacOS

* Install [Ganache](https://github.com/trufflesuite/ganache/releases/download/v1.2.1/Ganache-1.2.1-mac.zip) and [Brew](https://brew.sh/)
* Install nodeJS via brew `brew install node@10` 
* Navigate to the folder where you want to clone the Machu-Picchu project
* Clone the project via `git clone https://github.com/kvutien/Machu-Picchu.git` 
* Install the required packages
  * `cd` to folder `Machu-Picchu/Pepito`, and 
  * run `npm install`
* Launch the `truffle develop` blockchain 
  * in folder `Machu-Picchu/Pepito`, run `truffle develop`: it will generate its own ganache-like network
  * in `truffle develop>` type `migrate` (or `migrate --reset` to force a new deployment)
* Connect your Metamask to the local testnet of `truffle develop` (should be http://127.0.0.1:9545) and import the first `truffle develop` account into Metamask
  * _Metamask note_: see caveats below in "_Suggested scenario_"
* Launch the frontend
  * open another terminal window, `cd` to folder `Machu-Picchu/Pepito`, run the frontend with `npm run start`
  * Your browser will open automatically [http://localhost:3000](http://localhost:3000) to view the app. It may take some time because the frontend is not optimized yet.
  * exercise the functions of the scenario below 
* (New) Connect your Metamask to Rinkeby and select an account that has ETH on Rinkeby
* Reload the frontend and exercise again the scenario below

## Suggested scenario
* install the dApp as above
* run the backend and the frontend as above
  * _Metamask note_: if you often use Metamask and this same testnet `truffle develop`, remember to "reset" the account used, to align Metamask's nonce with this fresh blockchain
  * _Metamask note_: when you store a disguise, Metamask will display one confirmation to create a disguise contract and one confirmation to store the disguise inside this contract. If Metamask displays only one single confirmation dialog, or displays a confirmation dialog with a strange gas limit, you may need to reset your account. See here [https://metamask.zendesk.com/hc/en-us/articles/360015488891-Resetting-an-Account](reset Metamask account)
  * _Metamask note_: if the gas price in Metamask is too low (<20 gwei> the disguise creation is reverted and the frontend hangs. A JavaScript `try/catch` will be added in the near future)

<img src="./MainGUI.png" alt="drawing" width="1780"/>

* do only once: click on the button "_Get blockchain interface & Pepito instance_"
* click on the button "_Store disguise on blockchain_"
* repeat as many time as desired
  * click on the button "_Generate random disguise_"
  * click on the button "_Store disguise on blockchain_"
* after you have stored more than one disguise, you may retrieve the stored disguises
  *  click on the text box
  *  give the number of the disguise to retrieve
  *  click on the button "_Retrieve this disguise from blockchain_"
* to run the truffle tests, go to the console window of `truffle develop` and type `test`


# State of the project submitted
* [demo video: https://youtu.be/3nN-B7XjG_U](https://youtu.be/3nN-B7XjG_U) 
* backend working, migrated to `truffle develop`. The Infura testnet deployment is done on Rinkeby
  * (new) 13 Mocha contract tests. In `Pepito`, 6 tests passed. In `PepitoDisguise`, 7 tests passed
* frontend operational in local, external hosting TODO
* git
  * github URL: [https://github.com/kvutien/Machu-Picchu](https://github.com/kvutien/Machu-Picchu)


# Design
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
* (**done**) 5 tests for each 2 smart contracts, 3 tests not working, being investigated
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
  * configure `truffle-config.js` with `module.exports` containing your Infura credentials and your testnet
  * set your `REACT_APP_WEB3_INFURA_PROJECT_ID`, and `REACT_APP_PRIVATE_KEY` [environment variables](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html). You can get the Infura key from a free trial of [Infura](https://infura.io/). At the moment, it does need to be Infura, we are still on a local truffle network. You can find your `REACT_APP_PRIVATE_KEY` from your ethereum wallet like [Metamask](https://metamask.io/). 
  * run `truffle migrate --network` (your testnet)
  * connect Metamask to this testnet where your account has some ETH
  * TODO: do a React `build`, upload and run the app on `Heroku` or `Fleek` or `Netlifly`. `Fleek` is on `IPFS`
