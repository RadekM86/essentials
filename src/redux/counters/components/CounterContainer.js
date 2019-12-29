import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import Counter from '../../../components/Counter';
import Card from '../../../components/Card';
import { withRouter } from 'react-router-dom';

const StyledButton = styled.button`
    background-color: ${({theme}) => theme.colors.accent};
    padding: 8px 16px;
    border-radius: 24px;
    font-size: 1.2em;
    border: none;
    outline: none;
    position: absolute;
    bottom: 40px;
    right: 16px;
    color: ${({theme}) => theme.colors.buttonText};

    :hover{
        box-shadow: inset 2px 2px 4px ${({theme}) => theme.colors.shadow}
    }
`;

function Button(props) {
    const {resetCount, children} = props;
    const resetClick = () => {
        resetCount()
    }
    return (
        <StyledButton onClick={resetClick}>
            {children}
        </StyledButton>
    )
}


const CounterContainer = ({children, count, resetCount}) =>  {
    const colorSwitch = () => {
        if (count < -20 ) {
            return "navy"
        }
        if( count > 30 ) {
            return "critical"
        }
        if (count > 20 && count < 30) {
            return "negative"
        } 
        if (count > 10 && count <= 20) {
            return "warning"
        }
        if (count > 0) {
            return "positive"
        } 
        else {
            return "cold"
        }
    }
    return (
        <Card 
            content={<Counter counter={count}/>}
            color={colorSwitch()}
            description="Increment Counter"
        >
            <Button resetCount={resetCount}>Reset</Button>
        </Card>
    )
}

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    resetCount: () => dispatch(actions.resetCount())
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterContainer))