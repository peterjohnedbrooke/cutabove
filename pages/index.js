import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import Services from "../components/Services";
import Bookings from "../components/Bookings";
import CarouselLoader from "../components/Carousel";
import Contact from "../components/Contact";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import Insta from "../components/Insta";
import FindUs from "../components/FindUs";


export default function Home() {
  return (
    <div className={styles.container}>
      <Landing />
      <Contact/>
      <CarouselLoader/>
      <Services/>
      <OurTeam/>
      <Insta/>
      <FindUs/>
      <Bookings />
      <Footer/>
    </div>
  )
}
