import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../logo.png"

function Header() {


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
                    <Link className={styles.link} to="/assistir">Assitir</Link>
                </div>
            </nav>

        </header>
    );
}

export default Header;