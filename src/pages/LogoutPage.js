import { useEffect } from "react";
import authStore from "../stores/authStore";
import styles from "../static/style.css";

export default function LogoutPage() {
    const store = authStore();
    useEffect(() => {
        store.logout();
    }, [])
    return <h4>You are now logged out</h4>;
};