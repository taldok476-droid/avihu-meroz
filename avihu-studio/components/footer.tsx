import {
  ArrowUp,
  CalendarDays,
  Instagram,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Brand } from "./brand";
import { site, navigation } from "@/data/site";
import { Address } from "./address";
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="shell footer-main">
          <Brand />
          <nav aria-label="קישורים בתחתית האתר">
            {navigation.slice(1).map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a href="#home" className="back-top" aria-label="חזרה לראש העמוד">
            <ArrowUp size={20} />
          </a>
        </div>
        <div className="shell footer-bottom">
          <span>
            © {new Date().getFullYear()} אביהו מרוז. כל הזכויות שמורות.
          </span>
          <Address />
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`אינסטגרם ${site.instagramUsername}`}
          >
            <bdi>{site.instagramUsername}</bdi> ↗
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="פתיחת שיחה עם אביהו בוואטסאפ"
          >
            וואטסאפ ↗
          </a>
        </div>
        <div className="shell footer-mobile">
          <div className="footer-mobile-heading">
            <Brand />
            <a href="#home" className="back-top" aria-label="חזרה לראש העמוד">
              <ArrowUp size={18} />
            </a>
          </div>
          <nav aria-label="קישורים בתחתית האתר לנייד">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="footer-mobile-contact">
            <Address />
            <a href={`tel:${site.phone}`}>
              <Phone size={17} aria-hidden="true" />
              <bdi>{site.phoneDisplay}</bdi>
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={17} aria-hidden="true" />
              <bdi>{site.instagramUsername}</bdi>
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} aria-hidden="true" />
              וואטסאפ
            </a>
          </div>
          <p className="footer-mobile-copyright">
            © {new Date().getFullYear()} אביהו מרוז. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
      <div className="mobile-booking">
        <a href={site.bookingUrl || "#contact"}>
          <CalendarDays size={19} />
          קביעת תור
        </a>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={19} />
          וואטסאפ
        </a>
      </div>
      <a
        className="floating-whatsapp"
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="פתיחת שיחה עם אביהו בוואטסאפ"
      >
        <MessageCircle />
      </a>
    </>
  );
}
