import {useEffect, useState} from "react";
import type {PostModel} from "../../models/PostModel.ts";
import {Post} from "../post-component/Post.tsx";
import {loadPost} from "../../servises/api.servise.ts";

export const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    useEffect(() => {
        loadPost().then(value => setPosts(value));
    }, []);

    return (
        <>
            {
                posts.map(post => <Post post={post} key={post.id} />)
            }
        </>
    );
};