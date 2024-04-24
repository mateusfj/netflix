import { Link } from "react-router-dom"
import style from "./Footer.module.css"
import logo from "../../logo.png"


function Footer(){
    return(
        <footer className={style.footer}>
            <img src={logo}></img>
            <div>
                <Link className={style.link} to = "/">Termos de aviso de privacidade</Link>
                <Link className={style.link} to = "/">Enviar Feedback</Link>
                <Link className={style.link} to = "/">Ajuda</Link>
                <span>© Todos os direitos reservados. 2024</span>
            </div>
        </footer>
    );
}


export default Footer;