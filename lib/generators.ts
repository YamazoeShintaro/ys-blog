import fs from "fs";
import { Feed } from "feed";
import { aboutBlog } from "@/blogSettings/aboutBlog";
import { Article } from "@/components/types/Article";

export async function generateFeedXml(posts: Article[]){
  const date = new Date();
  const author = {
    name: "YS",
  };

  const feed = new Feed({
    title: aboutBlog.title,
    description: aboutBlog.description,
    id: aboutBlog.url,
    link: aboutBlog.url,
    language: "ja", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: `${aboutBlog.url}favicon/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, ${aboutBlog.title}`,
    updated: date, // optional, default = today
    generator: "Feed", // optional, default = "Feed for Node.js"
    feedLinks: {
      json: `${aboutBlog.url}rss/json`,
      atom: `${aboutBlog.url}rss/atom`,
      rss2: `${aboutBlog.url}rss/atom`,
    },
    author: author,
  });

  for(const post of posts) {
    // 記事の内容から約140文字のdescriptionを作成する。
    const markdownContent = post.content;
    const text140 = markdownContent.slice(0, 140);
    const removedSymbol = text140.replace(/\`|\[記事\]\[[0-9]\]|\n#+[\s\S]*?\n|#+[\s\S]*|\n|-|>/g, "");
    const description = removedSymbol + "...";

    feed.addItem({
      title: post.title,
      id: `${aboutBlog.url}posts/${post.id}`,
      link: `${aboutBlog.url}posts/${post.id}`,
      description: description,
      content: post.content,
      date: new Date(post.date),
    });
  };
  feed.addCategory("Technologie");

  // フィード情報を public/rss 配下にディレクトリを作って保存
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}