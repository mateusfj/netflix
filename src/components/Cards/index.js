import styles from "./Card.module.css"

function Card({ id }){
    return(
        <section className={styles.card}>
           <a href={`https://youtu.be/${id}`}
           target="_blanck">
            <img alt="logo" src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}>
            </img>
           </a>
        </section>
    );
}

export default Card;