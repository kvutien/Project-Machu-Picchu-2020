/**  class DisguiseStore - project Pepito 
 * @author Vu Tien Khang - April 2021
 * @notice send transaction to deploy a disguiseContract and
 * @notice have this disguise store its disguise options
*/
import React from 'react';
import './App.css';
import PepitoDisguise from "./contracts_abi/PepitoDisguise.json";   // to call web3 API
import { BounceLoader } from 'react-spinners';

class DisguiseStore extends React.Component{
    constructor() {
        super();
        this.state = {disguiseCount: null, loading: false};
    }

    storeDisguise = async () => {
        const web3Connected = this.props.web3Connected;
        //console.log("--> 2.storeDisguise, web3Connected", web3Connected);
      
        if(web3Connected){      // TODO: add a try-catch here
            /** @dev    get the Factory contract */
            const pepitoInstance = this.props.pepitoInstance;
            //console.log("      2.storeDisguise.Pepito instance", pepitoInstance);            

            /** @dev    tell the Factory contract to deploy a PepitoDisguise contract */
            this.setState({loading: true});
            // console.log('--> DisguiseStore, address of disguise creator & payer:', this.props.web3.givenProvider.selectedAddress);
            // console.log('--> DisguiseStore, address of ownerPepito:', this.props.ownerPepito);
            const gasPrice = 10000000000;
            await pepitoInstance.methods.createPepitoDisguise()
               .send({from: this.props.web3.givenProvider.selectedAddress, gasPrice: gasPrice});
            //todo: check selected account's balance and display in render()
            //let balance = this.props.web3.eth.getBalance(web3js.givenProvider.selectedAddress).toString();
            //balance = this.props.web3.utils.fromWei(balance);
            //console.log('   2.storeDisguise-state.disguiseReceipt', disguiseReceipt)
            
            /** @dev    obtain latest array of all disguise addresses, using event of type PepitoDisguiseCreated
             * note that in the way Pepito contract increments the disguiseCount, its value is in the range [1,n]
             * TODO: add a try/catch: lastEvent is undefined when gas price <10 gwei -> pepitoDisguise was reverted  
             */
            let disguiseCount, disguiseAddresses, disguise2store;
            try{
                const lastEvent = await pepitoInstance.getPastEvents('PepitoDisguiseCreated', {});
                const disguiseCount = lastEvent[0].returnValues.disguiseCount;
                this.setState({disguiseCount: disguiseCount});  // to update the render function
                const disguiseAddresses = lastEvent[0].returnValues.disguiseAddresses;
                const disguiseAddress = lastEvent[0].returnValues.disguiseAddresses[disguiseCount-1];
                console.log('...     2.storeDisguise.lastEvent, count =', disguiseCount,
                    ', disguise addresses', disguiseAddresses);

                /** @dev    build the array of options of features of this disguise to store it
                 * @dev     today we hard-code the features and their options to reduce blockchain storage
                 * @dev     when we'll be on IPFS, we'll use key-value pairs
                 */
                const {idxTopType, idxHatColor, idxAccessoriesType, idxHairColor, idxFacialHairType, idxFacialHairColor,
                    idxClotheType, idxClotheColor, idxEyeType, idxEyebrowType, idxMouthType, idxSkinColor} = this.props.idxDisguise;
                const disguise2store = [idxTopType, idxHatColor, idxAccessoriesType, idxHairColor, idxFacialHairType, idxFacialHairColor,
                    idxClotheType, idxClotheColor, idxEyeType, idxEyebrowType, idxMouthType, idxSkinColor];
                console.log('        2.storeDisguise.disguise2store =', disguise2store);
                /** Note: we could also make a single string of 24 characters with the 12 numbers by using string cat on
                const pad2 = (num) => String(num).padStart(2, '0');
                const disguise2store = pad2(idxTopType)+pad2(idxHatColor)+pad2(idxAccessoriesType) etc. */

                /** create with web3 a connection to the last pepitoDisguise (syntax of web3JS v1.x) */
                const pepitoDisguise = await new this.props.web3.eth.Contract(
                        PepitoDisguise.abi,
                        disguiseAddress,
                );
                /** @dev tell the PepitoDisguise contract to store the array of indexes of its features */
                await pepitoDisguise.methods.storeDisguise(disguise2store)
                    .send({from: this.props.web3.givenProvider.selectedAddress, gasPrice: gasPrice});

                /** @dev    return to App.js the count of disguises, their addresses & the disguise's options */
                this.setState({loading: false});  // to update the render function
                const disguiseCreated = true;
                this.props.deployedDisguise(disguiseCreated, disguiseCount, disguiseAddresses, disguise2store);
            }
            catch{
                const disguiseCreated = false;
                alert("Disguise creation failed. Increase gas price in Metamask popup");
                this.props.deployedDisguise(disguiseCreated, disguiseCount, disguiseAddresses, disguise2store);
            }
        } else alert("Please get first the blockchain interface & Pepito credentials");  
    }

    render() {
        return(
            <>
                <span>currently before storage: {this.props.disguiseCount} disguises</span> <br></br>
                <span>Hint: better not store twice the same disguise :)</span>
                <button className="btn btn-lg btn-secondary mb-5" 
                    onClick={this.storeDisguise}>Store disguise on blockchain
                </button>
                { this.state.loading ?
                    <div className="spinner">
                        <BounceLoader
                            color={'#6CEC7D'}
                            loading={this.state.loading}
                        />
                    </div>:
                    <span>, now... {this.state.disguiseCount}</span>
            }
            </>
        )
    }
}

export default DisguiseStore;