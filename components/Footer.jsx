import React from 'react'
import styles from "../styles/Home.module.scss"

export default function Footer() {
    return (
        <div className={styles.footerWrapper}>
            <div>
                <ul className={styles.iconsList}>
                    <li><i className="bi bi-facebook"></i></li>
                    <li><i className="bi bi-instagram"></i></li>
                    <i className="bi bi-twitter"></i>
                </ul>
            </div>
            <div>
                <h5>CUT ABOVE BARBERS, 221 BAKER STREET, BOURNVILLE, UK</h5>
            </div>
        </div>
    )
}
