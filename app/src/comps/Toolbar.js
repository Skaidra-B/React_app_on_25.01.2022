
import {Link} from "react-router-dom";

const Toolbar = ({user, page, setUser, posts}) => {

    const result = () => {
        const myPosts = posts.filter(x => x.username === user.username)

        let likesOnPosts = 0
        let comments = 0

        myPosts.map(x => {
            likesOnPosts += x.likes.length
            comments += x.comments.length
        })

        return {
            postsAmount: myPosts.length,
            likesAmount: likesOnPosts,
            commentsAmount: comments
        }
    }

    return (
        <div className="toolbar d-flex space-btw">

            {!user && <div>
                {page !== 'register' && <Link to="/register">Register</Link>}
                {page !== 'login' &&  <Link to="/login">Login</Link>}
            </div>}

            {user && <div className="d-flex">
                {page !== 'main' && <Link to="/main">Main</Link>}
                {page !== 'create' && <Link to="/create">Create</Link>}
            </div>}


            {user &&
                <div className="d-flex">
                    <div className="mr20">
                        <h2>{user.username}</h2>
                    </div>

                    <div className="mr20">Posts: {result().postsAmount}</div>
                    <div className="mr20">Likes: {result().likesAmount}</div>
                    <div className="mr20">Comments: {result().commentsAmount}</div>

                </div>}

            {user && <button onClick={() => setUser(null)}>Logout</button>}


        </div>
    );
};

export default Toolbar;