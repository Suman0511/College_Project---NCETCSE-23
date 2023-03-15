import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Navpic from "../components/Navpic";
import Paper from "../components/Paper";
import Query from "../components/Query";

function Call_for_Paper(){
    return(
        <>
        <Navpic/>
        <Navbar />
        <Hero /> 
        <Paper/>
        <Global/>
        <Query/>
        <Footer/>
        </>
    );
}

export default Call_for_Paper;