import type { Metadata } from "next";
import { Calistoga, IBM_Plex_Mono } from "next/font/google";
import SummaryBox from "@/components/left-section/Summary";
import SkillStackBox from "@/components/left-section/SkillStack";
import UnderTheHood from "@/components/left-section/UnderTheHood";
import "./globals.css";

const calistogaSans = Calistoga({
  variable: "--font-sans",
  weight: "400",
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kartik Kumbhar",
  description: "The portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen grid grid-cols-[1fr_2fr] py-6
                    ${calistogaSans.variable} ${ibmMono.variable} antialiased overflow-none`}
      >
        {/* Left Section */}
        <section className="px-4 *:border-4 *:rounded-md ">
          <SummaryBox />
          <SkillStackBox />
          <UnderTheHood opened={false} />
        </section>
        {children}
      </body>
    </html>
  );
}
