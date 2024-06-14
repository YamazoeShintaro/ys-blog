import Body from "@/components/layouts/body/Body";
import Header from "@/components/layouts/header/Header";
import MenuBar from "@/components/layouts/menuBar/MenuBar";
import { ArticleResponse } from "@/components/types/Response";
import { generateFeedXml } from "@/lib/generators";
import { getSortedPostsData } from "@/lib/posts";
import { getUserData } from "@/lib/user";
import { fetchGithubMakeArticle, fetchGithubRepo } from "@/lib/utility/getArticle";
// import { Article } from "@/components/types/Article";
// import { generateFeedXml } from "@/lib/generators";
// import { getPostsData, getSortedPostsData } from "@/lib/posts";
// import { getUserData } from "@/lib/user";
// import { GetStaticProps } from "next";

export default async function HomePage() {
    return (
        <main>
            <Header />
            <MenuBar currentPage="home"/>
            <Body tag='最新記事'/>
        </main>
    );
};
