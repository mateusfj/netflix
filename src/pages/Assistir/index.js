import styles from "./Assistir.module.css"
import Header from "../../components/Header";
import Conteiner from "../../components/Conteiner";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import filmes from "../../json/filmes.json"



function Assistir() {

    /*find() = De filmes retorne um filme onde esse filme.id seja identico ao params.id
    
    useParams() = captura os parametros da url e traz em um objeto e podemos armazenar em uma variavel para acessa-la 
    */



    const params = useParams()
    const filme = filmes.find(filme => filme.id === params.id)

    return (
        <div>
            <Header />
            <Conteiner>
                <div className={styles.assistir}>
                    <iframe width="560" height="315" 
                    src={`https://www.youtube.com/embed/${filme.id}`}
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
                </div>
            </Conteiner>
            <Footer />
        </div>
    );
}

export default Assistir;