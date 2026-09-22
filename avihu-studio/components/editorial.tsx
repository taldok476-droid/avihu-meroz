"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/site";
export function SiteMotion() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const reduced = useReducedMotion();
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false });
  useEffect(() => {
    if (reduced || !matchMedia("(pointer:fine)").matches) return;
    const move = (event: PointerEvent) =>
      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: !!(event.target as Element).closest(".gallery-card"),
      });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduced]);
  return (
    <>
      <motion.div
        className="reading-progress"
        style={{ scaleX: reduced ? scrollYProgress : scaleX }}
      />
      <div
        aria-hidden="true"
        className={`art-cursor ${cursor.active ? "visible" : ""}`}
        style={{ transform: `translate3d(${cursor.x}px,${cursor.y}px,0)` }}
      >
        VIEW ↗
      </div>
    </>
  );
}
export function EditorialQuotes() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const item = testimonials[index];
  return (
    <section id="testimonials" className="quote-stage shell">
      <div className="chapter" dir="ltr">
        WORDS / FROM THE CHAIR
      </div>
      <p className="eyebrow">המילים שמאחורי החיוכים</p>
      <h2 className="quote-intro">חוויה שנשארת גם אחרי התספורת.</h2>
      <motion.figure
        key={index}
        initial={{ opacity: reduced ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduced ? 0 : 0.35 }}
        aria-live="polite"
      >
        <blockquote>״{item.quote}״</blockquote>
        <figcaption>
          {item.author} · {item.kind}
        </figcaption>
      </motion.figure>
      <div className="quote-controls">
        <button
          className="icon-button"
          aria-label="ההמלצה הקודמת"
          onClick={() =>
            setIndex((index + testimonials.length - 1) % testimonials.length)
          }
        >
          <ArrowRight />
        </button>
        <span dir="ltr">
          0{index + 1} / 0{testimonials.length}
        </span>
        <button
          className="icon-button"
          aria-label="ההמלצה הבאה"
          onClick={() => setIndex((index + 1) % testimonials.length)}
        >
          <ArrowLeft />
        </button>
      </div>
      {testimonials.some(item => item.isSample) && <p className="sample-notice">
        ההמלצות הבאות הן דוגמאות להמחשה, ואינן ביקורות של לקוחות אמיתיים.
      </p>}
    </section>
  );
}
