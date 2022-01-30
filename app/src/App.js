import './App.css';
import mainContext from "./context/mainContext";
import Toolbar from "./comps/Toolbar";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import CreatePostPage from "./pages/CreatePostPage";

function App() {

    const [getUsers, setUsers] = useState([])
    const [getCurrentUser, setCurrentUser] = useState(null)
    const [getPage, setPage] = useState("")
    const [getPosts, setPosts] = useState([])

    return (
        <div className="App">

            <mainContext.Provider value={{getUsers, setUsers, getCurrentUser, setCurrentUser, getPosts, setPosts}}>
                <BrowserRouter>
                    <Toolbar user={getCurrentUser} setUser={setCurrentUser} page={getPage} posts={getPosts}  />

                    <Routes>
                        <Route path="/register" element={<RegisterPage setPage={setPage}/>}/>
                        <Route path="/login" element={<LoginPage setPage={setPage}/>}/>
                        <Route path="/main" element={<MainPage posts={getPosts} setPage={setPage}/>}/>
                        <Route path="/create" element={<CreatePostPage setPage={setPage}/>}/>
                    </Routes>
                </BrowserRouter>

            </mainContext.Provider>

        </div>
    );
}

export default App;

