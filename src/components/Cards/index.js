import { Link } from "react-router-dom";
import styles from "./Card.module.css"

function Card({ id }) {
    return (
        <section className={styles.card}>
            <Link to={`/assistir/${id}`}>
                <img alt="logo" src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}>
                </img>
            </Link>
        </section>
    );
}

export default Card;