import Body from "@/components/layouts/body/Body";
import Header from "@/components/layouts/header/Header";
import MenuBar from "@/components/layouts/menuBar/MenuBar";
import { ArticleResponse } from "@/components/types/Response";
import { generateFeedXml } from "@/lib/generators";
import { getSortedPostsData } from "@/lib/posts";
import { getUserData } from "@/lib/user";
import { fetchGithubMakeArticle, fetchGithubRepo } from "@/lib/utility/getArticle";
import React from 'react';
import {TagProps} from "@/components/types/Props";
import ArticleCardList from "@/features/ArticleCardList/ArticleCardList";

const MainContainer = async ({ tag }: TagProps) => {
    return (
        <div>
            <h1 className='border-solid border-b mx-16 pt-8 pb-2 text-3xl font-light flex justify-center'>{tag}</h1>
            <ArticleCardList tag={tag}/>
        </div>
  );
};

export default MainContainer;