export declare type Tag = {
    id: string;
    name: string;
    detailUrl: string;
    createdDate: string;
}

export declare type TagList = {
    count: number;
    next?: string;
    previous?: string;
    results: Tag[];
}