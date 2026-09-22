"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpLeft, ArrowLeft, ArrowRight, X, Plus } from "lucide-react";
import { categories, gallery, type GalleryItem } from "@/data/site";
import { SectionTitle } from "./section-title";
export function Gallery() {
  const [filter, setFilter] = useState("הכול");
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const filtered = gallery.filter(
    (item) => filter === "הכול" || item.tags.includes(filter),
  );
  const visible = expanded ? filtered : filtered.slice(0, 6);
  function open(item: GalleryItem, button: HTMLButtonElement) {
    opener.current = button;
    setSelected(item);
    dialog.current?.showModal();
  }
  function close() {
    dialog.current?.close();
    setSelected(null);
    opener.current?.focus();
  }
  function step(direction: number) {
    if (!selected) return;
    const current = filtered.findIndex((item) => item.id === selected.id);
    setSelected(
      filtered[(current + direction + filtered.length) % filtered.length],
    );
  }
  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);
  return (
    <section id="gallery" className="section shell editorial-gallery">
      <div className="section-heading-row">
        <SectionTitle
          label="העבודות שלנו"
          title="סטייל שמדבר בעד עצמו."
          description="ילדים אמיתיים. חיוכים אמיתיים. וכל תספורת עם האופי שלה."
        />
        <span className="section-index" aria-hidden="true">
          01 / HAIR ART
        </span>
      </div>
      <div className="filters" role="group" aria-label="סינון גלריה">
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            aria-pressed={filter === category}
            onClick={() => {
              setFilter(category);
              setExpanded(true);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {filtered.length} עבודות בקטגוריה
      </p>
      <div className="portfolio-hint">
        <span>ילדים אמיתיים. אמנות עם אופי. · גללו הצידה כדי לגלות</span>
        <div className="portfolio-controls">
          <button className="icon-button" aria-label="גלילה לעבודות קודמות" onClick={() => rail.current?.scrollBy({left: rail.current.clientWidth * 0.7, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"})}><ArrowRight size={18}/></button>
          <button className="icon-button" aria-label="גלילה לעבודות נוספות" onClick={() => rail.current?.scrollBy({left: -rail.current.clientWidth * 0.7, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"})}><ArrowLeft size={18}/></button>
        </div>
      </div>
      <div
        key={filter}
        ref={rail}
        className="gallery-grid"
        tabIndex={0}
        aria-label="עבודות שיער — גלילה אופקית"
      >
        {visible.map((item, index) => (
          <button
            key={item.id}
            className="gallery-card"
            onClick={(event) => open(item, event.currentTarget)}
            aria-label={`הגדלת התמונה: ${item.title}`}
          >
            <div className="gallery-photo">
              <Image
                src={`/images/photo-${item.id}.webp`}
                alt={item.title}
                fill
                sizes="(max-width: 700px) 90vw, 60vw"
                style={{ objectPosition: item.position }}
              />
              <span className="image-expand">
                <span>צפו בעבודה</span>
                <ArrowUpLeft size={23} />
              </span>
              <span className="image-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="gallery-caption">
              <h3>{item.title}</h3>
              <span>{item.category}</span>
            </div>
          </button>
        ))}
      </div>
      {filtered.length > 6 && (
        <div className="center">
          <button
            className="button button-outline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "הצגת פחות עבודות" : "עוד קצת השראה"}
            <Plus size={18} className={expanded ? "rotate-45" : ""} />
          </button>
        </div>
      )}
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="גלריית תספורות — תמונה מוגדלת"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            step(1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            step(-1);
          }
        }}
      >
        <button
          className="lightbox-close icon-button"
          onClick={close}
          aria-label="סגירת התמונה"
        >
          <X />
        </button>
        {selected && (
          <div className="lightbox-content">
            <div className="lightbox-image">
              <Image
                src={`/images/photo-${selected.id}.webp`}
                alt={selected.title}
                fill
                sizes="90vw"
              />
            </div>
            <div className="lightbox-controls">
              <button
                className="icon-button"
                onClick={() => step(-1)}
                aria-label="התמונה הקודמת"
              >
                <ArrowRight />
              </button>
              <div>
                <h3>{selected.title}</h3>
                <span>
                  {selected.category} ·{" "}
                  {filtered.findIndex((x) => x.id === selected.id) + 1} /{" "}
                  {filtered.length}
                </span>
              </div>
              <button
                className="icon-button"
                onClick={() => step(1)}
                aria-label="התמונה הבאה"
              >
                <ArrowLeft />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
