import type {PostResponseDummyjson} from "../models/PostResponseDummyjson.ts";
import type {PostModel} from "../models/PostModel.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';

const loadPosts = async () : Promise<PostModel[]> => {
  const response: PostResponseDummyjson = await fetch(endpointPosts)
      .then(value => value.json());

  return response.posts;
};

export {
  loadPosts
};