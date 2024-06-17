import { ArticleResponse } from "@/components/types/Response";
import { getUserData } from "@/lib/user";
import { fetchGithubMakeArticle, fetchGithubRepo } from "@/lib/utility/getArticle";
import { TagProps } from "@/components/types/Props";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllSortedPostsData } from "@/lib/posts";

const ArticleCardList = async ({ tag }: TagProps) => {
    const allSortedPostsData = await getAllSortedPostsData();

    // tagでフィルターをかけたArticle[]をmapで開いて、ArticleCardに一つずつPropsとして渡す。
    // const filteredPostData = sortedPostData?.filter(postData => postData?.topics.includes(tag));

  return (
    <div className="flex flex-col items-center">
      {allSortedPostsData?.filter(postData => postData?.topics.includes(tag)).map((item, index) => (
        <Link href={`/posts/${item!.id}`} key={index} className="w-2/3 mb-8">
          {/* imageはタグの種類分の画像を用意して、タグに合わせたサムネにする */}
          <div style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)', transition: 'background-color 0.3s, box-shadow 0.3s' }} >
            <div className="image-container">
              <Image
                  src="/thumbnail_sample.JPG"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="contain"
              />
            </div>
            <div style={{ padding: '8px 10px' }}>
              <div className="text-xl">{item?.title}</div>
              <div style={{ color: '#9e9e9e'}}>{item?.date}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ArticleCardList;