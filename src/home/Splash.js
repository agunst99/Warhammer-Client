import React, { Component } from 'react';
import ArmyIndex from '../army/ArmyIndex';


class Splash extends Component{

    render(){
        return (
            <div>
                <ArmyIndex token={this.props.sessionToken}/>
            </div>
        )
    }
}

export default Splash;