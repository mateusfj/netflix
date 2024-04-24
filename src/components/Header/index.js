import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../logo.png"
import React, { useState, useEffect } from "react";

function Header() {
    const [scroll, setScroll] = useState('transparent')

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScroll('#141414')
        } else{
            setScroll('transparent')
        }
    }
    useEffect(() => {
            window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })



    /* useState = avisa que o valor de determinda variavel esta mudando e manda o react renderizar o novo valor setado*/

    return (
        <header style={{  backgroundColor: scroll }} className={styles.header}>

            <Link className={styles.link} to="/">
                <img src={logo}></img>
            </Link>

            <nav>

                <div>
                    <Link className={styles.link} to="/">Início</Link>
                </div>
                <div>
                    <Link className={styles.link} to="/pesquisar">Filmes</Link>
                </div>
                <div>
                    <Link className={styles.link} to="/pesquisar">Séries</Link>
                </div>
                <div>
                    <Link className={styles.link} to="/">Bombando</Link>
                </div>
                <div>
                    <Link className={styles.link} to="/pesquisar">Minha Lista</Link>
                </div>
            </nav>

        </header>
    );
}

export default Header;