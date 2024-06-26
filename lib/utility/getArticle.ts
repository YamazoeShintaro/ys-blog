import matter from 'gray-matter';

export async function fetchGithubRepo(url: string) {
  try {
    const res = await fetch(url, {
      headers: {
        "Authorization": `token ${process.env.GITHUB_TOKEN}`
      }
    });
    if (!res.ok) {
      throw new Error(`ステータスコードエラー：${res.status}`);
    }
    const data = await res.json();
    console.log('Fetched repo data:', data);
    return data;
  } catch (err) {
    console.error(`repofetchデータの処理中にエラー：${err}`);
  }
}

export async function fetchGithubMakeArticle(url: string, fileName: string) {
  try {
    const res = await fetch(url + fileName, {
      headers: {
        "Authorization": `token ${process.env.GITHUB_TOKEN}`
      }
    });
    if (!res.ok) {
      throw new Error(`ステータスコードエラー：${res.status}`);
    }
    const data = await res.json();
    const buffer = Buffer.from(data.content, "base64");
    const fileContents = buffer.toString("utf-8");
    const matterResult = matter(fileContents);
    if (!matterResult.data.published) {
      return null;
    }
    const articleData = {
      id: fileName.replace(/\.md$/, ""),
      ...(matterResult.data as { title: string; emoji: string; type: string; topics: string[]; published: boolean; date: string; }),
      content: matterResult.content,
      from: "Zenn"
    };
    console.log('Fetched article data:', articleData);
    return articleData;
  } catch (err) {
    console.error(`contentfetchデータの処理中にエラー：${err}`);
    return null;
  }
}
