import { CategoryProps } from "@/components/types/Props";
import ArticleCardList from "@/features/ArticleCardList/ArticleCardList";

export default async function MainContainer({ category }: CategoryProps) {
    return (
        <div>
            <p className="border-solid border-b border-shine-muscat mx-12 pt-6 pb-4 text-2xl font-light flex justify-center">
                {category}
            </p>
            <div className="mt-6 flex justify-center">
                <ArticleCardList category={category}/>
            </div>
        </div>
    );
};