import {useRef} from 'react';

const WriteComment = ({username, getPosts, setPosts, index}) => {
    const commentRef = useRef()

    function commentPost() {
        const comment = {
            text: commentRef.current.value,
            username
        }

        getPosts[index].comments.push(comment)
        setPosts([...getPosts])
    }

    return (
        <div className="d-flex column">
            <input ref={commentRef} type="text"/>
            <button onClick={commentPost}>Comment</button>
        </div>
    );
};

export default WriteComment;