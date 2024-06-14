import type { Metadata } from "next";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from "@/components/layouts/header/Header";
config.autoAddCss = false

export const metadata: Metadata = {
  title: "ys-blog",
  description: "駆け出しエンジニアのブログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-cream-blue">{children}</body>
    </html>
  );
}
