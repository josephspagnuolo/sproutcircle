import Image from "next/image";
import styles from './styles.module.css'
import Reveal from "@/components/reveal";
import Link from "next/link";
import { Metadata } from "next";
import CubeScene from "@/components/cubescene";

export const metadata: Metadata = {
  title: 'Sprout Circle',
  description: "Developing engaging experiences with innovative technologies that are shaping the future of the digital landscape. As a forward-thinking development company, we specialize in crafting engaging and dynamic applications, games, and software that captivate users of all ages.",
}

export default function Home() {
  return (
    <>
      <Reveal origin="left" duration={750} distance="250px" >
        <div className="flex justify-center pt-32 flex-col space-y-4">
          <span className="font-bold text-6xl text-center">
            Immersive digital creations
          </span>
          <div className="flex justify-center">
            <span className="text-gray-500 text-xl text-center max-w-[600px]">
              Developing engaging experiences with innovative technologies that are shaping the future of the digital landscape
            </span>
          </div>
        </div>
      </Reveal>
      <div className="flex justify-center py-44 md:px-10" id="about">
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-7xl justify-center items-center">
          <div className="flex justify-center text-center h-[600px]">
            <CubeScene />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left md:pr-4">
            <span className="font-bold text-xl text-[#799e29] pb-6">What do we do</span>
            <span>At Sprout Circle, we are passionate about creating innovative and immersive digital experiences at the intersection of art and technology&mdash;seamlessly blending entertainment with areas like education and manufacturing processes. As a forward-thinking development company, we specialize in crafting engaging and dynamic applications, games, and software that captivate users of all ages.</span>
            <Link href="/contact" className={styles.main__btn}><span className="flex z-[2] w-full text-center justify-center relative">Get in Touch</span></Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-32 flex-col space-y-4" id="services">
        <span className="font-bold text-xl text-center text-[#799e29]">
          Services
        </span>
        <div className="flex justify-center">
          <span className="flex text-gray-500 text-md text-center pt-6 max-w-4xl">
            Our goal is to bring your digital visions to life. At our core, we specialize in a multitude of offerings tailored to meet your needs. From crafting immersive digital experiences that push the boundaries of innovation to developing captivating mobile games and applications, we&apos;re dedicated to delivering solutions that captivate and inspire. Our expertise extends to mixed reality technologies, where we pioneer interactive AR and VR experiences that redefine learning and engagement. With a focus on creativity, collaboration, and cutting-edge technology, we&apos;re here to turn your ideas into exceptional digital realities.
          </span>
        </div>
        <div className="flex justify-center pt-10">
          <svg className="animate-bounce" width="64px" height="64px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect x="0" y="0" width="32.00" height="32.00" rx="16" fill="#799e29" strokeWidth="0"></rect>
            </g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Icon-Set-Filled" transform="translate(-414.000000, -1089.000000)" fill="#ffffff">
                  <path d="M436.535,1105.88 L430.879,1111.54 C430.639,1111.78 430.311,1111.85 430,1111.79 C429.689,1111.85 429.361,1111.78 429.121,1111.54 L423.465,1105.88 C423.074,1105.49 423.074,1104.86 423.465,1104.46 C423.855,1104.07 424.488,1104.07 424.879,1104.46 L429,1108.59 L429,1098 C429,1097.45 429.448,1097 430,1097 C430.553,1097 431,1097.45 431,1098 L431,1108.59 L435.121,1104.46 C435.512,1104.07 436.146,1104.07 436.535,1104.46 C436.926,1104.86 436.926,1105.49 436.535,1105.88 L436.535,1105.88 Z M430,1089 C421.163,1089 414,1096.16 414,1105 C414,1113.84 421.163,1121 430,1121 C438.837,1121 446,1113.84 446,1105 C446,1096.16 438.837,1089 430,1089 L430,1089 Z" id="arrow-down-circle"> </path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <Reveal origin="left" duration={1000} distance="250px" delay={450} >
        <div className="flex justify-center pb-16 flex-col space-y-4">
          <span className="font-bold text-xl text-center text-[#799e29]">
            Mixed Reality
          </span>
          <span className="font-semibold text-3xl text-center">
            Captivating users with AR and VR experiences
          </span>
          <div className="flex justify-center">
            <span className="flex text-gray-500 text-md text-center pt-6 max-w-lg">
              We are pushing the boundaries of technology by developing cutting-edge augmented reality (AR) and virtual reality (VR) software. In the realm of education, we are pioneering interactive solutions that revolutionize learning, offering students and professionals alike an unparalleled opportunity to explore and comprehend complex concepts in an immersive 3D environment.
            </span>
          </div>
        </div>
      </Reveal>
      <Reveal origin="left" duration={1000} distance="250px" delay={450}>
        <div className="flex justify-center py-16 flex-col space-y-4">
          <span className="font-bold text-xl text-center text-[#799e29]">
            Mobile Games
          </span>
          <span className="font-semibold text-3xl text-center">
            Creating fun and engaging games for everyone
          </span>
          <div className="flex justify-center">
            <span className="flex text-gray-500 text-md text-center pt-6 max-w-lg">
              We are passionate about making games that are not only entertaining, but also easy to play and understand. Our games are designed to challenge and excite players of all ages, and our dedication to creating free games means that everyone can join in the fun. Whether you&apos;re a casual gamer or a dedicated player, we have something for you. Our commitment to creating games that are both fun and accessible make us a company to watch in the world of mobile gaming.
            </span>
          </div>
        </div>
      </Reveal>
      <Reveal origin="left" duration={1000} distance="250px" delay={450}>
        <div className="flex justify-center pt-16 pb-32 flex-col space-y-4">
          <span className="font-bold text-xl text-center text-[#799e29]">
            App & Web Development
          </span>
          <span className="font-semibold text-3xl text-center">
            Experienced with some of the latest technology
          </span>
          <div className="flex justify-center">
            <span className="flex text-gray-500 text-md text-center pt-6 max-w-lg">
              With our knowledge in software design, we excel at crafting digital solutions tailored to your needs, ensuring optimal performance and user satisfaction. Our team is adept at leveraging cutting-edge technologies to create seamless and innovative experiences. From responsive web interfaces to dynamic mobile apps, we ensure your digital presence stands out in today's competitive landscape.
            </span>
          </div>
        </div>
      </Reveal>
      <div className="flex justify-center flex-col space-y-6 py-32" id="team">
        <span className="font-bold text-xl text-center text-[#799e29]">Our Team</span>
        <div className="flex flex-col p-10 lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          <a href="https://www.linkedin.com/in/bryan-wong-61490519b/" className="flex justify-center" target="_blank" rel="noopener noreferrer">
            <div className={styles.flip_card}>
              <div className={styles.flip_card_inner}>
                <div className={styles.flip_card_front}>
                  <div className="flex flex-col h-full place-content-center">
                    <span className="text-lg text-center">
                      Co-Founder
                    </span>
                    <span className="font-semibold text-2xl text-center">
                      Bryan Wong
                    </span>
                  </div>
                </div>
                <div className={styles.flip_card_back}>
                  <span className="text-sm">Bryan Wong is a driven and multi-talented individual who has recently graduated from York University with a degree in Political Science. With a passion for learning and a keen interest in law
                    Bryan is eager to bring his unique perspective to the gaming industry, and to create new and innovative gaming experiences that will captivate players all around the world.</span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/alexander-paglia/" className="flex justify-center" target="_blank" rel="noopener noreferrer">
            <div className={styles.flip_card}>
              <div className={styles.flip_card_inner}>
                <div className={styles.flip_card_front}>
                  <div className="flex flex-col h-full place-content-center">
                    <span className="text-lg text-center">
                      Co-Founder
                    </span>
                    <span className="font-semibold text-2xl text-center">
                      Alex Paglia
                    </span>
                  </div>                </div>
                <div className={styles.flip_card_back}>
                  <span className="text-sm">Alex Paglia is a passionate and ambitious individual who is currently studying at York University&apos;s Lassonde School of Engineering. With a strong focus on computer engineering, Alex has developed a deep understanding of programming and is constantly seeking new challenges and opportunities to expand his knowledge of AR and VR.</span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/josephspagnuolo1/" className="flex justify-center" target="_blank" rel="noopener noreferrer">
            <div className={styles.flip_card}>
              <div className={styles.flip_card_inner}>
                <div className={styles.flip_card_front}>
                  <div className="flex flex-col h-full place-content-center">
                    <span className="text-lg text-center">
                      Co-Founder
                    </span>
                    <span className="font-semibold text-2xl text-center">
                      Joseph Spagnuolo
                    </span>
                  </div>                </div>
                <div className={styles.flip_card_back}>
                  <span className="text-sm">Joseph Spagnuolo is a dedicated and analytical individual who is currently pursuing his studies in software engineering at York University&apos;s Lassonde School of Engineering. With his technical expertise and creative spirit, Joseph is eager to bring his unique perspective to the world of software development to create engaging and immersive experiences.</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col space-y-6 py-32" id="projects">
        <span className="font-bold text-xl text-center text-[#799e29]">Our Projects</span>
        <div className="flex justify-center items-center flex-col space-y-4 md:space-y-0 md:space-x-7 md:flex-row pt-10 max-w-4xl">
          <Image src="/mmlogo.jpg" alt="Meteor Mayhem" width={220} height={220} className="w-[220px] h-[220px] rounded-[22%] overflow-hidden inline-block align-middle" />
          <Image src="/mm.gif" alt="Meteor Mayhem" height={360} width={210} />
        </div>
        <div className="flex flex-col justify-center pt-2.5">
          <span className="flex text-gray-500 text-md text-center max-w-4xl">
            Welcome to “Meteor Mayhem” by Sprout Circle! Prepare yourself for an exhilarating adventure in the depths of space, where your survival instincts will be put to the ultimate test. In this infinite runner game, you take on the role of a courageous space pilot whose ship has become lost in the vastness of the cosmos.
            As an iOS and Android game, “Meteor Mayhem” is optimized for mobile play, allowing you to enjoy the adrenaline-pumping action anytime, anywhere. Whether you&apos;re waiting in line or simply want to immerse yourself in an exciting gaming experience, Sprout Circle&apos;s “Meteor Mayhem” guarantees to keep you entertained and challenged.
            So, pilot, prepare yourself for an epic adventure, test your survival skills, and embark on a thrilling journey through the unknown. Will you conquer the depths of space and emerge victorious in “Meteor Mayhem”? The universe awaits your valiant efforts!
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="flex items-center justify-center">
            <a href="https://apps.apple.com/us/app/meteor-mayhem/id6478241823?itsct=apps_box_badge&amp;itscg=30200" className="p-[12.625px] inline-block" target="_blank" rel="noopener noreferrer">
              <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1709424000" alt="Download on the App Store" className="h-[54.75px]" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a href="https://play.google.com/store/apps/details?id=com.sproutcircle.meteormayhem" className="" target="_blank" rel="noopener noreferrer">
              <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="h-[80px] min-w-[206.72] rounded-xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
