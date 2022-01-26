import React, {useContext, useEffect, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const CreatePostPage = () => {

    const nav = useNavigate()

    const {setPage, getPost, setPost} = useContext(mainContext)

    const title = useRef()
    const article = useRef()


    useEffect(() => {
        setPage("createPost")
    }, [])

    function createPost() {
        const post = {
            title: title.current.value,
            article: article.current.value
        }
        setPost([...getPost, post])
        title.current.value = ""
        article.current.value = ""
        nav("/main")

    }

    return (
        <div className="d-flex column j-center">
            <input ref={title} type="text" placeholder="title"/>
            <input ref={article} type="text" placeholder="article"/>
            <button onClick={createPost}>Create Post</button>
        </div>
    );
};

export default CreatePostPage;