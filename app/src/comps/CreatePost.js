import {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
    const {getPosts, setPosts, getCurrentUser} = useContext(mainContext)
    const nav = useNavigate()

    const titleRef = useRef()
    const articleRef = useRef()

    function createPost() {
        const post = {
            title: titleRef.current.value,
            article: articleRef.current.value,
            username: getCurrentUser.username,
            likes: [],
            comments: []
        }
        setPosts([...getPosts, post])
        nav('/main')
    }

    return (
        <div className="d-flex column form">
            <input type="text" ref={titleRef} placeholder="title"/>
            <input type="text" ref={articleRef} placeholder="articles"/>
            <button onClick={createPost}>Create Post</button>
        </div>
    );
};

export default CreatePost;