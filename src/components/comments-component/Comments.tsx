import {useEffect, useState} from "react";
import {loadComments} from "../../service/api.service.ts";
import type {CommentsModel} from "../../models/CommentsModel.ts";

export const Comments = () => {
    const [comments, setComments] = useState<CommentsModel[]>([]);
    useEffect(() => {
        async function fetchComments() {
            const allComments = await loadComments();
            setComments(allComments);
        }
        fetchComments();
    }, []);

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h2>{comment.body}</h2>
                    <p>{comment.postId}</p>
                    <p>{comment.likes}</p>
                </div>
            ))}
        </div>
    )};