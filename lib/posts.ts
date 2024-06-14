import { Article } from "@/components/types/Article";

export async function getSortedPostsData(articles: Article[]){
  return articles.sort((a, b) => {
    if (a.date === b.date){
      return 0;
    };
    if (a.date < b.date) {
        return 1;
    } else {
        return -1;
    };
  });
};

export function getAllPostIds(articles: Article[]) {
  return articles?.map((article: Article | undefined) => {
    return {
      params: {
          id: article?.id
      }
    };
  });
};

export function getPostData(articles: Article[], id: string) {
  return articles.filter((article: Article) => {
    if(article.id === id) {
      return article;
    };
  });
};