import Image from "next/image";
import { ArrowUpLeft, Plus } from "lucide-react";
import { academy, services, faqs, site } from "@/data/site";
import { Reveal } from "./reveal";
import { Address } from "./address";
export function SignatureStrip() {
  return (
    <div
      className="marquee"
      aria-label="תספורות עם אופי · פיידים מדויקים · עיצובי שיער · ילדים עם סטייל · Hair Art"
    >
      <div className="marquee-track" dir="ltr" aria-hidden="true">
        {[0, 1].map((i) => (
          <div key={i} className="marquee-copy" dir="rtl">
            {[
              "תספורות עם אופי",
              "פיידים מדויקים",
              "עיצובי שיער",
              "ילדים עם סטייל",
              "Hair Art",
            ].map((text) => (
              <span className="marquee-phrase" key={text}>
                <bdi>{text}</bdi>
                <i>✳</i>
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="marquee-caption">
        <span>תספורות עם אופי · פיידים מדויקים</span>
        <span>אמנות בשיער · הדור הבא של הספרות</span>
      </div>
    </div>
  );
}
export function Highlights() {
  return (
    <section className="kids-story">
      <div className="kids-photo">
        <Image
          src="/images/photo-9.webp"
          alt="ילד מחייך בסיום התספורת בסטודיו"
          fill
          sizes="(max-width:700px) 100vw, 60vw"
        />
      </div>
      <div className="kids-copy">
        <span className="chapter" dir="ltr">
          SMALL PEOPLE. BIG PERSONALITY.
        </span>
        <h2>
          ילדים צריכים ספר
          <br />
          שיודע להבין ילדים.
        </h2>
        <p className="kids-statement">קטנים בגיל. גדולים בסטייל.</p>
        <p>
          הרבה מעבר לתספורת. מקום לאופי, ליצירתיות ולחיוך שמגיע עם הלוק החדש.
        </p>
        <div className="kids-notes">
          <p>
            <strong>בדיוק בקצב שלהם.</strong> גישה רגועה ויחס אישי לכל ילד.
          </p>
          <p>
            <strong>מקום לדמיון.</strong> עיצובים מיוחדים שמביאים אופי.
          </p>
          <p>
            <strong>דיוק בלי קיצורי דרך.</strong> תשומת לב לכל קו ולכל מעבר.
          </p>
          <p>
            <strong>ידע שעובר הלאה.</strong> לימודי ספרות עם ליווי אישי.
          </p>
        </div>
        <p className="kids-signoff">
          הסטייל שלהם. השקט שלכם.
          <br />
          <small>יד מקצועית, יחס אישי והמון סבלנות.</small>
        </p>
        <span className="kids-caption">
          התוצאה הכי טובה? שהם כבר רוצים לחזור.
        </span>
      </div>
    </section>
  );
}
export function About() {
  return (
    <section id="about" className="about shell">
      <div className="about-heading">
        <span className="chapter" dir="ltr">
          AVIHU / 02
        </span>
        <h2>
          מאחורי
          <br />
          הכיסא.
        </h2>
        <span className="about-word" dir="ltr">
          MEROZ
        </span>
      </div>
      <Reveal className="about-copy">
        <p className="eyebrow">נעים להכיר, אביהו מרוז</p>
        <h3>יד של אמן. לב של ילד.</h3>
        <p>
          יש תספורות שמשנות את הלוק. ויש כאלה שמשנות את כל מצב הרוח. בסטודיו שלי
          ב{site.location}, כל ילד מקבל את המקום להיות בדיוק מי שהוא.
        </p>
        <p>
          אני משלב פיידים מוקפדים, עיצובי שיער יצירתיים והמון סבלנות — כדי
          שהחוויה תהיה נעימה להורים ומרגשת לילדים. את אותה אהבה למקצוע אני מעביר
          הלאה גם באקדמיה לספרות.
        </p>
        <blockquote>
          לא סתם תספורת.
          <br />
          אמנות עם אופי.
        </blockquote>
        <p>כל תספורת. סיפור אחר. דיוק. יצירתיות. חיוך.</p>
        <a className="text-link" href="#academy">
          מהכיסא בסטודיו לכיסא הלימודים <ArrowUpLeft size={18} />
        </a>
        <div className="about-signature">
          אביהו מרוז<small>הדיוק בפרטים. החיוך בסוף.</small>
        </div>
      </Reveal>
    </section>
  );
}
export function Academy() {
  return (
    <section id="academy" className="academy">
      <div className="academy-banner" dir="ltr">
        <span className="chapter">THE NEXT GENERATION / 03</span>
        <div>
          ACADEMY<span>↗</span>
        </div>
      </div>
      <div className="shell academy-layout">
        <div className="academy-sticky">
          <p className="eyebrow">האקדמיה של אביהו מרוז</p>
          <h2>
            {academy.title.split("\n").map((line, i) => (
              <span key={line}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
          <div className="academy-photo">
            <Image
              src="/images/photo-7.webp"
              alt="דיוק בעיצוב שיער ובהבהרות בסטודיו של אביהו מרוז"
              fill
              sizes="(max-width:700px) 90vw, 40vw"
            />
            <span>מהרעיון. דרך הידיים. לתוצאה.</span>
          </div>
        </div>
        <div className="academy-scroll">
          <p className="academy-description">{academy.description}</p>
          <p>
            <strong>מתחילים עם שאיפה</strong>
            <br />
            למי שחולם להיכנס למקצוע ולמי שרוצה לקחת את היכולת שלו קדימה.
          </p>
          <p>
            <strong>מתקדמים עם ליווי</strong>
            <br />
            הסברים בגובה העיניים, תרגול מעשי ותשומת לב לפרטים שעושים את ההבדל.
          </p>
          {academy.topics.map((topic, i) => (
            <Reveal className="curriculum-step" key={topic}>
              <span dir="ltr">0{i + 1} /</span>
              <h3>{["היסודות.", "הדיוק.", "האמנות.", "האנשים."][i]}</h3>
              <p>{topic}</p>
            </Reveal>
          ))}
          <div className="academy-end">
            <p>הצעד הראשון שלכם במקצוע מתחיל כאן.</p>
            <a href={site.academyUrl} className="button">
              להרשמה לאקדמיה <ArrowUpLeft size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Services() {
  return (
    <section id="services" className="services shell">
      <div className="services-heading">
        <span className="chapter" dir="ltr">
          THE MENU / CUT & CREATE
        </span>
        <p className="eyebrow">מה עושים אצלנו</p>
        <h2>
          הלוק שלכם.
          <br />
          הטאץ׳ שלנו.
        </h2>
        <p>מהתספורת הראשונה ועד הלוק הבא. לכל ראש יש סיפור משלו.</p>
      </div>
      <div>
        {services.map((s, i) => (
          <a
            href="#contact"
            className="service-row"
            key={s.title}
            aria-label={`בירור על ${s.title}`}
          >
            <span className="service-number">0{i + 1}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <small>נדבר על הלוק שלכם</small>
            </div>
            <ArrowUpLeft />
            <div className="service-preview" aria-hidden="true">
              <Image
                src={`/images/photo-${[9, 8, 11, 6, 1, 4][i]}.webp`}
                alt=""
                fill
                sizes="180px"
              />
            </div>
          </a>
        ))}
        <a href="#contact" className="text-link">
          בואו נמצא את הסטייל שלכם <ArrowUpLeft />
        </a>
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section id="faq" className="faq-section shell">
      <div>
        <span className="chapter" dir="ltr">
          GOOD TO KNOW
        </span>
        <p className="eyebrow">טוב לדעת</p>
        <h2>
          שאלות קטנות.
          <br />
          תשובות בגובה העיניים.
        </h2>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>
              {item.q}
              <Plus size={21} />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function ClosingBanner() {
  return (
    <section
      id="contact"
      className="closing-banner"
      aria-labelledby="contact-heading"
    >
      <div className="shell">
        <span className="chapter" dir="ltr">
          YOUR NEXT CHAPTER / 04
        </span>
        <p>תספורת טובה היא רק ההתחלה.</p>
        <h2 id="contact-heading">
          הכיסא הבא
          <br />
          <span>מחכה לכם.</span>
        </h2>
        <div className="booking-panel">
          <a className="booking-item booking-primary" href={site.bookingUrl}>
            <small lang="en" dir="ltr">
              BOOKING
            </small>
            <span>
              קביעת תור <ArrowUpLeft aria-hidden="true" />
            </span>
          </a>
          <a
            className="booking-item"
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <small lang="en" dir="ltr">
              WHATSAPP
            </small>
            <span>
              וואטסאפ <ArrowUpLeft aria-hidden="true" />
            </span>
          </a>
          <a className="booking-item" href={`tel:${site.phone}`}>
            <small lang="en" dir="ltr">
              PHONE
            </small>
            <span>
              <bdi>{site.phoneDisplay}</bdi>
              <ArrowUpLeft aria-hidden="true" />
            </span>
          </a>
          <a className="booking-item" href={site.academyUrl}>
            <small lang="en" dir="ltr">
              ACADEMY
            </small>
            <span>
              הרשמה לאקדמיה <ArrowUpLeft aria-hidden="true" />
            </span>
          </a>
          <a
            className="booking-item"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`אינסטגרם ${site.instagramUsername}`}
          >
            <small lang="en" dir="ltr">
              INSTAGRAM
            </small>
            <span>
              <bdi>{site.instagramUsername}</bdi>{" "}
              <ArrowUpLeft aria-hidden="true" />
            </span>
          </a>
          <div className="booking-item">
            <small lang="en" dir="ltr">
              LOCATION
            </small>
            <Address />
          </div>
        </div>
      </div>
    </section>
  );
}
