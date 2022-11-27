import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 25px;
  right: 20px;
  z-index: 25;
  display: none;

  @media (max-width: 992px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    //position: fixed;
  }
  @media (max-width: 378px) {
    //transform: translateY(-25px);
  }

  div {
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#333' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;


    &:nth-child(1) {
      width: 2rem;
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      width: 2rem;
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      width: 2rem;
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
    const [open, setOpen]=useState(false)
    return (
        <>
            <StyledBurger open={open} onClick={()=>setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <RightNav open={open}/>
        </>
    );
};

export default Burger;