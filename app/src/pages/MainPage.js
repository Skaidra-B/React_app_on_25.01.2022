import React, {useContext, useEffect} from 'react';
import mainContext from "../context/mainContext";

const MainPage = () => {

    const {setPage, getPost, getLoggedUser} = useContext(mainContext)

    useEffect(() => {
        setPage("main")
    }, [])

    return (
        <div className="d-flex wrap">
            <div>
                {getPost.map((x, i) =>
                    <div className="card" key={i}>
                        <h3>{x.title}</h3>
                        <h3>{x.article}</h3>
                        <h3>Created by: {getLoggedUser.userName}</h3>
                    </div>)}
            </div>
        </div>
    );
};

export default MainPage;