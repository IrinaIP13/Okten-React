import type {PostModel} from "../../models/PostModel.ts";
import type {FC} from "react";

type PostProps = {
    post: PostModel
}

export const Post:FC<PostProps> = ({post: {id, title, body }}) => {
    return (
        <div>
            <h2>{id}. {title}</h2> <p> "{body}" </p>
        </div>
    );
};