import type {PostModel} from "../models/PostModel.ts";

const endpointPost = import.meta.env.VITE_API_BASE_URL + '/posts';

const loadPost = async (): Promise<PostModel[]> => {
    return await fetch(endpointPost)
        .then(value => value.json());
}

export { loadPost };