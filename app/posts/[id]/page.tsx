import 'prismjs/themes/prism.css';

import React from 'react';
import { unified } from 'unified';
import html from 'remark-html'
// import prism from 'remark-prism'
import rehypePrism from '@mapbox/rehype-prism';
// import gfm from 'remark-gfm'
import remarkGfm from 'remark-gfm';
//マークダウンから数式を解析
// import math from 'remark-math'
import remarkMath from 'remark-math';
//解析された数式をkatexが読み込めるようにHTML変換する。
// import htmlKatex from 'remark-html-katex'
import rehypeKatex from 'rehype-katex';
import { ArticleResponse } from "@/components/types/Response";
import { getUserData } from "@/lib/user";
import { fetchGithubMakeArticle, fetchGithubRepo } from "@/lib/utility/getArticle";
import { TagProps } from "@/components/types/Props";
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostIds } from '@/lib/posts';
import Header from '@/components/layouts/header/Header';
import Date from '@/components/elements/date';
import { remark } from 'remark';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

async function getDetailArticleData(id: string) {
    // コンポーネント化する------------------------------------------------------------------------------------------------------------------------------
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

    // --------------------------------------------------------------------------------------------------------------------------------------------------

    const allPostsData = removeFalsyDatas;

    // const paths = getAllPostIds(allPostsData);

    // const params = {
    //     paths: paths,
    //     fallback: false,
    // }

    const postData = allPostsData?.filter(item => {
        if(item?.id === id) {
          return item;
        };
    }).shift();

    const processedContent = await unified()
      // .use(remarkMath)
      // .use(rehypeKatex)
      // .use(rehypePrism)
      // .use(remarkGfm)
      // .use(html, { sanitize: false })
      .use(remarkParse) // Markdownを解析
      .use(remarkMath) // 数式を解析
      .use(remarkGfm) // GFM (GitHub Flavored Markdown)を解析
      .use(remarkRehype) // remarkのASTをrehypeのASTに変換
      .use(rehypeKatex) // 数式をHTMLに変換
      .use(rehypePrism) // シンタックスハイライト
      .use(rehypeStringify) // HTMLに変換
      .process(postData?.content)
    const contentHtml = processedContent.toString();

    const convertedPostData = {
      ...postData,
      content: contentHtml
    };

    // const convertedPostData = await getHtmlContent(postData)
    const userData = await getUserData()
    return {
        props: {
            articleData: convertedPostData,
            userData: userData
        }
    }
}

export default async function Post({ params }: { params: {id: string} }) {
  const postAndUserData = getDetailArticleData(params.id);
  const { articleData, userData } = (await postAndUserData).props;

  return (
    <main>
      <Header />
      <article>
      <h1>{articleData?.title}</h1>
                <div>
                    <Date dateString={articleData!.date!} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: articleData!.content }} />
      </article>
    </main>
  );
};
