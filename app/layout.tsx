import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Living Engineering Laboratory",
  description: "A dynamic repository of innovative engineering projects, promoting student-centered learning through hands-on exploration and real-world application.",
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}