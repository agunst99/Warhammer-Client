import React from 'react';
import { Table, Button } from 'reactstrap';


const WorkoutTable = (props) => {
console.log(props.yourArmy.allegiance)
    return (
        
        <div>
            <h3>Your Army</h3>
            <hr />
            <Table hover striped>
                <thead>
                    <tr>
                        
                        <th>Allegiance</th>
                        <th>Hero</th>
                        <th>Units</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.yourArmy.allegiance}</td>
                        <td>{props.yourArmy.hero}</td>
                        <td>{props.yourArmy.units}</td>
                    </tr>









                </tbody>
            </Table>
        </div>
    );
}

export default WorkoutTable;