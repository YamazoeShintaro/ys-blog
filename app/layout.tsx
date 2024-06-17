import type { Metadata } from "next";
import "./globals.css";
import "./prism.css";

import Header from "@/components/layouts/header/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata: Metadata = {
    title: "ys-blog",
    description: "【フロントエンドエンジニア】駆け出しエンジニアによる駆け出しエンジニアのためのブログです。日々の学習の中で疑問に思ったことなどをアウトプットとして投稿します。駆け出しエンジニアの方々の参考になれば幸いです。",
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
