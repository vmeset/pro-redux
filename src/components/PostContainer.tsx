import React, { useEffect, useState } from 'react';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
    const [limit, setLimit] = useState(50)
    const {data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, ] = postAPI.useCreatePostMutation()

    // useEffect(() => {
    //   setTimeout(() => {
    //     setLimit(3)
    //   }, 2000)
    // }, [])
    
    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    return (
        <div>
            <button onClick={handleCreate}>add</button>
            <div className='post__list'>
                {isLoading && <h1>loading...</h1>}
                {error && <h1>error!</h1>}
                {posts && posts.map(post => 
                    <PostItem key={post.id} post={post} />    
                )}        
            </div>
        </div>
    );
};

export default PostContainer;