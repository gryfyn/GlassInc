import './globals.css'

export const metadata = {
  title: "Glass Inc — Clarity. Precision. Innovation.",
  description: "IT freelancing services: web, mobile, AI automation, marketing, design, SEO, software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
