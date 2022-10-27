import Image from 'next/image'
import React from 'react'
import styles from "../styles/Home.module.scss"

export default function Insta() {
    return (
        <div id='insta' className={styles.instaWrapper}>
            <h1>INSTAGRAM</h1>
            <div className={styles.instaContainer}>
                <Image alt='insta' height={400} width={400} src="/images/instaOne.jpg" />
                <Image alt='insta' height={400} width={400} src="/images/instaTwo.jpg" />
                <Image alt='insta' height={400} width={400} src="/images/instaThree.jpg" />
                <Image alt='insta' height={400} width={400} src="/images/instaFour.jpg" />
                <Image alt='insta' height={400} width={400} src="/images/instaFive.jpg" />
                <Image alt='insta' height={400} width={400} src="/images/instaSix.jpg" />
                <Image alt='insta' height={400} width={400} src="/images/carouselOne.jpg" />
                <Image alt='insta' height={400} width={400} src="/images/carouselTwo.jpg" />
                {/* <Image layout="responsive" height={400} width={400} src="/images/carouselTwo.jpg" /> */}
            </div>
        </div>
    )
}
