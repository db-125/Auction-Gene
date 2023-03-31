import React from 'react';
import AboutUs from './AboutUs';
import Home from './Home';
import Services from './Services';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {ThemeProvider} from 'styled-components'
import { GlobalStyles } from './Globalstyle';

const App = () => {

  const theme = {
    colors:{
      heading:"#00DDFF",
      text:"#00DDFF",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      bg:"#fff5d7",
      footer_bg:"#0a1435",
      btn:"rgb(98 84 243)",
      border:"rgba(98,84,243,0.5)",
      hr:"#ffffff",
      gradient:
       "linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
      shadow:
       "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      ShadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px",
    },

  media: { mobile:"768px", tab:"998px" },
 
  }


  return (

    <ThemeProvider theme={theme}>
      <GlobalStyles/>
   <BrowserRouter>

     <Header />
       
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/services" element={<Services/>}/>
     </Routes>
 
     <Footer />

   </BrowserRouter>
   </ThemeProvider>
  );
};

export default App;