import React from 'react';
import MessageCreate from './MessageCreate';
import { Container, Row, Col } from 'reactstrap';
import MessageTable from './MessageTable';

// this works with the current workout log server, if there server is on a differnt port, they need to change the respective lines for fetch

class MessageIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            workouts: []
        }

        this.fetchWorkouts = this.fetchWorkouts.bind(this);
        this.updateWorkoutsArray = this.updateWorkoutsArray.bind(this);
        this.workoutDelete = this.workoutDelete.bind(this);
    }

    componentWillMount(){
        this.fetchWorkouts()
    }

    fetchWorkouts(){
        fetch("http://localhost:3000/api/message", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
              })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({workouts: logData})
        })
    }

    updateWorkoutsArray(){
        this.fetchWorkouts()
    }

    workoutDelete(event){
        fetch("http://localhost:3000/api/message", {
            method: 'DELETE',
            body: JSON.stringify({log: {id:event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
              })
        })
        .then((res) => this.updateWorkoutsArray())
    }

    render() {
        const workouts = this.state.workouts.length >= 1 ? <MessageTable workouts={this.state.workouts} token={this.props.token} delete={this.workoutDelete}/> : <h2></h2> 

        return (
            <Container>
            <Row>
                <Col md="3">
                    <MessageCreate token = {this.props.token} updateWorkoutsArray={this.updateWorkoutsArray}/>
                </Col>
                <Col md="9">
                    {workouts}
                </Col>
            </Row>
        </Container>
        )
    }
}

export default MessageIndex