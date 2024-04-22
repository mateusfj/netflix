import styles from "./Conteiner.module.css"

function Conteiner({children}) {
    return(
        <div className={styles.conteiner}>
            {children}
        </div>
    );
}

export default Conteiner;