import type { Metadata } from "next";
import "./globals.css";
import "./prism.css";

import Header from "@/components/layouts/header/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata: Metadata = {
    icons: "",
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
            <body className="bg-cream-blue">
                <Header />
                {children}
            </body>
        </html>
    );
}
