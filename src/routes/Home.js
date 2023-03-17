import Destination from "../components/Destination";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Navpic from "../components/Navpic";
import Query from "../components/Query";
import Organ from "../components/Organisation ";

function Home(){
    return(
        <>
        <Navpic/>
        <Navbar />
        <Hero/>
        <Organ/>
        <Destination/>
        <Global/>
        <Query/>
       <Footer/> 
        </>
    );
}

export default Home;