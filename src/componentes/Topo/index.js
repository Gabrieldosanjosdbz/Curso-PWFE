import React from "react";
import "./estilo.css"
import {Link} from "react-router-dom"

function Topo() {
    return(
        <header className="topo">

            <div className="topo-conteudo">

            <Link className="topo-logo-box" to="/">
                <img className="topo-logo" src="../img/dente.png" alt="logo da clínica" />
                <p className="topo-nome-empresa">Dentes Saudáveis</p>
            </Link>

            <nav className="topo-links">
                <Link className="topo-link" to="/">HOME</Link>
                <Link className="topo-link" to="/contato">CONTATO</Link>
            </nav>

            </div>
        </header>
    )
}

export default Topo;