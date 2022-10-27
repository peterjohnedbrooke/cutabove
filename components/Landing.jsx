import React from 'react'
import styles from "../styles/Home.module.scss"


export default function Landing() {
  return (
    <div id='home' className={styles.landingWrapper}>
      <div className={styles.landingContents}>
        <h1>INDEPENDENT CLASSIC BARBERS SHOP</h1>
        <h3>221 BAKER STREET</h3>
        <h4>Est. 2012</h4>
        <button>
          <a href="#bookings">MAKE A BOOKING</a>
        </button>
      </div>
    </div>
  )
}
