import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Navpic from "../components/Navpic";
import Query from "../components/Query";

function Contact(){
    return(
        <>
        <Navpic/>
        <Navbar />
        <Hero/>
        <Global/>
        <Query/>
        <Footer/>
        </>
    );
}

export default Contact;