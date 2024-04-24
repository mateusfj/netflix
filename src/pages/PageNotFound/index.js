import styles from "./PageNotFound.module.css"
import Footer from "../../components/Footer";
import Conteiner from "../../components/Conteiner";


function PageNotFound() {
    return (
        <div className={styles.pagenotfound}>
            <Conteiner>
                <h2>PageNotFound</h2>
            </Conteiner>
            <Footer />
        </div>
    );
}

export default PageNotFound;