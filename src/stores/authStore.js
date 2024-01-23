import { create } from "zustand";
import axios from "axios";

const authStore = create((set) => ({
    loggedIn: null,

    loginForm: {
        email: "",
        password: "",
    },

    signupForm: {
        firstname: "",
        lastname: "",
        email: "",
        pasword: "",
    },

    updateLoginForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                },
            };
        });
    },

    updateSignupForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                },
            };
        });
    },

    login: async () => {
        try {
        const { loginForm } = authStore.getState();

        await axios.post("/login", loginForm);

        set({ loggedIn: true ,
            loginForm: {
                email: "",
                password: "",

            },
        });
    } catch {
        window.location.replace("/login");
    }
    },

    checkAuth: async () => {
        try {
            await axios.get("/check-auth");
            set({ loggedIn: true });
        } catch (err) {
            set({ loggedIn: false });
        }
    },

    signup: async () => {
        const { signupForm} = authStore.getState();

        const res = await axios.post("/signup", (signupForm), { 
            withCredentials: true 
        });

        set({
            signupForm: {
                firstname: "",
                lastname: "",
                email: "",
                password: "",
            },
        })

        console.log(res);
    },

    logout: async () => {
        axios.get("/logout");
        set({ loggedIn: false });

    },
}));

export default authStore;

