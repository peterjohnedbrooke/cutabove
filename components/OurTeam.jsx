import React from 'react'
import styles from "../styles/Home.module.scss"
import Image from 'next/image'

export default function OurTeam() {
    return (
        <div id='ourteam' className={styles.ourteamWrapper}>
            <h1>OUR TEAM</h1>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image alt='image-one' width={400} height={400} src="/images/personOne.jpg" />
                    <h3>Ben Kemp</h3>
                </div>
                <div className={styles.imgContainer}>
                    <Image alt='image-two' width={400} height={400} src="/images/personTwo.jpg" />
                    <h3>Howard Flowers</h3>
                </div>
                <div className={styles.imgContainer}>
                    <Image alt='image-three' width={400} height={400} src="/images/personThree.jpg" />
                    <h3>Harry Mann</h3>
                </div>
            </div>
        </div>
    )
}
