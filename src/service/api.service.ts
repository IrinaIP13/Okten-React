import type {PostResponseDummyjson} from "../models/PostResponseDummyjson.ts";
import type {PostModel} from "../models/PostModel.ts";
import type {TodosResponseDummyjson} from "../models/TodosResponseDummyjson.ts";
import type {TodosModel} from "../models/TodosModel.ts";
import type {CommentsModel} from "../models/CommentsModel.ts";
import type {CommentsResponseDummyjson} from "../models/CommentResponseDummyjson.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';

const loadPosts = async () : Promise<PostModel[]> => {
  const response: PostResponseDummyjson = await fetch(endpointPosts)
      .then(value => value.json());

  return response.posts;
};

const loadTodos = async () : Promise<TodosModel[]> => {
    const response: TodosResponseDummyjson = await fetch(endpointTodos)
        .then(value => value.json());

    return response.todos;
};

const loadComments = async () : Promise<CommentsModel[]> => {
    const response: CommentsResponseDummyjson = await fetch(endpointComments)
        .then(value => value.json());

    return response.comments;
};

export {
  loadPosts, loadTodos, loadComments
};