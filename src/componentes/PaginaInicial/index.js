import React, {useState} from "react";
import './estilo.css';

function PaginaInicial(){
    const[numeroAleatorio, setNumeroAleatorio] = useState(10);
    
    function gerarNumero(){
        const novoNumero = Math.floor(Math.random() * (100-1) + 1);
        setNumeroAleatorio(novoNumero);
    }

    return(
        <div className="container">
            <h1>Númeor aleatório</h1>
            <h2>{ numeroAleatorio }</h2>
            <div className="area-botao">
                <label>
                    Click para gerar um novo numero
                </label>
                <button onClick={gerarNumero}>
                    Gerar novo número
                </button>
            </div>
        </div>
    );
}

export default PaginaInicial;