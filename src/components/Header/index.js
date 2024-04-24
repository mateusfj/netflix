import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../logo.png"

function Header() {


    /* useState = avisa que o valor de determinda variavel esta mudando e manda o react renderizar o novo valor setado*/

    return (
        <header className={styles.header}>

            <Link className={styles.link} to="/">
                <img src={logo}></img>
            </Link>

            <nav>

                <div>
                    <Link className={styles.link} to="/">Home</Link>
                </div>
                <div>
                    <Link className={styles.link} to="/assistir">Assistir</Link>
                </div>
                <div>
                    <Link className={styles.link} to="/pesquisar">Pesquisar</Link>
                </div>
            </nav>

        </header>
    );
}

export default Header;