/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "../styles/Home.module.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselLoader() {
    return (
        <div className={styles.carouselWrapper}>
            <Carousel swipeable={true} dynamicHeight={true} showStatus={false} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img
                        className="d-block w-100"
                        src="images/carouselOne.jpg"
                        alt="First slide"
                    />
                </div>
                <div>
                    <img
                        className="d-block w-100"
                        src="images/carouselTwo.jpg"
                        alt="First slide"
                    />
                </div>
                <div>
                    <img
                        className="d-block w-100"
                        src="images/carouselThree.jpg"
                        alt="First slide"
                    />
                </div>
            </Carousel>
        </div>
    )
}
