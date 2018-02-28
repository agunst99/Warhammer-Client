import React from 'react';
import Allegiance from './Allegiance';
import { Container, Row, Col } from 'reactstrap';
import ArmyTable from './ArmyTable';

class ArmyIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            allegiance: "",
            totalPoints: "",
            units: "",
            hero: ""

        }
        this.changeArmyState = this.changeArmyState.bind(this);
        
    }
    changeArmyState(e) {
        // console.log(data)
        // console.log(typeof [`${Object.keys(data)[0].toString()}`])
        // console.log(Object.values(data)[0])
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })

        
    }
    
    render() {
        // const workouts = this.state.workouts.length >= 1 ? <ArmyTable workouts={this.state.workouts} token={this.props.token} delete={this.workoutDelete} /> : <h2></h2>
        
        console.log(this.state)
        return (

            <Container>
                <Row>

                    <Col md="3">
                        <Allegiance changeArmy={this.changeArmyState} token={this.props.token} />
                    </Col>
                    <Col md="9">
                   <ArmyTable yourArmy={this.state}/>
                    </Col>

                </Row>
            </Container>

        )
    }
}

export default ArmyIndex