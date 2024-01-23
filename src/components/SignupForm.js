import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";
import styles from "../static/style.css";

export default function SignupForm() {
    const store = authStore();
    const navigate = useNavigate();

        const handleSignup = async (e) => {
            e.preventDefault();
            await store.signup();
            navigate("/login");
        };
    

    return (
        <form onSubmit={handleSignup}>
            <h5>
            <small-text>FirstName </small-text>
            <input 
                onChange={store.updateSignupForm}
                value={store.signupForm.firstname} 
                type="name" 
                name="firstname" 
            />
            </h5>
            <h5>
            <small-text>LastName </small-text>
            <input 
                onChange={store.updateSignupForm}
                value={store.signupForm.lastname || ''} 
                type="name" 
                name="lastname" 
            />
            </h5>
            <h5>
            <small-text>Email@.. </small-text>
            <input 
                onChange={store.updateSignupForm}
                value={store.signupForm.email} 
                type="email" 
                name="email" 
            />
            </h5>
            <h5>
            <small-text>Password </small-text>
            <input 
                onChange={store.updateSignupForm}
                value={store.signupForm.password || ''} 
                type="password" 
                name="password" 
            />
            </h5>

            <button type="submit">Submit</button>
            
        </form>
    );
}