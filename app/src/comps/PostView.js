import {useContext} from 'react';
import mainContext from "../context/mainContext";
import WriteComment from "./WriteComment";

const PostView = ({index, post}) => {
    const {getCurrentUser, getPosts, setPosts} = useContext(mainContext)

    function like() {
        if (!getPosts[index].likes.includes(getCurrentUser.username)) {
            getPosts[index].likes.push(getCurrentUser.username)
            setPosts([...getPosts])
        } else {
            getPosts[index].likes = getPosts[index].likes.filter(x => x !== getCurrentUser.username)
            setPosts([...getPosts])
        }
    }

    return (
        <div className="card">
            <div>{post.title}</div>
            <div>{post.article}</div>
            <div><b>{post.username}</b></div>
            <div className="d-flex space-btw">
                <div>Likes: {post.likes.length}</div>
                {getCurrentUser && <div>
                    {getCurrentUser.username !== post.username &&
                        <button onClick={like}>
                            {post.likes.includes(getCurrentUser.username) ? "Dislike" : "Like"}
                        </button>}
                </div>}
            </div>
            {getCurrentUser && <WriteComment username={getCurrentUser.username} getPosts={getPosts} setPosts={setPosts} index={index}/> }
            <div className='comments'>
                {post.comments.map((x, i) => <div key={i}>
                    <div>{x.text}</div>
                    <div>{x.username}</div>
                </div>)}
            </div>
        </div>
    );
};

export default PostView;