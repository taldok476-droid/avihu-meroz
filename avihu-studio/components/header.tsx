"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpLeft } from "lucide-react";
import { navigation, site } from "@/data/site";
import { Brand } from "./brand";
import { Address } from "./address";
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 35);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  useEffect(() => {
    const hashId = window.location.hash.slice(1);
    if (navigation.some(([, id]) => id === hashId)) setActiveId(hashId);

    const sections = navigation
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (current?.target.id) setActiveId(current.target.id);
      },
      { rootMargin: "-18% 0px -68% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  function closeMenu() {
    dialog.current?.close();
    setOpen(false);
    toggle.current?.focus();
  }
  function openMenu() {
    dialog.current?.showModal();
    setOpen(true);
  }
  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <Brand />
        <nav aria-label="ניווט ראשי" className="desktop-nav">
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeId === id ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a href={site.bookingUrl} className="button button-small header-book">
          קביעת תור <ArrowUpLeft size={17} />
        </a>
        <button
          className="menu-button"
          ref={toggle}
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={openMenu}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <dialog
        ref={dialog}
        className="menu-dialog"
        aria-label="תפריט ניווט"
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
      >
        <div className="menu-dialog-top">
          <Brand onClick={closeMenu} />
          <button
            className="menu-close"
            aria-label="סגירת תפריט"
            onClick={closeMenu}
          >
            <X />
          </button>
        </div>
        <p className="menu-kicker" lang="en" dir="ltr">
          AVIHU MEROZ / HAIR ART STUDIO
        </p>
        <nav id="mobile-nav" className="mobile-nav" aria-label="ניווט לנייד">
          {navigation.map(([label, id], index) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              <small>0{index + 1}</small>
              {label}
              <ArrowUpLeft />
            </a>
          ))}
        </nav>
        <div className="menu-bottom">
          <Address />
          <div className="menu-socials">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="פתיחת שיחה עם אביהו בוואטסאפ"
            >
              וואטסאפ ↗
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`אינסטגרם ${site.instagramUsername}`}
            >
              <bdi>{site.instagramUsername}</bdi> ↗
            </a>
          </div>
        </div>
      </dialog>
    </header>
  );
}
