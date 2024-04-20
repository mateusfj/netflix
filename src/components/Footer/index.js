import style from "./Footer.module.css"

function Footer(){
    return(
        <footer className={style.footer}>
            <p className={style.p}>
                Direitos Reservados copyright 2024
            </p>
        </footer>
    );
}


export default Footer;