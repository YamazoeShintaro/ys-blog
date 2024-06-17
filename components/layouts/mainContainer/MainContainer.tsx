import React from "react";
import { TagProps } from "@/components/types/Props";
import ArticleCardList from "@/features/ArticleCardList/ArticleCardList";

const MainContainer = async ({ tag }: TagProps) => {
    return (
        <div className="">
            <h1 className="border-solid border-b mx-16 py-2 text-3xl font-light flex justify-center">{tag}</h1>
            <div className="mt-4">
                <ArticleCardList tag={tag}/>
            </div>
        </div>
  );
};

export default MainContainer;