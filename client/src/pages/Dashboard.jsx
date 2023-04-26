import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Dashboard() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();

    const signOut = async () => {
        await fetch("http://localhost:3000/auth/logout", {
            method: "GET",
            credentials: "include",
        });
        navigate("/auth/login");
    };

    return (
        <div className='flex flex-col justify-center mt-40 dashboard align-center'>
            <h1 className='text-3xl text-center'>ini dashboard</h1>
            <button
                className='max-w-sm mx-auto mt-5 button-11'
                onClick={signOut}
            >
                Sign out
            </button>
        </div>
    );
}
