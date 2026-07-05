import type { Metadata } from "next";
import { Calistoga, IBM_Plex_Mono } from "next/font/google";
import { PinnedPagesProvider } from "@/hooks/PinnedPagesContext";
import { ActivePageManager } from "@/components/ActivePageManager";
import SummaryBox from "@/components/left-section/Summary";
import SkillStackBox from "@/components/left-section/SkillStack";
import RecentsMenu from "@/components/right-section/RecentsMenu";

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
      <PinnedPagesProvider>
        <body
          className={`relative h-screen grid grid-cols-[1.5fr_3.4fr_0.8fr] pl-4 py-4
                    ${calistogaSans.variable} ${ibmMono.variable} antialiased overflow-none`}
        >
          {/* full page view */}
          <ActivePageManager />
          {/* Left Section */}
          <section className="*:border-4 mt-3">
            <SummaryBox />
            <SkillStackBox />
            {/* <UnderTheHood opened={false} /> */}
          </section>
          {children}
          {/* Right Section */}
          <section>
            <RecentsMenu />
          </section>
        </body>
      </PinnedPagesProvider>
    </html>
  );
}
