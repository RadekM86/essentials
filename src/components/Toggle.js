import React from 'react';
import styled from 'styled-components';

export default function Toggle(props) {
    return (
        <ToggleWrapper>
            <StyledToggle id="checkbox" type="checkbox" onClick={props.onClick}/>
            <ToggleLabel htmlFor="checkbox" />
        </ToggleWrapper>
    );
  };
  
  const ToggleWrapper = styled.div`
    position: relative;
    font-size: .75em;
    text-align: center;
    vertical-align: center;
    font-weight: 900;
    color: ${({theme}) => theme.colors.accent};
  `;
  const ToggleLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 22px;
    border-radius: 16px;
    background: 'transparent';
    box-shadow: inset -2px -2px 4px ${({theme})=>theme.colors.specular}, 
        inset 4px 4px 4px ${({theme})=>theme.colors.shadow};
    cursor: pointer;
    &::after {
      content: "☾";
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin: 3px;
      background: ${({theme}) => theme.colors.buttonText};
      transition: 0.2s ease;
      line-height:16px;
    }
  `;
  const StyledToggle = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 16px;
    width: 40px;
    height: 24px;
    &:checked + ${ToggleLabel} {
      background-color: ${({theme}) => theme.colors.accent};
      &::after {
        content: "✹";
        display: block;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        margin-left: 20px;
        transition: 0.2s ease;
        line-height:16px;
      }
    }
  `;
  