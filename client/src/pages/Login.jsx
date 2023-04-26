import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

export default function Login() {
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    const sid = cookies.sid

    if (cookies.sid) {
        console.log("navigate ke dashboard");
        navigate("/dashboard");
    }

    if (sid) {
        window.location.href = '/dashboard'
    } else {
        return <Form />;
    }
}
