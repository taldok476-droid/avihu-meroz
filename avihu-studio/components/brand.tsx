export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a
      className="brand"
      href="#home"
      onClick={onClick}
      aria-label="אביהו מרוז — לראש העמוד"
    >
      <span lang="en" dir="ltr">
        AM<span>®</span>
      </span>
      <small>
        אביהו מרוז
        <br />
        HAIR ART STUDIO
      </small>
    </a>
  );
}
