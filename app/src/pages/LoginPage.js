import React, {useEffect} from 'react';
import LogginWithUser from "../comps/LogginWithUser";

const LoginPage = ({setPage}) => {

    useEffect(() => {
        setPage('login')
    }, [])

    return (
        <div className="d-flex  j-center">
            <LogginWithUser/>
        </div>
    );
};

export default LoginPage;