import Body from "@/components/layouts/body/Body";
import MenuBar from "@/components/layouts/menuBar/MenuBar";

export default async function HomePage() {
    return (
        <main>
            <MenuBar currentPage="home"/>
            <Body category="new" pageTitle="最新記事"/>
        </main>
    );
};
