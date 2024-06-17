import Body from "@/components/layouts/body/Body";
import Header from "@/components/layouts/header/Header";
import MenuBar from "@/components/layouts/menuBar/MenuBar";

export default async function HomePage() {
    return (
        <main>
            <MenuBar currentPage="home"/>
            <Body tag="最新記事"/>
        </main>
    );
};
