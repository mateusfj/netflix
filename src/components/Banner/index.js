
import style from "./Banner.module.css";

function Banner() {
    
    let image = 'deadpool'

    return (
        <section className={style.banners}>
            <div className={style.banner} style={{backgroundImage: `url('/images/banner-${image}.jpeg')`}}>
            </div>
        </section>
    );
}

export default Banner;