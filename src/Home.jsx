import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
import { Button } from "../src/styles/Button";

const Home = () => {
  return <Wrapper>
        <div className="container grid grid-two-column">
        <div className="section-hero-data">
        <p className="hero-top-data">Hi Bidders</p>
        <h1 className="hero-heading">Auction Gene</h1>
        <p className="hero-para">
          Welcome to Auction Gene - one stop for all bidder
        </p>
        <Button className="btn hireme-btn">
            <NavLink to="/services"> Services </NavLink>
          </Button>
        </div>

        <div className="section-hero-image"></div>
        </div>
  </Wrapper>
};
const Wrapper = styled.section`
`;
export default Home;
