import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kurniadi Ilham | DevSecOps & Platform Engineer",
  description: "Portfolio website of Kurniadi Ilham, a DevSecOps and Platform Engineer specializing in cloud infrastructure, Kubernetes, and security best practices.",
  keywords: ["DevSecOps", "Platform Engineer", "Cloud", "Kubernetes", "Security", "Infrastructure", "DevOps", "AWS", "GCP", "Azure", "Terraform", "Docker"],
  authors: [{ name: "Kurniadi Ilham" }],
  creator: "Kurniadi Ilham",
  metadataBase: new URL("https://kurniadi-ilham.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kurniadi Ilham | DevSecOps & Platform Engineer",
    description: "Portfolio website of Kurniadi Ilham, a DevSecOps and Platform Engineer specializing in cloud infrastructure, Kubernetes, and security best practices.",
    url: "https://kurniadi-ilham.dev",
    siteName: "Kurniadi Ilham Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurniadi Ilham | DevSecOps & Platform Engineer",
    description: "Portfolio website of Kurniadi Ilham, a DevSecOps and Platform Engineer specializing in cloud infrastructure, Kubernetes, and security best practices.",
  },
  icons: {
    icon: "/ki-favicon.svg",
  },
  verification: {
    google: "google-site-verification-code", // You'll need to replace this with your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
