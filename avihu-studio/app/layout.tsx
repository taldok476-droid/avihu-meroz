import type { Metadata } from "next";
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/500.css";
import "@fontsource/heebo/700.css";
import "@fontsource/heebo/800.css";
import "@fontsource/heebo/900.css";
import "./globals.css";
import { site } from "@/data/site";
export const metadata: Metadata = {
  title: "אביהו מרוז | תספורות ילדים, אמנות שיער ואקדמיה",
  description: `הסטודיו של אביהו מרוז ב${site.location}. תספורות ילדים, פיידים מדויקים, אמנות שיער ואקדמיה לספרות עם יחס אישי.`,
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
