import "./globals.css";

export const metadata = {
  title: "Launchlane | Websites for startups ready to move",
  description:
    "Launchlane builds sharp, strategic websites for small startups moving fast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
