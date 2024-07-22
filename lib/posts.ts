import { ArticleResponse } from "@/components/types/Article";
import { fetchGithubMakeArticle, fetchGithubRepo } from "@/lib/utility/getArticle";

export async function getAllSortedPostsData() {
  const zennArticles = await fetchGithubRepo("https://api.github.com/repos/YamazoeShintaro/zenn-articles/contents/articles");

  const datas = await (async (zennArticles) => {
    if (zennArticles) {
      return await Promise.all(zennArticles.map(async (article: ArticleResponse) => {
        const articleData = await fetchGithubMakeArticle("https://api.github.com/repos/YamazoeShintaro/zenn-articles/contents/articles/", article.name);
        return articleData || null;
      }));
    }
    return [];
  })(zennArticles);

  const removeFalsyDatas = datas?.filter(Boolean);

  console.log('Filtered valid articles:', removeFalsyDatas);

  const allSortedPostsData = removeFalsyDatas?.sort((a, b) => {
    if (a!.date === b!.date) {
      return 0;
    }
    return a!.date < b!.date ? 1 : -1;
  });

  return allSortedPostsData;
};
