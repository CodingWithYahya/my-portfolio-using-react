import "./FooterStyles.css"
import React from 'react'
import { FaDiscord, FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
 
 const Foorter = () => {
   return (
     <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color : "#fff" , marginRight : "2rem" }}/>
                    <div>
                      <p>123 , Massira 2 , Marrakesh</p>
                      <p>Morocco</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{ color : "#fff" , marginRight : "2rem" }}/> 06 33 15 02 20 </h4>
                </div>
                <div className="email">
                  <h4><FaMailBulk size={20} style={{ color : "#fff" , marginRight : "2rem" }}/> quazbari.yahya@gmail.com </h4>
                </div>
            </div>
            <div className="right">
              <h4>About me and the company ... </h4>
              <p>
                This is me Yahya . CEO & Founder of Tech2etc , And this is my Portfolio :)  
              </p>
              <div className="social">
                <FaFacebook
                  size={30}
                  style={{ color: "#fff" , marginRight: "1rem" }}
                />
                <FaTwitter
                  size={30}
                  style={{ color: "#fff" , marginRight: "1rem" }}
                />
                <FaDiscord
                  size={30}
                  style={{ color: "#fff" , marginRight: "1rem" }}
                />
                <FaLinkedin
                size={30}
                style={{ color: "#fff" , marginRight: "1rem" }}
              />
              </div>
            </div>
        </div>
     </div>
   )
 }
 
 export default Foorter