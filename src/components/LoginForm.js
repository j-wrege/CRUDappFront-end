import React from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";
import styles from "../static/style.css";

export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        await store.login();

        // Navigate
        navigate("/inventory");
    };   

    return (
        <form onSubmit={handleLogin}>
            <h5>
            <small-text>Email@.. </small-text>
            <input 
                onChange={store.updateLoginForm}
                value={store.loginForm.email} 
                type="email" 
                name="email" 
            />
            </h5>
            <h5>
            <small-text>Password </small-text>
            <input 
                onChange={store.updateLoginForm}
                value={store.loginForm.password} 
                type="password" 
                name="password" 
            />
            </h5>

            
            <button type="submit">Submit</button>
            
        </form>
    );
};