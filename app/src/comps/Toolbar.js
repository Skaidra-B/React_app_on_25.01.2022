import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import {Link} from "react-router-dom";

const Toolbar = () => {

    const {getPage} = useContext(mainContext)

    return (

            <div className="toolbar d-flex ">

                <div className="d-flex">
                    <div>
                        {(getPage !== "login" && getPage !== "main" && getPage !== "createPost" ) && <Link className="style" to="/login"><h2>Login</h2></Link>}
                    </div>
                    <div>
                        {(getPage !== "register" && getPage !== "main" && getPage !== "createPost") && <Link className="style" to="/register"><h2>Register</h2></Link> }
                    </div>
                    <div>
                        {(getPage !== "main" && getPage !== "login" && getPage !== "register" && getPage !== "/") && <Link className="style" to="/main"><h2>Main Page</h2></Link> }
                    </div>
                    <div>
                        {(getPage !== "createPost" && getPage !== "login" && getPage !== "register" && getPage !== "/") && <Link className="style" to="/createPost"><h2>Create Post</h2></Link> }
                    </div>
                </div>
            </div>

    );
};

export default Toolbar;