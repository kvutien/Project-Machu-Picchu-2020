# _Machu-Picchu_
ConsenSys Bootcamp 2020 - Final Project of Vu Tien Khang

## Why _Machu Picchu_?
_Machu Picchu_ is a decentralised database, using OrbitDB on IPFS. OrbitDB is a Document Database, like MongoDB, instead of being a Relation Database, like MySQL. Document Database is suited for our purpose because we need no complex relation tables. The database contains JSON objects describing a person, a wallet and various data that can be used to optimise social relief programs. The final purpose is to make this tool available as open source to all international organisations providing benefits to disinherited people: refugees, microfinance customers and in general all beneficiairies of aids etc. 

In my Final Project of the ConsenSys bootcamp, I'll initiate _Machu Picchu_ with a simple dApp. After the bootcamp, I'll make it grow inb complexity and in useability. It will be the theme of my participation in future hackathons.
### and why this name _Machu Picchu_?
* Remember how centralised was the Inca empire? -- _it was very centralised_
* Remember what happened to it?

## Advantages
This will make "_Data as a Public Service_". Data collected by any social relief organisation is available and usable by others. Having the data on blockchain makes it trustable, open to the public and at the same time allows each person to remain owner of his/her personal data.

## Specifications (November 2020)
The dApp offers 3 actions in its current stage: append persons, read persons, update a person (more to come)
* Append persons: the dApp reads a .CSV file of participants, create a JSON for each person and store it on OrbitDB
* Read persons: the dApp goes trhough the database and displays the data of each person
* Update a person: the dApp searches for a specific person and displays the pairs key-value for update and records the update
### Roadmap
* a management system to on-board, list and modify the persons in need, using OrbitDB and IPFS (this Final Project)
* a management system of helper institutions, n-to-n connected to persons in need
* modify the on-boarding by adding meta-transactions paid by helper institutions
* progressive improvements. See White Paper (FileCoin can be added at any stage).


## Install and Run
...

## How to use the smart contract
...

## Contributing
Feel free to open new issues or submit pull requests for _Machu Picchu_. If you'd like to contact me before doing so, feel free to get in touch (see Contact section below).

Before opening an issue or submitting a PR, you may want to follow these usual guidelines:
### Issues
*   Please state whether your issue is a question, feature request, or bug report.
*   Always try the latest version of _Machu Picchu_ before opening an issue.
*   If the issue is a bug, be sure to clearly state your problem, what you expected to happen, and what all you have tried to resolve it.
*   Always try to post simplified code that shows the problem. Use Gists for longer examples.

### Pull Requests
*   If your PR is a new feature, please consult with me first.
*   Any PR should contain only one feature or bug fix. If you have more than one, please submit them as separate PRs.
*   Always try to include relevant tests with your PRs. If you aren't sure where a test should go or how to create one, feel free to ask.
*   Include updates to the README when needed.
*   (Future: Do not update the package version or CHANGELOG. I'll handle that for each release.)

## Contact
email: kvutien.yes@gmail.com

## License
MIT
