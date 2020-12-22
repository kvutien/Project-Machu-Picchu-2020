import React, { Component } from 'react';	// from node.js module
import './App.css'; 	// specific
import Avatar from 'avataaars'; 	// from node.js module
import { BounceLoader } from 'react-spinners'; 	// from node.js module
import Iframe from 'react-iframe'; 	// from node.js module

/**
 * @author Vu Tien Khang
 * @notice React component for pepito frontend
 * @dev derived from random-avatar but without the blockchain request of random number
 * @dev still in /random-avatar/src/
 * @dev to be moved for tests to /Machu-Picchu/Pepito/client/src/ once the React frontend is generated
 */
class App extends Component {

  constructor() {
    super()	//ES6 class constructors MUST call super if they are subclasses
    this.state = {};	//state holds variables of the component App
    this.options = {	//disguise options to react-select
      topType: ['Eyepatch', 'Hat', 'Hijab', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairMiaWallace', 'LongHairNotTooLong', 'LongHairShavedSides', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 'NoHair', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggy', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4'],
      hatColor: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
      accessoriesType: ['Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'],
      hairColor: ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'PastelPink', 'Platinum', 'Red', 'SilverGray'],
      facialHairType: ['BeardLight', 'BeardMagestic', 'BeardMedium', 'Blank', 'MoustacheFancy', 'MoustacheMagnum'],
      clotheType: ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Graphics', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'],
      clotheColor: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
      eyeType: ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'],
      eyebrowType: ['Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 'FrownNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural', 'UpDown', 'UpDownNatural'],
      mouthType: ['Concerned', 'Default', 'Disbelief','Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit'],
      skinColor: ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black']
    }
    this.state.loading = false;
  }

  componentDidMount() {	//React hook that runs after the first render() lifecycle
    var getRandomValues = require("get-random-values");	// import JS random generator from npm
    var array = new Uint32Array(2);
    array = getRandomValues(array); 	// fill array with random numbers
    /// @dev end of section random generator to be tested
    let randomBigNumber = array[0]; 	// use 1st random number in the array
    this.setState({
        loading: true,
        randomBigNumber: randomBigNumber	// for use directly by getData()
    } 
    ,() => {
      this.getData();
    });
    /** @dev this.getData() is put inside the asynchronous function setState()	*/
    /** @dev use random number in state to choose disguise options from arrays of options */
  }

  async requestRandomNumber() {
      /** 
      * @dev from stackOverflow, to be refined and tested
      */
      var getRandomValues = require("get-random-values");	// import JS random generator from npm
      var array = new Uint32Array(10);
      getRandomValues(array); 	// fill array with random numbers
      /// @dev end of section random generator to be tested
      let randomBigNumber = array[0]; 	// use 1st random number in the array
      this.setState({
          loading: true,
          randomBigNumber: randomBigNumber	// for use directly by getData()
      }
      ,() => {
        this.getData();
      });
    }

  render() {	/** @dev React main display renderer */
    /** @dev retrieve pepito disguise options from this.state */
    const {topType, hatColor, accessoriesType, hairColor, facialHairType, clotheType, clotheColor, eyeType, eyebrowType, mouthType, skinColor} = this.state;
    return (
      <div className="container text-center">
      {this.state.error ? 	// if error is true
        <div className="alert alert-danger m-5" role="alert">
          Please check if Metamask is enabled and connected to the correct network
        </div>:<div></div>	// if error is false
      }
        <header>
          <h1 className="m-5">Random Pepito Disguise <sup>not on blockchain</sup></h1>
        </header>
        <div>
          <button className="btn btn-lg btn-secondary mb-5" onClick={this.requestRandomNumber.bind(this)}>Get random disguise!</button>
          <img src="./machupicchu_logo.png" alt="Machu-Picchu" width="100" height="100" />
        </div>
        { this.state.loading ?
          <div className="spinner">	{/* if loading is true, waiting for random response */}
            <BounceLoader
              color={'#6c757d'}
              loading={this.state.loading}
            />
          </div>:	// else no more waiting, random response is returned
          <div className="avatar">
            <Avatar
              style={{width: '400px', height: '400px'}}
              avatarStyle='Circle'
              topType={topType}
              hatColor={hatColor}
              accessoriesType={accessoriesType}
              hairColor={hairColor}
              facialHairType={facialHairType}
              clotheType={clotheType}
              clotheColor={clotheColor}
              eyeType={eyeType}
              eyebrowType={eyebrowType}
              mouthType={mouthType}
              skinColor={skinColor}
            />
          </div>
        }
                
      </div>
    );
  }

    async getData() {
      /**
       * @dev set the disguise state options
       */
        let randomBigNumber = this.state.randomBigNumber;	// read random number set in state by requestRandomNumber()
        console.log("getData randomBigNumber", randomBigNumber, randomBigNumber % Object.values(this.options.topType).length);
        this.setState({   //random number --> position of the option in the array of options
          topType: this.options.topType[randomBigNumber % Object.values(this.options.topType).length],
          hatColor: this.options.hatColor[randomBigNumber % Object.values(this.options.hatColor).length],
          accessoriesType: this.options.accessoriesType[randomBigNumber % Object.values(this.options.accessoriesType).length],
          hairColor: this.options.hairColor[randomBigNumber % Object.values(this.options.hairColor).length],
          facialHairType: this.options.facialHairType[randomBigNumber % Object.values(this.options.facialHairType).length],
          clotheType: this.options.clotheType[randomBigNumber % Object.values(this.options.clotheType).length],
          clotheColor: this.options.clotheColor[randomBigNumber % Object.values(this.options.clotheColor).length],
          eyeType: this.options.eyeType[randomBigNumber % Object.values(this.options.eyeType).length],
          eyebrowType: this.options.eyebrowType[randomBigNumber % Object.values(this.options.eyebrowType).length],
          mouthType: this.options.mouthType[randomBigNumber % Object.values(this.options.mouthType).length],
          skinColor: this.options.skinColor[randomBigNumber % Object.values(this.options.skinColor).length],
            loading: false
        }
        ,() => {
          console.log("topType:", this.state.topType, ", hatColor:", this.state.hatColor, ", accessoriesType:", this.state.accessoriesType);
          console.log("hairColor:", this.state.hairColor, ", facialHairType:", this.state.facialHairType, ", clotheType:", this.state.clotheType);
          console.log("clotheColor:", this.state.clotheColor, ", eyeType:", this.state.eyeType, ", eyebrowType:", this.state.eyebrowType);
          console.log("mouthType:", this.state.mouthType, ", skinColor:", this.state.skinColor);
        });    
    }
}

export default App;
