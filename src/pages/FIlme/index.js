import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import api from '../../services/api';
import './estilo.css';

function Filme(){

    const { id }  = useParams(); //é um hook do React Router que permite acessar os parâmetros de rota em componentes de uma aplicação React.

    const [ filme, setFilme ] = useState([]);
    
    useEffect(() => {
        async function loadFilme(){
            const res = await api.get(`r-api/?api=filmes/${id}`);
            setFilme(res.data);
        };
        loadFilme();
    });

    function salvarFilme(){
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        //se tiver algum filme salvo com esse id precisa ignorar
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if(hasFilme){
            toast.error('Você já salvou este filme!');
            return
        }
        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!');
    };

    return(
        <div className='container'>
            <div className='filme-info'>
                <article key={filme.id}>
                    <h2>{ filme.nome }</h2>
                    <img src={ filme.foto } alt={filme.foto} />
                    <h3>Sinopse</h3>
                    <p>{ filme.sinopse }</p>

                    <div className='botoes'>
                        <button onClick={salvarFilme}>Salvar</button>
                        <button>
                            <a target='blank' 
                               href={`https://www.youtube.com/results?search_query=${ filme.nome } trailer`}>
                               Trailer
                            </a>
                        </button>
                    </div>

                </article>
            </div>
        </div>
    );
}

export default Filme;