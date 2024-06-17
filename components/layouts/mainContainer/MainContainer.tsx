import { CategoryProps } from "@/components/types/Props";
import ArticleCardList from "@/features/ArticleCardList/ArticleCardList";

export default async function MainContainer({ category }: CategoryProps) {
    return (
        <div>
            <h1 className="border-solid border-b border-shine-muscat mx-12 pt-2 pb-4 text-2xl font-light flex justify-center">{category}</h1>
            <div className="mt-6">
                <ArticleCardList category={category}/>
            </div>
        </div>
    );
};