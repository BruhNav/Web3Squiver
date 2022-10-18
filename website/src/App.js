import React from "react";
import * as Mui from '@mui/material';
import './styles/styles.css';
import './styles/sliderstyles.css'
import './styles/divbox.css'
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import WhoAndWhat from "./components/Who&What";
import Howehelp from "./components/Howehelp"
import KeyObjective from "./components/KeyObjective";
import WhyChoose from "./components/WhyChoose";
import './styles/whychoose.css';
import './styles/newswiper.css';
import ItProvides from "./components/ItProvides";
import Resources from "./components/Resources";
import './styles/newsbox.css'
import Contact from "./components/ContactUs";
import './styles/contact.css'
import Footer from "./components/Footer";
import './styles/footer.css';


const App = () =>{
    return(
        <div >
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