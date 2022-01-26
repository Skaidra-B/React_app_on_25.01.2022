import React, {useContext, useRef, useEffect} from 'react';
import mainContext from "../context/mainContext";
import {Link, useNavigate} from "react-router-dom";

const RegistrationPage = () => {

    useEffect(() => {
        setPage("register")
    }, [])

    const {setPage, getUser, setUser} = useContext(mainContext)
    const nav = useNavigate()

    const userName = useRef()
    const password1 = useRef()
    const password2 = useRef()

    function register() {
        if(password1.current.value === password2.current.value) {
            const user = {
                userName: userName.current.value,
                password1: password1.current.value,
                password2: password1.current.value
            }
            setUser([...getUser, user])
            userName.current.value = ""
            password1.current.value = ""
            password2.current.value = ""
        } else {
            alert("passwords do not match")
        }
        nav("/login")

    }

    return (
        <div>
            <div className="d-flex j-center grow1">
                <div className="d-flex column">
                    <input ref={userName} type="text" placeholder="username"/>
                    <input ref={password1} type="text" placeholder="password1"/>
                    <input ref={password2} type="text" placeholder="password2"/>
                    <button onClick={register}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;