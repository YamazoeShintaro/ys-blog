import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import gfm from 'remark-gfm';
//マークダウンから数式を解析
import math from 'remark-math';
//解析された数式をkatexが読み込めるようにHTML変換する。
import htmlKatex from 'remark-html-katex';
import { ArticleResponse } from '@/components/types/Response';
import { Article } from '@/components/types/Article';
import { fetchGithubRepo, fetchGithubMakeArticle } from './utility/getArticle';

// export async function getPostsData() {
//   const zennArticles: ArticleResponse[] = await fetchGithubRepo('https://api.github.com/repos/YamazoeShintaro/zenn-articles/contents/articles')

//   const datas = await (async (zennArticles) => {
//     if (zennArticles) {
//       return await Promise.all(zennArticles.map( async (article: ArticleResponse) => {
//         return fetchGithubMakeArticle('https://api.github.com/repos/YamazoeShintaro/zenn-articles/contents/articles', article.name)
//       }));
//     }
//   })(zennArticles);

//   const removeFalsyDatas = datas?.filter(Boolean);
//   return removeFalsyDatas;
// }

export async function getSortedPostsData(articles: Article[]){
  return articles.sort((a, b) => {
    if (a.date === b.date){
      return 0
    }
    if (a.date < b.date) {
        return 1
    } else {
        return -1
    }
  })
}

// export async function getHtmlContent(article: Article) {
//   const processedContent = await remark()
//     .use(math)
//     .use(htmlKatex)
//     .use(prism)
//     .use(gfm)
//     .use(html, { sanitize: false })
//     .process(article.content)
//   const contentHtml = processedContent.toString()
//   return {
//     ...article,
//     content: contentHtml
//   }
// }

export function getAllPostIds(articles: Article[]) {
  return articles.map((article: Article) => {
    return {
      params: {
          id: article.id
      }
    }
  })
}

export function getPostData(articles: Article[], id: string) {
  return articles.filter((article: Article) => {
    if(article.id === id) {
      return article
    }
  })
}