import React from 'react';
import style from './style/footer.module.css'


export default function Footer() {
    return (
        <>
              <footer>
            <>
                <div className={style.footerIntro}>
                    <picture>
                        <a href="#">
                            <img src="/img/logoFooter.png" alt="" className="footer-logo" />
                        </a>
                        <div>
                            <p>En loreto creamos sensaciones unicas por medio de deliciosas fragancias.</p>
                        </div>
                        <div className='medial-social'>
                            
                        </div>

                    </picture>

                </div>
                <div className={style.footerProduct}>
                    <h2>Productos</h2>
                    <ul>
                        <li>Perfumeria</li>
                        <li>Fragancias</li>
                    </ul>
                </div>
                <div className={style.footerContact}>
                    <h2>Contacto</h2>
                    <p>Cel: +57 319 671 5931</p>
                </div>
            </>

        </footer>
        </>

    )
}
