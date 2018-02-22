import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Order, Chaos, Destruction, Death} from './ArmyBuilder2'


class WorkoutCreate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Order: false,
            Chaos: false,
            Destruction: false,
            Death: false
        };

        this.Allegiance = this.Allegiance.bind(this);

    }


    Allegiance(e) { 
        this.setState ({
            Order: false, 
            Chaos: false,
            Destruction: false,
            Death: false
        });
        if (e.target.value === "Order") {
            this.setState({ Order: true })
        } else if (e.target.value === "Chaos") {
            this.setState({Chaos: true})
        } else if (e.target.value === "Destruction") {
            this.setState({Destruction: true})
        } else if (e.target.value === "Death") {
            this.setState({Death: true})
        }
    }


    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1 className="text-center"> Build Your Army</h1><hr />
                    <div className="dropdown label">
                        <Label className="" for="AllegianceTypeDrop"><h2> Choose Your Allegiance</h2></Label>
                        <Input type="select" name="select" onChange={this.Allegiance} id="messageTypeDrop">
                            <option disabled selected>Choose Allegiance</option>
                            <option>Order</option>
                            <option>Chaos</option>
                            <option>Destruction</option>
                            <option>Death</option>
                        </Input>
                    </div>
                    {this.state.Order ? <Order />: null}
                    {this.state.Chaos ? <Chaos />: null}
                    {this.state.Destruction ? <Destruction />: null}
                    {this.state.Death ? <Death />: null}
                </div>
            </div>
        )
    }
}

export default WorkoutCreate;