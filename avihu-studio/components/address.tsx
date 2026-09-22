import { site } from "@/data/site";
export function Address() {
  return (
    <span className="studio-address" dir="rtl">
      {site.addressLines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </span>
  );
}
