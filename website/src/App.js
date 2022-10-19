import React from "react";
import './styles/styles.css';
import * as Mui from '@mui/material';
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import WhoAndWhat from "./components/Who&What";
import Howehelp from "./components/Howehelp"
import KeyObjective from "./components/KeyObjective";
import WhyChoose from "./components/WhyChoose";
import ItProvides from "./components/ItProvides";
import Resources from "./components/Resources";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";


const App = () =>{
    return(
        <div id="wrapper">
          <Navbar/>
          <Slider/>
          <Mui.Container>
            <WhoAndWhat/>
            <Howehelp/>
            <KeyObjective/>
            <WhyChoose/>
            <ItProvides/>
            <Resources/>
            <Contact/>
          </Mui.Container>
          <Footer/>
        </div>
    )
}

export default App;