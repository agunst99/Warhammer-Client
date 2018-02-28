import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';


export class Order extends Component {

    render() {
        return (

        <div className="main">
            <div className="dropdown1">
                <Label for="hero"><h3>Heroes</h3></Label>
                <Input onChange={this.props.changeArmy} className="input" type="select" name="hero" id="hero" placeholder="Select Hero">
                    <option disabled selected>Select Hero(es)</option>
                    <option onClick={this.props.changeArmy} name="totalPoints">Lord</option>
                    <option>Officer</option>
                </Input>
            </div>
            <div className="dropdown2">
                <Label for="unit"><h3>Units</h3></Label>
                <Input onChange={this.props.changeArmy} className="input" type="select" name="units" id="unit">
                <option disabled selected>Select Unit(s)</option>
                    <option>Fulminator</option>
                    <option>Judicator</option>
                </Input>
            </div>
        </div>
                )
    }
}

export class Chaos extends Component {

    render() {
        return (

            <div className="main">
            <div className="dropdown1">
                <Label for="hero"><h3>Heroes</h3></Label>
                <Input onChange={this.props.changeArmy} className="input" type="select" name="hero" id="hero">
                <option disabled selected>Select Hero(es)</option>
                    <option>Daemon Prince</option>
                    <option>Archaon</option>
                </Input>
            </div>
            <div className="dropdown2">
                <Label for="unit"><h3>Units</h3></Label>
                <Input onChange={this.props.changeArmy} className="input" type="select" name="units" id="unit">
                <option disabled selected>Select Unit(s)</option>
                    <option>Gors</option>
                    <option>Chaos Warriors</option>
                </Input>
            </div>
        </div>

                )
    }
}

export class Destruction extends Component {

    render() {
        return (

            <div className="main">
            <div className="dropdown1">
                <Label for="hero"><h3>Heroes</h3></Label>
                <Input onChange={this.props.changeArmy} className="input" type="select" name="hero" id="hero">
                <option disabled selected>Select Hero(es)</option>
                    <option>Megaboss</option>
                    <option>Grot Shaman</option>
                </Input>
            </div>
            <div className="dropdown2">
                <Label for="unit"><h3>Units</h3></Label>
                <Input onChange={this.props.changeArmy} className="input" type="select" name="unit" id="unit">
                <option disabled selected>Select Unit(s)</option>
                    <option>Black Orcs</option>
                    <option>Grots</option>
                </Input>
            </div>
        </div>

                )
    }
}

export class Death extends Component {

    render() {
        return (

            <div className="main">
            <div className="dropdown1">
                <Label for="hero"><h3>Heroes</h3></Label>
                <Input onChange={this.props.changeArmy} className="input" type="select" name="hero" id="hero">
                <option disabled selected>Select Hero(es)</option>
                    <option>Vampire Lord</option>
                    <option>Necromancer</option>
                </Input>
            </div>
            <div className="dropdown2">
                <Label for="unit"><h3>Units</h3></Label>
                <Input onChange={this.props.changeArmy} className="input" type="select" name="unit" id="unit">
                <option disabled selected>Select Unit(s)</option>
                    <option>Blood Knights</option>
                    <option>Archai</option>
                </Input>
            </div>
        </div>

                )
    }
}