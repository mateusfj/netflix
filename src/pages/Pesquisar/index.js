import styles from "./Pesquisar.module.css";
import Conteiner from "../../components/Conteiner";
import Footer from "../../components/Footer";
import Search from "../../components/Search";


function Pesquisar() {
    return (
        <div className={styles.pesquisar}>
            <Conteiner>
                <Search />
            </Conteiner>
            <Footer />
        </div>
    );
} 


export default Pesquisar;