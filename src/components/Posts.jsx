
import Post from './Post';
import { Link, useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts: {Posts.length}</h2>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                    
                }
            </div>
        </div>
    );
};

export default Posts;