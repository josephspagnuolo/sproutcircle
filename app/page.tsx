import Image from "next/image";
import styles from './styles.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.main} id="about">
        <div className={styles.main__container}>
          <div className={styles.main__img__container}>
            <div className={styles.main__img__card}><Image alt="logo" src="/SproutLogo.png" height={50} width={50} /></div>
          </div>
          <div className={styles.main__content}>
            <h1>What do we do</h1>
            <h2>At Sprout Circle, we are passionate about creating innovative and immersive digital experiences that seamlessly blend entertainment with education and manufacturing processes. As a forward-thinking mobile game development company, we specialize in crafting engaging and dynamic games that captivate users of all ages.</h2>
            <p>schedule a call to learn more</p>
            <button className={styles.main__btn}><a href="#">Schedule Call</a></button>
          </div>
        </div>
      </div>
      <div className={styles.team} id="team">
        <h1>Our Team</h1>
        <div className={styles.team__wrapper} >
          <a href="https://www.linkedin.com/in/bryan-wong-61490519b/" className={styles.no__underline} target="_blank">
            <div className={styles.team__card}>
              <h2>Bryan Wong</h2>
              <h3>Bryan Wong is a driven and multi-talented individual who has recently graduated from York University with a degree in Political Science. With a passion for learning and a keen interest in law
                Bryan is eager to bring his unique perspective to the gaming industry, and to create new and innovative gaming experiences that will captivate players all around the world.
              </h3>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/josephspagnuolo1/" className={styles.no__underline}>
            <div className={styles.team__card}>
              <h2>Joseph Spagnuolo</h2>
              <h3>Bryan Wong is a driven and multi-talented individual who has recently graduated from York University with a degree in Political Science. With a passion for learning and a keen interest in law
                Bryan is eager to bring his unique perspective to the gaming industry, and to create new and innovative gaming experiences that will captivate players all around the world.
              </h3>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/alexander-paglia/" className={styles.no__underline}>
            <div className={styles.team__card}>
              <div className={styles.front}>
                <h2>Alexander Paglia</h2>
              </div>
              <div className={styles.back}>
                <p>Back of Card</p>
              </div>

            </div>
          </a>
        </div>
      </div>
      <div className={styles.projects} id="projects">
        <h1>Our Projects</h1>
        <div className={styles.projects__wrapper}>
          <div className={styles.projects__img__card}><a href="https://play.google.com/store/apps/details?id=com.sproutcircle.meteormayhem">
            <div className={styles.projects__card}>
              <Image src="/MeteorMayhem.png" alt="mm" height={50} width={50} />
            </div>
          </a></div>
        </div>
        <div className={styles.projects__content}>
          <h1>What do we do</h1>
          <h2>At Sprout Circle, we are passionate about creating innovative and immersive digital experiences that seamlessly blend entertainment with education and manufacturing processes. As a forward-thinking mobile game development company, we specialize in crafting engaging and dynamic games that captivate users of all ages.</h2>
          <p>schedule a call to learn more</p>
        </div>
      </div>

      <div className={styles.main} id="about">
        <div className={styles.main__container}>
          <div className={styles.main__img__container}>
            <div className={styles.main__img__card}><Image alt="logo" src="/SproutLogo.png" height={50} width={50} /></div>
          </div>
        </div>
      </div>
      <div className={styles.footer__container}>
        <div className={styles.footer__links}>
          <div className={styles.footer__link__wrapper}>
            <div className={styles.footer__link__items}>
              <h2>About Us</h2>
              <a href="/sign-up">How it works</a>
              <a href="/sign-up">Careers</a>
              <a href="/sign-up">Terms of Service</a>
            </div>
            <div className={styles.footer__link__items}>
              <h2>About Us</h2>
              <a href="/sign-up">How it works</a>
              <a href="/sign-up">Careers</a>
              <a href="/sign-up">Terms of Service</a>
            </div>
          </div>
          <div className={styles.footer__link__wrapper}>
            <div className={styles.footer__link__items}>
              <h2>About Us</h2>
              <a href="/sign-up">How it works</a>
              <a href="/sign-up">Careers</a>
              <a href="/sign-up">Terms of Service</a>
            </div>
            <div className={styles.footer__link__items}>
              <h2>About Us</h2>
              <a href="/sign-up">How it works</a>
              <a href="/sign-up">Careers</a>
              <a href="/sign-up">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
