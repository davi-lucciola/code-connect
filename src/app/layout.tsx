import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import { Aside } from "@/components/aside";
import "./globals.css";
import { SearchBar } from "@/components/search-bar";

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs",
};

const promptFont = Prompt({
  weight: ["200", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={promptFont.className}>
      <body>
        <div className="app-container">
          <div>
            <Aside />
          </div>
          <div className="main-content">
            <SearchBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
