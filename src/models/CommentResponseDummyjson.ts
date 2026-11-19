import type {CommentsModel} from "./CommentsModel.ts";

export interface CommentsResponseDummyjson {
    comments: CommentsModel[],
    skip: number,
    total: number,
    limit: number
}