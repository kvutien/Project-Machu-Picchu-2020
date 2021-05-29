# _Machu-Picchu_
[![Vu Tien's github stats](https://github-readme-stats.vercel.app/api?username=kvutien)](https://github.com/anuraghazra/github-readme-stats) [stats tool courtesy Anurag Hazra](https://github.com/anuraghazra/github-readme-stats)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=kvutien)](https://github.com/anuraghazra/github-readme-stats)

General presentation. [The ConsenSys Bootcamp 2020 Final Project of Vu Tien Khang is here](https://github.com/kvutien/Machu-Picchu/tree/main/Pepito).

# Why _Machu Picchu_?
[![](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)
[![](https://img.shields.io/badge/project-machu----picchu-brightgreen)](https://github.com/Machu-Pichu/general.git)

*(Written in May 2021)*

_Machu Picchu_ is the beginning of a collaborative open source initiative. It aims to use the Ethereum blockchain to share “_Data as a Public Service_” among all the humanitarian organisations that provide support and benefits to the persons-in-need. These persons remain owners of their data and receive a micro-fee from every entity that retrieves this data. Like when you give your data to the GAFA to obtain map guidance, news, entertainment suggestions, taxi services etc. But here the data are accessible to all, including startups. [The business model is explained here in Medium](https://kvutien-yes.medium.com/machu-picchu-how-the-blockchain-can-help-persons-in-need-8396820d13d1).

The need to share data among humanitarians is recognized. The addressable market is huge: _Cash and Voucher Assistance programs_ alone totalled **$5.6bn in 2019**, quote the joint Danish Red Cross/Mercy Corp/HiveOnLine [report of November 2020](https://www.hivenetwork.online/blockchain-for-good/). And wait, there are **more aid  and relief programs** than that: risk sharing, credit rating, gender equality, health practices, education, mother and child care, civil governance etc.

In my Final Project of the ConsenSys bootcamp, I'll initiate _Machu Picchu_ with [**Pepito**](https://github.com/kvutien/Machu-Picchu/tree/main/Pepito), a simple dApp. It will take form of a game where users are able to build a character with components of its face: hair, eyes, nose, mouth, clothes, accessories). Then the user will record it on the blockchain where all other users may see. [Here is the Medium description](https://kvutien-yes.medium.com/machu-picchu-why-should-humanitarian-organizations-be-interested-in-using-blockchain-360bbfcb88f5). It's a gamification of a person-in-need's real life record, targeted at helping the staff members of humanitarians demystify blockchain away from cryptos, dark nets and speculations.
![Target look](https://github.com/kvutien/Machu-Picchu/blob/main/20201128%20Avatars.jpeg). Credits: [the React library of Fang Pen Lin](https://github.com/fangpenlin/avataaars)

After the bootcamp, I'll make it grow in complexity and in useability by adding IPFS and OrbitDB or Textile. It will be the theme of my participation in future hackathons. The project is open source and collaborative. **Let's make it happen together. Spread the word.**

OrbitDB is a Document Database, like MongoDB, instead of being a Relation Database, like MySQL. Document Database is suited for our purpose because we need no complex relation tables. The database contains JSON objects describing a _person in need_ and his/her _virtual personal secretary_ (actually a wallet and various data that can be used to optimise social relief programs). The final purpose is to make this tool and its data available as open source to all international organisations providing benefits to disinherited people: refugees, microfinance customers and in general all beneficiairies of aids etc. 

## why this name _Machu Picchu_?
* Remember how centralised was the Inca empire? -- _it was very centralised_
* Remember what happened to it? _conquered by only 168 men, one cannon, and 27 horses_

# Advantages of _Machu Picchu_
1. This will make "_Data as a Public Service_". Data collected by any social relief organisation are available and usable by others. Having the data on blockchain makes it trustable, open to the public and at the same time allows each _person in need_ to remain owner of his/her personal data, taking advantage of IPFS and of the _virtual personal secretary_.
2. Using blockchain tokens allows *"Cash & Voucher Assistance"* programs --USD 5.6 Bn in 2019-- to do micro-payments in full trust and reduced risk of corruption and theft, while at the same time avoids the high banking overhead when distributing small amounts of cash.
3. Using blockchain DEX allows persons-in-need to collect, exchange and bundle tokens from a number of cooperating helper organisations into a significant sum, that can be redeemed as fiat with the lowest overhead possible, and used to buy medicine, education, tools etc.

# Specifications of project Pepito, December 2020
[The project is here](https://github.com/kvutien/Machu-Picchu/tree/main/Pepito). 
The dApp offers 3 actions in its current stage: create disguise, read disguise, ~~update disguise~~ (more to come)
* Create disguise: mainly in `React.js`, the dApp assembles a disguise from the choice of components, creates a JSON for each disguise and stores it on-chain
* Read disguise: the dApp goes through the array of addesses of disguises, retrieves and displays the data of each disguise
* ~~Update disguise: the dApp searches for a specific disguise and displays the pairs key-value for update and records the update~~
## Roadmap of _Machu Picchu_
Contributors can develop independently and contribute as a distinct project.
* the first contribution is the hackhaton ETH-Online 2020, [a first idea but a bit complex to start with](https://github.com/Machu-Pichu/hackathon/)
* the second contribution is Pepito, a demonstration game [(this Final Project)](./Pepito)
* the third contribution is Pepito, ported to CELO, for the ETH Denver 2021 hackathon. It won 4 bounties.

Other contributions are welcome and could be:
* a data management system to on-board, list and modify the persons in need, using [OrbitDB](https://orbitdb.org/) or [Textile](https://textile.io/) and IPFS, with decentralised data schemas, using [The Graph](https://thegraph.com/) for more complex queries
* a management system of helper institutions, n-to-n connected to persons in need
* modify the cost-free person-in-need on-boarding, using meta-transactions paid by helper institutions
* progressive improvements. See White Paper (FileCoin can be added at any stage).
## Vision of Technical Stack
A vision of the complete Technical Stack that can be used for _Machu Picchu_ is, in December 2020 and if we have 2-3 M$ immediately available :-)
![Technical Stack](./20201029%20Machu%20Picchu%20Tech%20Stack.png)

# Contributing
Feel free to open new issues or submit pull requests for _Machu Picchu_. If you'd like to contact me before doing so, feel free to get in touch (see Contact section below).

Before opening an issue or submitting a PR, you may want to follow these usual guidelines:
## Issues
*   Please state whether your issue is a question, feature request, or bug report.
*   Always try the latest version of _Machu Picchu_ before opening an issue.
*   If the issue is a bug, be sure to clearly state your problem, what you expected to happen, and what all you have tried to resolve it.
*   Always try to post simplified code that shows the problem. Use Gists for longer examples.

## Pull Requests
*   If your PR is a new feature, please coordinate with me first. Someone else may started the same idea.
*   Any PR should contain only one feature or bug fix. If you have more than one, please submit them as separate PRs.
*   Always try to include relevant tests with your PRs. If you aren't sure where a test should go or how to create one, feel free to ask.
*   Include updates to the README when needed.
*   (Future: Do not update the package version or CHANGELOG. I'll handle that for each release.)

## Contact
email: kvutien.yes@gmail.com

## License
MIT
