import React from 'react'
import styles from "../styles/Home.module.scss"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'

export default function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
        setOpen(!isOpen)
    }

    const handleExit = (e) => {
        setClick(!click)
        setOpen(false);
        // setChangePage(true);
    }

    const [isOpen, setOpen] = useState(false);
    const [navColor, setNavColor] = useState(false);
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setNavColor(true)
            } else {
                setNavColor(false)
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


    return (
        <div className={navColor ? `${styles.navWrapperScroll}` : `${styles.navWrapper}`}>

            {!click ? <div className={styles.logoContainer}>
                <div href="#home" className={styles.logo}>
                    <a href="#home"></a>
                </div>
            </div> : <div></div>
            }
            {!click ? <div className={styles.brand}><h1>Cut Above</h1><a href="#home"></a></div> : null}
            <div className={styles.navContainer}>
                <div className={!!click ? `${styles.burgerIconCross}` : `${styles.burgerIcon}`} onClick={handleClick}>
                    <Hamburger size={25} className={styles.burgerInner} toggled={isOpen} rounded toggle={setOpen} />
                </div>
            </div>
            <div className={click ? `${styles.navMenuActive}` : `${styles.navMenuHidden}`}>
                <div className={styles.bg}></div>
                <div className={styles.brand}>
                    <div className={styles.logo}></div>
                    <h5>Cut Above</h5>
                </div>
                <ul className={click ? `${styles.listActive}` : `${styles.listHidden}`}>
                    <li>
                        <a href="#home" onClick={handleExit}>HOME</a>
                    </li>
                    <li>
                        <a href="#services" onClick={handleExit}>SERVICES</a>
                    </li>
                    <li>
                        <a href="#bookings" onClick={handleExit}>BOOKINGS</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={handleExit}>CONTACT</a>
                    </li>
                    <li>
                        <a href="#ourteam" onClick={handleExit}>OUR TEAM</a>
                    </li>
                    <li>
                        <a href="#insta" onClick={handleExit}>INSTAGRAM</a>
                    </li>
                    <li>
                        <a href="#findus" onClick={handleExit}>FIND US</a>
                    </li>
                </ul>
                <ul className={styles.iconsList}>
                    <li><i className="bi bi-facebook"></i></li>
                    <li><i className="bi bi-instagram"></i></li>
                    <i className="bi bi-twitter"></i>
                </ul>
            </div>
        </div>
    )
}
