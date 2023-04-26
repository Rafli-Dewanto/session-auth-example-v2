import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();


    return (
        <div className='App'>
            <Routes>
                <Route path={`/dashboard`} element={<Dashboard />} />
                <Route path={`/auth/login`} element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
