import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Toolbar from "./comps/Toolbar";
import {useState} from "react";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import CreatePostPage from "./pages/CreatePostPage";
import HomePage from "./pages/HomePage";
import mainContext from "./context/mainContext";

function App() {

    const [getPage, setPage] = useState("/")
    const [getUser, setUser] = useState([])
    const [getLoggedUser, setLoggedUser] = useState({})
    const [getPost, setPost] = useState([])


    return (
        <div className="App">
            <mainContext.Provider value={{getPage, setPage, getUser, setUser, getLoggedUser, setLoggedUser, getPost, setPost}}>
                <div>
                    <BrowserRouter>
                        <Toolbar/>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/register" element={<RegistrationPage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/main" element={<MainPage/>}/>
                            <Route path="/createPost" element={<CreatePostPage/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>

            </mainContext.Provider>
        </div>
    );
}

export default App;
