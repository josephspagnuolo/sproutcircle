import Reveal from "@/components/reveal";
import ListReveal from "@/components/reveal-list";
import Image from "next/image";
import prisma from "@/lib/prisma";
import {
  RegExpMatcher,
  englishDataset,
  englishRecommendedTransformers,
} from 'obscenity';

export const dynamic = "force-dynamic";

export default async function MeteorMayhemLeaderboard() {
  const leaderboard = await prisma.leaderboardEntry.findMany();

  leaderboard.sort((a, b) => b.score - a.score);

  const matcher = new RegExpMatcher({
    ...englishDataset.build(),
    ...englishRecommendedTransformers,
  });

  const badWords = process.env.BADWORDS?.split(",") || [""];

  const filtered = leaderboard.map((entry) => {
    if (matcher.hasMatch(entry.name)) {
      entry.name = "Anonymous"
      return entry;
    } else if (badWords.some(v => entry.name.includes(v))) {
      entry.name = "Anonymous"
      return entry;
    } else {
      return entry;
    }
  });

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col max-w-2xl w-full pt-32">
        <ListReveal className="flex flex-col space-y-6" origin="bottom" interval={150} delay={0} duration={1000} distance="25px">
          <div className="load-hidden flex justify-center">
            <span className="font-bold text-5xl sm:text-6xl text-center">
              Leaderboard
            </span>
          </div>
          <div className="load-hidden flex justify-center">
            <span className="text-gray-500 text-xl text-center text-balance">
              {"View the all-time global leaderboard for Meteor Mayhem"}
            </span>
          </div>
        </ListReveal>
        {filtered.length === 0 ? (
          <span className="text-zinc-400 text-lg">
            Nothing so far...
          </span>
        ) : (
          <ul className="flex justify-center w-full mt-32 mb-6">
            <ListReveal className="flex flex-col w-full" origin="bottom" interval={150} delay={600} duration={1000} distance="25px">
              {filtered.map((entry, index) => (
                <li key={entry.id} className={`load-hidden flex justify-between items-center flex-row py-2 space-x-4 ${index === 0 ? "border-y border-slate-900" : "border-b border-slate-900"}`}>
                  <div className="flex justify-center items-center flex-row space-x-3 shrink-0">
                    {index === 0 &&
                      <span className="flex justify-center items-center h-10 w-10 text-xl font-bold rounded-full bg-[#ffd700] text-black">
                        {index + 1}
                      </span>
                    }
                    {index === 1 &&
                      <span className="flex justify-center items-center h-10 w-10 text-xl font-bold rounded-full bg-[#eaeaea] text-black">
                        {index + 1}
                      </span>
                    }
                    {index === 2 &&
                      <span className="flex justify-center items-center h-10 w-10 text-xl font-bold rounded-full bg-[#bb6412] text-black">
                        {index + 1}
                      </span>
                    }
                    {index > 2 &&
                      <span className="flex justify-center items-center h-10 w-10 text-xl font-bold rounded-full">
                        {index + 1}
                      </span>
                    }
                    <span className="text-2xl grow">
                      {entry.name}
                    </span>
                  </div>
                  <span className="text-2xl">
                    {entry.score}
                  </span>
                </li>
              ))}
            </ListReveal>
          </ul>
        )}
      </div>
      <section className="flex justify-center items-center flex-col space-y-6 py-32">
        <Reveal origin="bottom" duration={1000} distance="25px" delay={500}>
          <div className="flex flex-col justify-center pt-2.5">
            <span className="font-semibold text-3xl text-center">{"Download for free today!"}</span>
          </div>
        </Reveal>
        <Reveal origin="bottom" duration={1000} distance="25px" delay={500}>
          <Image src="/mmlogo.jpg" alt="Meteor Mayhem" width={220} height={220} className="w-[220px] h-[220px] rounded-[22%] overflow-hidden inline-block align-middle mt-3" />
        </Reveal>
        <Reveal origin="bottom" duration={1000} distance="25px" delay={500}>
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
        </Reveal>
      </section>
    </div>
  );
}