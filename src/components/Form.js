import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Votre Nom</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Sujet</label>
            <input type="text"></input>
            <label>Message</label>
            <input type="text"></input>
            <textarea rows="6" placeholder="Taper votre message ici !" />
            <button className="btn" >Envoyer</button>
        </form>    
    </div>
  )
}

export default Form