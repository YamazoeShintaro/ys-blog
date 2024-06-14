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
import { fetchGithubRepo, fetchGithubMakeArticle } from '@/lib/utility/getArticle';

export async function GET(req: Request) {
  const zennArticles: ArticleResponse[] = await fetchGithubRepo('https://api.github.com/repos/YamazoeShintaro/zenn-articles/contents/articles');

  const datas = await (async (zennArticles) => {
    if (zennArticles) {
      return await Promise.all(zennArticles.map( async (article: ArticleResponse) => {
        return fetchGithubMakeArticle('https://api.github.com/repos/YamazoeShintaro/zenn-articles/contents/articles', article.name);
      }));
    }
  })(zennArticles);

  const removeFalsyDatas = datas?.filter(Boolean);
  console.log(removeFalsyDatas);

  return removeFalsyDatas;
}