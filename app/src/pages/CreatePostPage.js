import React, {useEffect} from 'react';
import CreatePost from "../comps/CreatePost";

const CreatePostPage = ({setPage}) => {

    useEffect(() => {
        setPage('create')
    }, [])

    return (
        <div className="d-flex j-center">
            <CreatePost/>
        </div>
    );
};

export default CreatePostPage;