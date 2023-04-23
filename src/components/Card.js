import { Link } from "react-router-dom";
import "./CardStyles.css";

import React from 'react'

const Card = () => {
    return (
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>Doctorat, Informatique</h3>
                    <span className="bar"></span>
                    <p className="btc">Université Cadi Ayyad</p>
                    <span className="bar"></span>
                    <p>2025-2028</p>
                    <p>tha was just' an example :</p>
                    <p>sans commentaire</p>
                    <Link to="/about" className="btn" >savoir encore</Link>
                </div>

                <div className="card">
                    <h3>Ingénieur d'Etat, Informatique</h3>
                    <span className="bar"></span>
                    <p className="btc">L'École Marocaine des Sciences de l’ingénieure, EMSI,</p>
                    <span className="bar"></span>
                    <p>2020-2025</p>
                    <p>sans commentaire</p>
                    <Link to="/about" className="btn" >savoir encore</Link>
                </div>

                <div className="card">
                    <h3>BAC - Science Physique Session Francaise </h3>
                    <span className="bar"></span>
                    <p className="btc">Lycée Mohamed VI, Marrakech</p>
                    <span className="bar"></span>
                    <p>0000-0000</p>
                    <p> sans </p>
                    <Link to="/about" className="btn" >savoir encore</Link>
                </div>
            </div>
        </div>
    )
}

export default Card