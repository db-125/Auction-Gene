import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';


const Header = () => {
  return (
   <MainHeader>
    <NavLink to='/'>
     <img src="../images/logo1.png"  alt="logo1" height={125} width={125}  />
    </NavLink>
    <Navbar/>
   </MainHeader>
  )
};

const MainHeader = styled.header`
  padding: 0 3.5rem;
  height: 12rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;

export default Header;
