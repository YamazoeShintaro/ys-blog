import Image from "next/image";
import Link from "next/link";

import { CategoryProps } from "@/components/types/Props";
import { getAllSortedPostsData } from "@/lib/posts";

export default async function ArticleCardList({ category }: CategoryProps) {
  const allSortedPostsData = await getAllSortedPostsData();

  return (
    <>
      {category === "new" ?
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', width: '90%' }}>
          {allSortedPostsData?.map((item, index) => (
            <Link href={`/posts/${item!.id}`} key={index} className="mb-8 justify-center">
              <div style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)', transition: 'background-color 0.3s, box-shadow 0.3s' }} >
                <div className="image-container">
                  <Image
                    src={`/thumbnail-images/${item?.topics}.jpg`}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div style={{ padding: '8px 10px' }}>
                  <div>{item?.title}</div>
                  <div style={{ color: '#9e9e9e', fontSize: '13px' }}>{item?.date}</div>
                </div>
              </div>
            </Link>
          ))}
        </div> :
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', width: '90%' }}>
          {allSortedPostsData?.filter(postData => postData?.topics === category).map((item, index) => (
            <Link href={`/posts/${item!.id}`} key={index} className="mb-8 justify-center">
              <div style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)', transition: 'background-color 0.3s, box-shadow 0.3s' }} >
                <div className="image-container">
                  <Image
                    src={`/thumbnail-images/${item?.topics}.jpg`}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div style={{ padding: '8px 10px' }}>
                  <div>{item?.title}</div>
                  <div style={{ color: '#9e9e9e', fontSize: '13px' }}>{item?.date}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      }
    </>
  );
};