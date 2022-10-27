import React from "react";
import styles from "../styles/Home.module.scss"

export default function Services() {
    return (
        <div id="services" className={styles.servicesWrapper}>
            <h1>SERVICES</h1>
            <div className={styles.infoContainer}>
                <div>
                    <ul>
                        <h2>HAIR</h2>
                        <li>
                            <h3>Head Shave</h3>
                            <p>Head shave with clippers - £10</p>
                        </li>
                        <li>
                            <h3>Dry Cut</h3>
                            <p>Haircut without wash - £20</p>
                        </li>
                        <li>
                            <h3>Wash & Cut</h3>
                            <p>Haircut including wash - £20</p>
                        </li>
                        <li>
                            <h3>Skin Fade</h3>
                            <p>Hair blended down to skin on back and sides - £22</p>
                        </li>
                        <li>
                            <h3>Restyle</h3>
                            <p>Complete change of hairstyle - £22</p>
                        </li>
                        <li>
                            <h3>Women&apos;s wash and cut</h3>
                            <p>Haircut including wash - From £30</p>
                        </li>
                        <li>
                            <h3>Kids under 13</h3>
                            <p>Children&apos;s haircut - £15</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h2>BEARD</h2>
                        <li>
                            <h3>Beard trim</h3>
                            <p>Beard trim with clippers - From £10</p>
                        </li>
                        <li>
                            <h3>Partial Shave</h3>
                            <p>Partial cut-throat razor shave including steamer and cold towel - £15</p>
                        </li>
                        <li>
                            <h3>Full Shave</h3>
                            <p>Full cut-throat razor shave including steamer and cold towel - £25</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
