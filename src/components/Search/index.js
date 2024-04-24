import styles from "./Search.module.css"
import { useState } from "react";
import filmes from "../../json/filmes.json"
import Card from "../Cards"



function Search() {
    function Pesquisa(event) {
        setNome(event.target.value)
    }

    const [nome, setNome] = useState('')

    function trazFilme(nome) {
        if (nome === '') {
            return filmes.map(filme => <Card id={filme.id} key={filme.id} />)
        } else {
            let result = filmes.filter(filme => filme.title === nome)
            return result.map(result => <Card id={result.id} key={result.id}/>)
        }
    }

    return (
        <div className={styles.search}>
            <input placeholder="Pesquisar" onChange={Pesquisa} className="inputPesquisa"></input>
            <div className={styles.result}>
                {trazFilme(nome)}
            </div>
        </div>
    );
}

export default Search;