import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { site } from "@/data/site";
import { Address } from "./address";
export function Hero() {
  return (
    <section id="home" className="entrance">
      <div className="shell entrance-layout">
        <div className="entrance-copy">
          <p className="entrance-label" lang="en" dir="ltr">
            HAIR ART STUDIO<span>KIDS HAIR SPECIALIST</span>
          </p>
          <h1>
            ילדים עם <span>סטייל.</span>
          </h1>
          <h2>תספורת שהיא הרבה יותר מתספורת.</h2>
          <p className="entrance-description">
            אביהו מרוז מתמחה בתספורות ילדים, פיידים מדויקים, עיצובי שיער מיוחדים
            ו־<bdi>Hair Art</bdi> — עם הרבה סבלנות, יצירתיות ויחס אישי לכל ילד.
          </p>
          <div className="entrance-actions">
            <a href={site.bookingUrl} className="button entrance-book">
              קביעת תור <ArrowUpLeft size={20} />
            </a>
            <a href="#academy" className="text-link">
              האקדמיה <ArrowUpLeft size={18} />
            </a>
          </div>
          <div className="entrance-address">
            <Address />
          </div>
          <div className="entrance-signature">
            <span>אביהו מרוז</span>
            <span>יד של אמן. לב של ילד.</span>
          </div>
        </div>
        <figure className="entrance-visual">
          <div className="entrance-image">
            <Image
              src="/images/photo-2.webp"
              alt="תספורת ילדים עם פייד מדויק ועיצוב אמנותי בצד הראש"
              fill
              priority
              sizes="(max-width:700px) 90vw, 44vw"
            />
          </div>
          <figcaption>
            <span className="entrance-photo-number">01</span>
            <span lang="en" dir="ltr">
              SIGNATURE CUT<span>KIDS / HAIR ART</span>
            </span>
            <span className="entrance-mark" aria-hidden="true">
              ✳
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
