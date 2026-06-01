// import { useEffect, useRef } from "react";
import styles from './home.module.css';
import PageContent from "../../components/PageContent";
import { homeTitle, pageContents } from '../../data/pageContent'
import { getImageURL } from '../../utils/functions';
import SimpleParallax from "simple-parallax-js";

const Home = () => {
  const homeData = pageContents.find(page => page.title === homeTitle)

  const heroImage = homeData?.image || 'woman.png'
  return (
      <main className={styles.main}>
        <section className={styles.heroContent}>
          <span className={styles.first}>summer '26</span>
          <div className={styles.img}>
            <SimpleParallax orientation='down' overflow scale={1.5} delay={40}>
              <img src={getImageURL(heroImage)} />
            </SimpleParallax>
          </div>
          <span className={styles.second}>now online</span>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>{homeTitle}</h1>
            <img className={styles.imgSection} src={getImageURL("hand-yellow.jpeg")} />
            <img className={styles.imgSection} src={getImageURL("two-women.jpeg")} />
            <img className={styles.imgSection} src={getImageURL("fruits.jpeg")} />
        </section>
      </main>
  )
};

export default Home;
