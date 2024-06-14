import { Article } from "./Article";

export type TagProps = {
    tag: string;
};

export type CurrentPageProps = {
    currentPage: string;
};

export type postItemProps = {
    postItem: Article | undefined;
};