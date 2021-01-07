/**  class DisguiseControls - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice dispatch the user actions regarding the disguises
*/
import React from 'react';
import Disguise from './Disguise';
import MakePepito from './MakePepito';
import  './App.css';
import DisguiseStore from './DisguiseStore';
import DisguiseRetrieve from './DisguiseRetrieve';

class DisguiseControls extends React.Component {
    render() {
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th rowSpan="4"><img src="./machupicchu_logo.png" alt="Machu-Picchu" width="130" height="130" /></th>
                            <td>
                                <Disguise setDisguise={this.props.setDisguise}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <MakePepito connectedB={this.props.connectedB}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <DisguiseStore />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <DisguiseRetrieve retrievedDisguise={this.props.retrievedDisguise} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">Pepito Address...--&gt;{/*this.state.pepitoAddress*/}</td>
                        </tr>
                        <tr>
                            <td colSpan="2"><a href='https://ibisa.users.earthengine.app/view/mcgyver3' target='_blank'
                            className='btn btn-lg btn-secondary mb-5'
                            rel='noreferrer no opener'>Earth Observation Easter Egg</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
};

export default DisguiseControls;