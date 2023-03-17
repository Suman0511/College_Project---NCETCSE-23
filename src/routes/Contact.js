import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Navpic from "../components/Navpic";
import Query from "../components/Query";
import Organ from "../components/Organisation ";

function Contact(){
    return(
        <>
        <Navpic/>
        <Navbar />
        <Hero/>
        <Organ/>
        <Global/>
        <Query/>
        <Footer/>
        </>
    );
}

export default Contact;