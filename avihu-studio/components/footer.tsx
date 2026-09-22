import { ArrowUp, CalendarDays, MessageCircle } from "lucide-react";
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
