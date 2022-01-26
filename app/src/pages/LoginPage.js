import React, {useContext, useEffect, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const nav = useNavigate()

    useEffect(() => {
        setPage("login")
    }, [])

    const {setPage, getLoggedUser, setLoggedUser, getUser, setUser} = useContext(mainContext)
    const userName = useRef()
    const password1 = useRef()



    function login() {

        const user = getUser.find(x => x.userName === userName.current.value && x.password1 === password1.current.value)

        if(user) {
            setLoggedUser(user)
            nav("/createPost")
        }
    }

    return (
        <div>
            <div className="d-flex j-center grow1">
                <div className="d-flex column">
                    <input ref={userName} type="text" placeholder="username"/>
                    <input ref={password1} type="text" placeholder="password1"/>
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;