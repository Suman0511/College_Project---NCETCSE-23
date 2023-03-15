import React from "react-router-dom";
import "./Footer.css";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                <a href="/"><i className="fa-brands fa-square-facebook"></i></a>
            <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
            <a href="/"><i className="fa-brands fa-twitter-square"></i></a>
                </div>
            </div> 

            <div className="bottom">
                <div>
                <h4><a href="home">Home</a></h4>
                </div>
                <div>
                <h4><a href="tracks">Tracks</a></h4>
                </div>
                <div>
                <h4><a href="registration">Registration</a></h4>
                </div>
                <div>
                <h4><a href="contact">Contact</a></h4>
                </div> 
            </div>
            
            <div className="link">
            <div><h4><a href="/">Developers</a></h4> </div>
            <h4><a href="/">Suman Kumari</a></h4>
            <h4><a href="/">Sukhvinder</a></h4>               
            </div>

            <div className="copyright">
                <h4>&copy;Right. All Rights Reserved</h4>
            </div>
        </div>
    )
}

export default Footer;