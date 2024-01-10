import React, { lazy, Suspense } from "react"
import Header from "../Header/header";
import './styles.css';
import video from '../../assets/video.mp4';
import Cards from "../cards/cards";
import Footer from "../footer/footer";

function Home() {
    return(
        <>
             <Header />
             <div id="banner"></div>
             <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={video} />
                        Seu navegador não possui suporte para vídeos
                    </video>
                    <div id="sinopse">
                    <p className="description">
                        Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas 
                        mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece
                        como a personificação da vingança para a população.
                    </p>
                    <button className="button">Comprar Ingresso</button>
                </div>
                </div>  
            </div>
            <Cards />   
            <Footer />
        </>
       
    )
       
}

export default Home;