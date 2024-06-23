import { CategoryProps } from "@/components/types/Props";
import ArticleCardList from "@/features/ArticleCardList/ArticleCardList";

export default async function MainContainer({ category, pageTitle }: CategoryProps) {
    return (
        <div>
            <p className="border-solid border-b border-shine-muscat mx-12 pt-6 pb-4 text-2xl font-light flex justify-center">
                {pageTitle}
            </p>
            <div className="mt-6 flex justify-center">
                <ArticleCardList category={category} pageTitle={pageTitle}/>
            </div>
        </div>
    );
};