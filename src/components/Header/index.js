import styles from "./Header.module.css";

function Header (){
    return(
        <header className={styles.header}>
            
            <h1 className={styles.title}>Matflix</h1>

            <nav>
                <a href="#" className={styles.links}>Assitir</a>
                <a href="#" className={styles.links}>Home</a>
            </nav>
            
        </header>
    );
}

export default Header;