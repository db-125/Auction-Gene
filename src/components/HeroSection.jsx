import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = () => {
  return (

  <Wrapper>
        <div className="container grid grid-two-column">
        <div className="section-hero-data">
        <p className="hero-top-data">Hi Bidders</p>
        <h1 className="hero-heading">Auction Gene</h1>
        <p className="hero-para">
          Welcome to Auction Gene - one stop for all bidderhbfdssssssj
          dhjsfbedjbsbrsjvbzdfbujgbejvvrsjbgvursjhguzbdv

        </p>
        <Button className="btn hireme-btn">
            <NavLink to="/services"> Services </NavLink>
          </Button>
        </div>
             {/*Image*/}
        <div className="section-hero-image">
        <picture>
            <img src="./images/homepage.jpg" alt="hero image" className="hero-img "  />
          </picture>
         </div>
        </div>
        
  </Wrapper>

  );
};
const Wrapper = styled.section`

padding: 3rem 0;
.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn {
  max-width: 14rem;
}
.hero-top-data {
  text-transform: uppercase;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1.5rem;
  
  color: ${({ theme }) => theme.colors.helper};
  
}
.hero-heading {
  text-transform: uppercase;
  font-size: 5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.hero-para {
  margin-top: 0.7rem;
  margin-bottom: 2rem;
  max-width: 40rem;
}
.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
picture {
  text-align: center;
  margin-top: 6rem;
 margin-left:auto;
}
.hero-img {
  max-width: 60%;
  
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
}

   `;



export default HeroSection;
