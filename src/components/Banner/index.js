import style from "./Banner.module.css";


function Banner({imageNome}) {

    return (
        <section className={style.banners}>
            <div className={style.banner} style={{backgroundImage: `url('/images/banner-${imageNome}.jpeg')`}}>
                <div className={style.degrade}></div>
            </div>
        </section>
    );
}

export default Banner;