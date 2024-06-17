import { Article } from "@/components/types/Article";
import { ArticleResponse } from "@/components/types/Response";
import { fetchGithubMakeArticle, fetchGithubRepo } from "./utility/getArticle";

// export async function getSortedPostsData(articles: Article[]){
//   return articles.sort((a, b) => {
//     if (a.date === b.date){
//       return 0;
//     };
//     if (a.date < b.date) {
//         return 1;
//     } else {
//         return -1;
//     };
//   });
// };

// export function getAllPostIds(articles: Article[]) {
//   return articles?.map((article: Article | undefined) => {
//     return {
//       params: {
//           id: article?.id
//       }
//     };
//   });
// };

// export function getPostData(articles: Article[], id: string) {
//   return articles.filter((article: Article) => {
//     if(article.id === id) {
//       return article;
//     };
//   });
// };

export async function getAllSortedPostsData() {
  const zennArticles: ArticleResponse[] = await fetchGithubRepo("https://api.github.com/repos/YamazoeShintaro/zenn-articles/contents/articles");

  const datas = await (async (zennArticles) => {
    if (zennArticles) {
      return await Promise.all(zennArticles.map( async (article: ArticleResponse) => {
        return fetchGithubMakeArticle("https://api.github.com/repos/YamazoeShintaro/zenn-articles/contents/articles/", article.name);
      }));
    }
  })(zennArticles);

  const removeFalsyDatas = datas?.filter(Boolean);

  const allSortedPostsData = removeFalsyDatas?.sort((a, b) => {
    if (a!.date === b!.date){
      return 0
    }
    if (a!.date < b!.date) {
      return 1
    } else {
      return -1
    }
  })

  return allSortedPostsData;
}