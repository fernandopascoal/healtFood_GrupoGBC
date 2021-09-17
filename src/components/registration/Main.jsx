import React from "react";

import registerImg from "../../imagens/registration_img.png"
import "./styles/main.css"

function Main() {

    let date = new Date
    let month = ["01", "02", "03", "04", "05", "06", "07", "06", "09", "10", "11", "12"][date.getMonth()]
    let today = `${date.getFullYear()}-${month}-${date.getDate()}`


    return(
        <main className="main">
            
            <div className="form">
                <form action="" className="user-form">
                    <div className="form-container">
                        <label htmlFor="" className="user-label">Name: </label>
                        <input type="text" name="user_name" id="user_name" className="user-input" required/>
                    </div>
                    <div className="form-container">
                        <label htmlFor="" className="user-label">Birth: </label>
                        <input type="date" name="user_birth" id="user_birth" max={today} className="user-input"/>
                    </div>
                    
                    <div className="form-container">
                        <label htmlFor="" className="user-label">CPF: </label>
                        <input type="text" name="" id="" className="user-input" />
                    </div>
                    <div className="form-container">
                        <label htmlFor="" className="user-label">CEP: </label>
                        <input className="user-input"/>
                    </div>
                    <div className="form-container">
                        <label htmlFor="" className="user-label">Address: </label>
                        <input type="text" className="user-input"/>
                    </div>
                    <div className="form-container">
                        <label htmlFor="" className="user-label">State: </label>
                        <input type="text" className="user-input"/>
                    </div>
                    <div className="form-container">
                        <label htmlFor="" className="user-label">Country: </label> 
                        <input type="text" className="user-input"/> 
                    </div>
                    <div className="form-container">
                        <button className="btn">Register</button>
                    </div>
                </form>         
            </div>
            <div className="registerImg">
                <img src={registerImg} alt="" id="image"/>
            </div>
        </main>
    )
}

export default Main