import React, { FC } from 'react';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';

interface PostItemProps {
    post: IPost,
    remove: (post: IPost) => void,
    update: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {

    const [deletePost] = postAPI.useDeletePostMutation()
    const [updatePost] = postAPI.useUpdatePostMutation()

    const handleDelete = async (id: number) => {
        // const title = prompt()
        await deletePost({id} as IPost)
    }

    const handleUpdate = async (id: number) => {
        const newTitle = prompt()
        await updatePost({title: newTitle, id} as IPost)
    }

    return (
        <div className='post'>
            <p onClick={() => handleUpdate(post.id)}>{post.id} - {post.title}</p>
            <button onClick={() => handleDelete(post.id)}>DEL</button>
        </div>
    );
};

export default PostItem;