import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class MessageCreate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            subject: '',
            textfield: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:3000/api/message", {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.props.updateWorkoutsArray()
                // this is where you would clear out the fields 
            })
    }

    render() {
        return (
            <div>
                <h3>Post a Message</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    {/* result */}
                    <FormGroup>
                        <Label for="result">Subject</Label>
                        <Input id="result" type="text" name="result" placeholder="enter result" onChange={this.handleChange} />
                    </FormGroup>
                    {/* description */}
                    <FormGroup>
                        <Label for="description">Message</Label>
                        <Input id="description" type="text" name="description" placeholder="enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default MessageCreate;