import React from "react";
import './styles.css'
import Logo from '../../assets/logo.jpg'

function Footer() {
    return (
        <footer>
         <img id="logo" src={Logo} />
        <span>Todos os direitos reservados ©</span>
        <span>Desenvolvido por: Adan Lucas</span>
        </footer>
    )
}

export default Footer;