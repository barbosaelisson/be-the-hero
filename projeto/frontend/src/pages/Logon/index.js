import React from 'react';
import { Link } from 'react-router-dom';


import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){

    return(
        <div className="logon-container">
            <section className="form">
            <img src={logoImg}   alt="Be The Hero"  />


            <form>

                <h1>Faça seu Login</h1>


                <input placeholder="Sua ID"/>  
                <button className="button" type="submit" > ENTRAR</button>

                <Link  className="back-link" to="register">
                    <FiLogIn size={16} color="#E02041"   />
                      Não tenho cadastro
                </Link>


            </form>
           </section>

           <img src={heroesImg}   alt="Heroes"  />
        </div>    
        
    );
}

