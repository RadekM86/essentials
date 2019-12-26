import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Counter from '../../../components/Counter'

const CounterContainer = ({children, count}) =>  {
    return (
        <Fragment>
            <Counter counter={count}/>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps, {})(CounterContainer)