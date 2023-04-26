import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
const [cookies, setCookie, removeCookie] = useCookies();

export default function Form() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [sid, setSid] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                name: name,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (res.ok) {
            console.log(data);
            setSid(cookies.sid);
            window.location.href = "/dashboard";
        } else {
            console.log(data.message);
        }
    };
    return (
        <div className='flex items-center justify-center h-screen font-body'>
            <form
                className='w-1/3 px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md'
                onSubmit={handleSubmit}
            >
                <div className='mb-4'>
                    <label
                        className='block mb-2 font-bold text-gray-700'
                        htmlFor='name'
                    >
                        Name
                    </label>
                    <input
                        className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        id='name'
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-6'>
                    <label
                        className='block mb-2 font-bold text-gray-700'
                        htmlFor='password'
                    >
                        Password
                    </label>
                    <input
                        className='w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        id='password'
                        type='password'
                        placeholder='********'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button
                        className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                        type='submit'
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}
