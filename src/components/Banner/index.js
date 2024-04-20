import React, { useState } from "react";
import style from "./Banner.module.css";

function Banner() {
    const [image, setImage] = useState('naruto');

    function selectBanner() {
        const imgBanner = 'onepiece';
        setImage(imgBanner);wdwa
    }

    return (
        <section className={style.banners}>
            <button onClick={selectBanner} value={''}>seta</button>
            <div className={style.banner} style={{backgroundImage: `url('/images/banner-${image}.jpeg')`}}>
            </div>
        </section>
    );
}

export default Banner;