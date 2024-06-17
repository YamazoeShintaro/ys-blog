import Image from "next/image";
import Link from "next/link";

import { CategoryProps } from "@/components/types/Props";
import { getAllSortedPostsData } from "@/lib/posts";

export default async function ArticleCardList({ category }: CategoryProps) {
  const allSortedPostsData = await getAllSortedPostsData();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', width: '90%' }}>
      {allSortedPostsData?.filter(postData => postData?.topics.includes(category)).map((item, index) => (
        <Link href={`/posts/${item!.id}`} key={index} className="mb-8 justify-center">
          {/* TODO: imageはタグの種類分の画像を用意して、タグに合わせたサムネにする */}
          <div style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)', transition: 'background-color 0.3s, box-shadow 0.3s' }} >
            <div className="image-container">
              <Image
                src="/thumbnail_sample.JPG"
                alt="thumbnail"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div style={{ padding: '8px 10px' }}>
              <div className="">{item?.title}</div>
              <div style={{ color: '#9e9e9e', fontSize: '13px' }}>{item?.date}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};