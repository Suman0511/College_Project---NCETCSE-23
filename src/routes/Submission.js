import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Navpic from "../components/Navpic";
import Submit from "../components/Submit";
import Query from "../components/Query";



function Submission(){
    return(
        <>
        <Navpic/>
        <Navbar />
        <Hero/>
        <Submit/>
        <Global/>
        <Query/>
        <Footer/>
        </>
    ); 
}

export default Submission;