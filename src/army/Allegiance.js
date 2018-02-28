import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Order, Chaos, Destruction, Death } from './ArmyBuilder'


class Allegiance extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Order: false,
            Chaos: false,
            Destruction: false,
            Death: false
        };

        this.Allegiance = this.Allegiance.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Prelog Info', this.state)

        fetch("http://localhost:3000/api/army", {
            method: 'POST',
            body: JSON.stringify({ army: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((armyData) => {
                this.props.updateWorkoutsArray()
                // this is where you would clear out the fields 
            })
    }

    Allegiance(e) {
        this.setState({

            Order: false,
            Chaos: false,
            Destruction: false,
            Death: false
        });
        this.props.changeArmy(e)
        if (e.target.value === "Order") {
            this.setState({ Order: true })
        } else if (e.target.value === "Chaos") {
            this.setState({ Chaos: true })
        } else if (e.target.value === "Destruction") {
            this.setState({ Destruction: true })
        } else if (e.target.value === "Death") {
            this.setState({ Death: true })
        }
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <Form onSubmit={this.handleSubmit} >
                        <h1 className="text-center"> Build Your Army</h1><hr />
                        <FormGroup className="dropdown label">
                            <Label className="" for="AllegianceTypeDrop"><h2> Choose Your Allegiance</h2></Label>
                            <Input type="select" name="allegiance" onChange={this.Allegiance} id="Allegiance">
                                <option disabled selected>Choose Allegiance</option>
                                <option>Order</option>
                                <option>Chaos</option>
                                <option>Destruction</option>
                                <option>Death</option>
                            </Input>
                        </FormGroup>
                        {this.state.Order ? <Order changeArmy={this.props.changeArmy} /> : null}
                        {this.state.Chaos ? <Chaos changeArmy={this.props.changeArmy}/> : null}
                        {this.state.Destruction ? <Destruction changeArmy={this.props.changeArmy}/> : null}
                        {this.state.Death ? <Death changeArmy={this.props.changeArmy}/> : null}
                    </Form>
                </div>
            </div>
        )
    }
}

export default Allegiance;