export type Article = {
    id: string;
    title: string;
    emoji: string;
    type: string;
    topics: string[];
    published: boolean;
    date: string;
    content: string;
    from: string;
};

export type ArticleResponse = {
    name: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: string;
    _link: {
        self: string;
        git: string;
        html: string;
    };
};