import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.textColor};
    text-decoration: none;
    font-weight: 700;
    position: relative;
    :active {
        color: ${({theme}) => theme.colors.accent};
    }

    & > hr {
        width: 0;
        position: absolute;
        border-style: none;
        border-bottom: solid 3px transparent;
        transition: all 0.4s ease;
        bottom: -3px;
    }

    & > hr.underline {
        width: 100%;
        border-style: none;
        border-bottom: solid 3px ${({theme}) => theme.colors.accent}
    }
`;

class NavigationLink extends Component {
    render() {
        const { children, location, to } = this.props;
        return (
            <StyledLink {...this.props}>
                {children}
                <hr className={to === location.pathname ? "underline" : ""}/>
            </StyledLink>
        )
    }
}

export default withRouter(props => <NavigationLink {...props} />)