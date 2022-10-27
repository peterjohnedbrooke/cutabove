import React from 'react'
import styles from "../styles/Home.module.scss"

export default function FindUs() {
    return (
        <div id='findus' className={styles.findusWrapper}>
            <h1>FIND US</h1>
            <div className={styles.container}>
                <iframe className={styles.responsiveIframe} loading="lazy" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3ezk8x68cEgRUETGtK2Wnjc&key=AIzaSyD3cAIdiMefP3CGCXv4YQn6h9i83G0x79M"></iframe>
            </div>
        </div>
    )
}
