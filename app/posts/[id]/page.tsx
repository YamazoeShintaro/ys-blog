import 'prismjs/themes/prism.css';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import Date from '@/components/elements/date';
import { getAllSortedPostsData } from '@/lib/posts';
import rehypePrism from '@mapbox/rehype-prism';

async function getDetailArticleData(id: string) {
    const allSortedPostsData = await getAllSortedPostsData();

    const postData = allSortedPostsData!.find(item => item?.id === id);
    console.log(`Post Data for ID ${id}: ${JSON.stringify(postData)}`);

    if (!postData) {
      // Post not found
      return null;
    }

    // const postData = allSortedPostsData!.filter(item => {
    //     if(item?.id === id) {
    //       return item;
    //     };
    // }).shift();

    const processedContent = await unified()
      .use(remarkParse) // Markdownを解析
      .use(remarkBreaks) // 改行を<br>に変換
      .use(remarkGfm) // GFM (GitHub Flavored Markdown)を解析
      .use(remarkMath) // 数式を解析
      .use(remarkRehype) // remarkのASTをrehypeのASTに変換
      .use(rehypeKatex) // 数式をHTMLに変換
      .use(rehypePrism) // シンタックスハイライト
      .use(rehypeStringify) // HTMLに変換
      .process(postData!.content)

    const contentHtml = processedContent.toString();

    const convertedPostData = {
      ...postData,
      content: contentHtml
    };

    return convertedPostData;
};

export default async function Post({ params }: { params: { id: string } }) {
  const articleData = await getDetailArticleData(params.id);

  if (!articleData) {
    return (
      <main className="flex justify-center">
        <div className="w-4/5 max-w-400">
          <article>
            <h1>Post not found</h1>
          </article>
        </div>
      </main>
    );
  }

  return (
    <main className="flex justify-center">
      <div className="w-4/5 max-w-400">
        <article>
          <h1>{articleData.title}</h1>
          <div className="mb-8">
            <Date dateString={articleData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: articleData.content }} />
        </article>
      </div>
    </main>
  );
};
