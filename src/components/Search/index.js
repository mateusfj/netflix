import styles from "./Search.module.css"
import { useState } from "react";
import filmes from "../../json/filmes.json"
import Card from "../Cards"
import Conteiner from "../Conteiner"



function Search() {
    function Pesquisa(event) {
        setNome(event.target.value)
    }

    const [nome, setNome] = useState('')

    let result = []

    if (nome === '') {
        result = filmes
    } else {
        result = filmes.filter(filme => filme.title.includes(nome) || filme.category.includes(nome))
    }

    console.log(result.length)


    return (
        <div className={styles.search}>

            <input placeholder="Título, gente e gêneros" onChange={Pesquisa} className="inputPesquisa"></input>
            <h3>{`Resultado da pesquisa: ${result.length}`}</h3>

            <div className={styles.result}>
                <Conteiner >
                    <div
                        className={styles.conteiner}>{result.map(result => (<Card id={result.id} key={result.id} />))}
                    </div>
                </Conteiner>
            </div>
        </div>
    );
}

export default Search;