
# Presentation
Pepito is the name of the main character of a [French comic book](https://en.wikipedia.org/wiki/Pepito_(comics)) I loved when I was a kid. 
Pepito was a young pirate of the Caribbean islands. His specialty was his disguises, with which he could fool Hernandez Banana, the Governor of the island of Las Ananas, his favorite (and not very smart) victim. 

![](https://upload.wikimedia.org/wikipedia/en/9/93/Pepito_Bottaro.jpg)

In this game, your mission is to build a disguise for Pepito, from a set of existing components. Once you built this disguise, you'll record it on the blockchain so that Pepito is sure he'll not reuse it again and never take twice the same disguise.

In the following we'll specify and code a dApp to help you in this mission. But keep this in mind: behind this game, by simply modifying a few lines of code, each disguise can become actually a set of characteristics of a person-in-need that humanitarians can help. Because the blockchain is open, once a person-in-need is recorded, all humanitarian organisations can access the data, and this person keeps full control on these personal data.

# Specifications of the dApp
## Smart contract
* Be a Truffle project
* Have a smart contract(s) commented according to the specs which:
  + Have a circuit breaker design pattern and at least one other design pattern in Module 10 Lesson 1
  + Have security features to protect against at least two attack vectors outlined in Module 9 Lesson 3
  + Use a library (`SafeMath.sol`, `EthPM`, etc.) or extend another contract
* Have at least 5 tests for each smart contract
* Smart contract should be deployed to a testnet

## Frontend
* Have a development server to serve the frontend interaction of the application locally (You should be able to visit a local URL and interact with the application)
  +	Frontend should work with `web3.js` / `ethers.js`, Infura and MetaMask to: 
  +	Recognize and display current Metamask account
  +	Sign transactions that change a deployed contract’s state using MetaMask
*	Reflect the successful state change in the UI

## Git
*	Be uploaded to its own Github repository
*	Have a README doc describing the overview of your project, pointing out directory structure and how to build and run your project locally AND 
*	A document called design_pattern_decisions.md explaining which design patterns you used AND
*	A document called avoiding_common_attacks.md explaining security steps you took what measures you took to ensure your contracts are not susceptible to common attacks AND
*	A document called deployed_addresses.txt that describes where your contracts live (testnet AND address).
*	A screen recording walking through your Dapp.

