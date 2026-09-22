import Image from "next/image";

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a
      className="brand"
      href="#home"
      onClick={onClick}
      aria-label="אביהו מרוז — לראש העמוד"
    >
      <Image
        className="brand-logo"
        src="/images/avihu-meroz-logo.png"
        alt="אביהו מרוז — Hair Art Studio"
        width={1254}
        height={1254}
        priority
      />
    </a>
  );
}
