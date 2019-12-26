import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Counter from '../../../components/Counter'
import Card from '../../../components/Card'

const CounterContainer = ({children, count}) =>  {
    const colorSwitch = () => {
        if (count > 30) {
            return "negative"
        } else if (count > 10 && count <= 30) {
            return "warning"
        } else if (count > 0) {
            return "positive"
        } else {
            return "cold"
        }
    }
    return (
        <Card 
            content={<Counter counter={count}/>}
            color={colorSwitch()}
            description="Increment Counter"
        />
    )
}

const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps, {})(CounterContainer)