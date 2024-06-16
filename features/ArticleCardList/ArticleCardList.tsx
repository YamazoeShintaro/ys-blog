import { ArticleResponse } from "@/components/types/Response";
import { getUserData } from "@/lib/user";
import { fetchGithubMakeArticle, fetchGithubRepo } from "@/lib/utility/getArticle";
import { TagProps } from "@/components/types/Props";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArticleCardList = async ({ tag }: TagProps) => {
    const zennArticles: ArticleResponse[] = await fetchGithubRepo("https://api.github.com/repos/YamazoeShintaro/zenn-articles/contents/articles");

    // console.log(zennArticles);

    const datas = await (async (zennArticles) => {
      if (zennArticles) {
        return await Promise.all(zennArticles.map( async (article: ArticleResponse) => {
          return fetchGithubMakeArticle("https://api.github.com/repos/YamazoeShintaro/zenn-articles/contents/articles/", article.name);
        }));
      }
    })(zennArticles);

    const removeFalsyDatas = datas?.filter(Boolean);
    // console.log(removeFalsyDatas);

    const sortedPostData = removeFalsyDatas?.sort((a, b) => {
      if (a!.date === b!.date){
        return 0
      }
      if (a!.date < b!.date) {
          return 1
      } else {
          return -1
      }
    })

    // console.log(sortedPostData);

    // if (process.env.PRODUCTION) {
    //   console.log("本番環境のためRSSを生成")
    //   generateFeedXml(sortedPostData)
    // }

    const userData = await getUserData();
    // console.log(userData);

    // tagでフィルターをかけたArticle[]をmapで開いて、ArticleCardに一つずつPropsとして渡す。
    const filteredPostData = sortedPostData?.filter(postData => postData?.topics.includes(tag));

    // console.log(sortedPostData);

    console.log(tag);
    console.log(filteredPostData);
    console.log(3);

  return (
    <div className="grid lg:grid-cols-2 px-10 py-8 gap-10">
      {sortedPostData?.filter(postData => postData?.topics.includes(tag)).map((item, index) => (
        <Link href={`/posts/${item!.id}`} key={index} className="drop-shadow-lg duration-300 hover:opacity-60">
          {/* imageはタグの種類分の画像を用意して、タグに合わせたサムネにする */}
          <Image
              src="/thumbnail_sample.JPG"
              width={600}
              height={600}
              alt="Picture of the author"
          />
          <h2>{item?.title}</h2>
          <p>{item?.date}</p>
        </Link>
      ))}
    </div>
  )
}

export default ArticleCardList;