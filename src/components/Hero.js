import "./Hero.css";

const PICIMAGE = new URL("../asserts/front view (1).jpg",import.meta.url)
function Hero(){
    return(
        <>
       <div className="Inner-hero">
       <div className="hero">
        <img src={PICIMAGE} alt=""/>
        <div className="hero-text">
        <div className="col-md-6">
         <div className="banner_taital_main">
             <h1 className="banner_taital">NCETCSE-23</h1>
                <p className="banner_text">NATIONAL CONFERENCE ON EMERGING TECHNOLOGIES <br/> IN <br/>COMPUTER SCIENCE AND ENGINEERING</p>
                    <div className="started_bt"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfmrCE3d0HfhMhd4NWdZPtHX5TbpLiHan2gSJOyJs5BAOBXbw/viewform">REgistration</a></div>
                         </div>
                         </div> 
        </div>
        
        
            </div>
       </div>
        </>
    );
}

export default Hero;