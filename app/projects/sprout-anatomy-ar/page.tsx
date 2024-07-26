import Reveal from "@/components/reveal";
import ListReveal from "@/components/reveal-list";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function SproutAnatomyAR() {
  return (
    <div className="flex justify-center items-center flex-col h-full">
      <section className="flex justify-center items-center flex-col space-y-6 py-12">
        <Reveal origin="bottom" duration={1000} distance="25px" delay={150}>
          <div className="flex flex-col justify-center pt-2.5">
            <span className="font-semibold text-3xl text-center">{"Download for free today!"}</span>
          </div>
        </Reveal>
        <Reveal origin="bottom" duration={1000} distance="25px" delay={300}>
          <Image src="/sar.png" alt="Sprout Anatomy AR" width={220} height={220} className="w-[220px] h-[220px] rounded-[22%] overflow-hidden inline-block align-middle mt-3" />
        </Reveal>
        <Reveal origin="bottom" duration={1000} distance="25px" delay={450}>
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="flex items-center justify-center">
              <a href="https://apps.apple.com/us/app/sprout-anatomy-ar/id6478272230?itsct=apps_box_badge&amp;itscg=30200" className="p-[12.625px] inline-block" target="_blank" rel="noopener noreferrer">
                <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1709424000" alt="Download on the App Store" className="h-[54.75px]" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.sproutcircle.arstudypod" className="" target="_blank" rel="noopener noreferrer">
                <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="h-[80px] min-w-[206.72] rounded-xl" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}