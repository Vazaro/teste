import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles.css';
import Logo from '../../assets/logo.jpg';

function Header(){
  
    return(
        <header>
            <img id="logo" src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'> 
                        <li>Home</li>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li>Contato</li>
                    </Link>
                    
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Fotos</li> 
                    </Link> 
                      <li>Comentários</li>
                </ul>
            </nav>
        </header>
    )

}


export default Header;