import React from 'react'
import styles from "../styles/Home.module.scss"

export default function Contact() {
    return (
        <div id='contact' className={styles.contactWrapper}>
            <div className={styles.infoContainer}>
                <div>
                    <h2>We are an independent Barbers shop local to you, we have a combined 50 years of experience</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident distinctio neque et labore possimus! Sunt quis, laudantium pariatur voluptates magni ut, vero excepturi ipsa maiores consequatur rem dignissimos tempora laboriosam!</p>
                </div>
                <div className={styles.info}>
                    <div>
                        <h3>Phone</h3>
                        <p>0129333333</p>
                        <h3>Location</h3>
                        <p>
                            221 Bakers Street
                            <br />
                            Bakersfield
                            <br />
                            BS121BB
                            <br />
                            UK
                        </p>
                    </div>
                    <div>
                        <h3>Hours</h3>
                        <ul>
                            <li>Mon 9am - 6pm</li>
                            <li>Tues 9am - 6pm</li>
                            <li>Wed 9am - 6pm</li>
                            <li>Thurs 9am - 8pm</li>
                            <li>Fri 9am - 6pm</li>
                            <li>Sat 9am - 6pm</li>
                            <li>Sun 10am - 4pm</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
