import styles from "./Category.module.css"
import filmes from "../../json/filmes.json"

export const categoria = ["Animes", "Só na Matflix","Mais assistidos", "Ficção científica"]

export function filterCategory(index) {
  return filmes.filter(filme => filme.category === categoria[index])
}

function Category( {category, children} ){
    return(
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Category;