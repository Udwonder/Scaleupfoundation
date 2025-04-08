import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose weights you need
  variable: '--font-poppins' // Optional: for CSS variable usage
});

export const metadata: Metadata = {
  title: "ScaleUp Foundation | Empowering Communities Through Education & Innovation",
  description:
    "ScaleUp Foundation empowers individuals and communities through targeted skills development, education, and innovation. We drive inclusive economic growth, create social impact, and foster lifelong learning.",
  keywords: [
    "ScaleUp Foundation",
    "skills development",
    "community empowerment",
    "education",
    "innovation",
    "mentorship",
    "entrepreneurship training",
    "humanitarian aid",
    "inclusive growth",
    "sustainable development",
  ],
  authors: [{ name: "Udemeobong Essien", url: "https://www.linkedin.com/in/udemeobong-essien-311726ba/" }],
  creator: "ScaleUp Foundation",
  publisher: "ScaleUp Foundation",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.scaleupfoundation.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.scaleupfoundation.org",
    title: "ScaleUp Foundation | Empowering Communities Through Education & Innovation",
    description:
      "Building a future where all individuals have the skills and opportunities to thrive, driving innovation and fostering inclusive, sustainable development.",
    siteName: "ScaleUp Foundation",
    // Replace with your actual OG image URL
    images: [
      {
        url: "[https://scaleupfoundation.vercel.app/_next/static/media/icon.6c1ef42b.svg]", // Replace this with your OG image URL
        width: 1200,
        height: 630,
        alt: "ScaleUp Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleUp Foundation | Empowering Communities Through Education & Innovation",
    description:
      "Empowering individuals through targeted skills development, education, and innovation. Join our mission to create inclusive growth and sustainable development.",
    // Replace with your actual Twitter image URL (can be same as OG image)
    images: ["https://scaleupfoundation.vercel.app/_next/static/media/icon.6c1ef42b.svg", "https://scaleupfoundation.vercel.app/images/udeme.jpg"], // Replace this with your OG image URL
    creator: "@scaleupfoundation", // Replace with actual Twitter handle if available
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "Non-profit Organization",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}