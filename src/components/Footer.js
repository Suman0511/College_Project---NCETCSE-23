import React from "react";
import {Link} from "react-router-dom"
import "./Footer.css";
import {BsLinkedin,BsInstagram,BsGithub} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <a href="/">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>
            <a href="home">Home</a>
          </h4>
        </div>
        <div>
          <h4>
            <a href="tracks">Tracks</a>
          </h4>
        </div>
        <div>
          <h4>
            <a href="registration">Registration</a>
          </h4>
        </div>
        <div>
          <h4>
            <a href="contact">Contact</a>
          </h4>
        </div>
      </div>

        <h3>Developers</h3>
      <div className="link">
        <div className="link1">
            <h4>Suman Kumari</h4>
            <div className="social-links">
                <Link to=""><BsLinkedin size={25}/></Link>
                <Link to=""><BsInstagram size={25}/></Link>
                <Link to=""><BsGithub size={25}/></Link>
            </div>
        </div>
        <div className="link1">
            <h4>Sukhvindra Singh</h4>
            <div className="social-links">
                <Link to="https://www.linkedin.com/in/sukhvindra-singh-42b3b3219/"><BsLinkedin size={25}/></Link>
                <Link to="https://www.instagram.com/coder0208/"><BsInstagram size={25}/></Link>
                <Link to="https://github.com/Sukhvindra9643/"><BsGithub size={25}/></Link>
            </div>
        </div>
      </div>

      <div className="copyright">
        <h4>&copy;Right. All Rights Reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
