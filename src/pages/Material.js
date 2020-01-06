import React from 'react';
import Button from '@material-ui/core/Button';
import Chart from '../components/Chart';

export default function Material() {
    return (
        <div style={{height: "200px", width: "500px", marginLeft: "50px"}}>
            <Chart />
            <Button variant="contained" >Button</Button>
        </div>
    )
}
