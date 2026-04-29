import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sanidhy – Full Stack Web Developer | React, Next.js Portfolio",
  description:
    "Sanidhy is a full stack web developer specializing in React, Next.js, Node.js, and MongoDB. View portfolio projects, skills, and contact details.",
  keywords:
    "Sanidhy, Sanidhy web developer, Sanidhy portfolio, full stack web developer, React developer, Next.js developer",
  authors: [{ name: "Sanidhy" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Sanidhy – Full Stack Web Developer | Portfolio",
    description:
      "Explore Sanidhy's full stack web development portfolio featuring React, Next.js, Node.js, and MongoDB projects.",
    url: "https://sanidhy-portfolio.vercel.app/",
    images: [{ url: "/pfp.jpg", alt: "Sanidhy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanidhy – Full Stack Web Developer | Portfolio",
    description:
      "Full stack web developer portfolio showcasing React, Next.js, and backend projects.",
    images: ["/pfp.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/pfp.jpg" />
        <link
          rel="canonical"
          href="https://sanidhy-portfolio.vercel.app/"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z6YKXX5FYZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-Z6YKXX5FYZ');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sanidhy",
              url: "https://sanidhy-portfolio.vercel.app/",
              jobTitle: "Full Stack Web Developer",
              sameAs: [
                "https://github.com/SanidhyaGupta-10",
                "https://www.linkedin.com/in/yourprofile",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
