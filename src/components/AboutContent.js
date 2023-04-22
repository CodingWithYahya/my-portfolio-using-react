import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.webp"
import React from 'react'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left" >
                <h1>Who Am I ?</h1>
                <p>😎 Je suis étudiant en informatique avec une passion pour le développement de logiciels et les réseaux. Je suis compétent en programmation, en conception de logiciels, ainsi qu'en gestion et en configuration de réseaux.
                    <br />⚡ Je suis un apprenant rapide qui reste à jour avec les dernières tendances et technologies en matière de développement et de réseaux. Je suis également un joueur d'équipe et un contributeur à des projets open-source.
                    <br />📧 N'hésitez pas à me contacter par e-mail ou à me trouver sur LinkedIn.
                    <br />
                    📫 How to reach me quazbari.yahya@gmail.com Or LinkedIn
                </p>
                <Link to="/contact" >
                    <button className="btn" >Contactez-moi</button>
                </Link>

            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={react1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={react2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent