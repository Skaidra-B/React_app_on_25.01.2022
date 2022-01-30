import React, {useEffect} from 'react';
import PostView from "../comps/PostView";

const MainPage = ({setPage, posts}) => {

    useEffect(() => {
        setPage('main')
    }, [])

    return (
        <div className="d-flex wrap">
            {posts.map((x,i) => <PostView index={i} post={x} key={i}/>)}
        </div>
    );
};

export default MainPage;