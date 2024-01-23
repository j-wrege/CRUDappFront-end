import HomePage from "../pages/HomePage";
import NotesPage from "../pages/NotesPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import LoginPage from "../pages/LoginPage";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import styles from "../static/style.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1 styles={styles.h1}> 2024 Window 1 CRUD Application | Inventory Manager |</h1>
        
            <h2>
              <div>
              <title-headings>
                <Link to="/home">Home</Link>
              </title-headings>
              </div>
              <div>
              <title-headings>
                <Link to="/inventory">Inventory </Link>
              </title-headings>
              </div>
              <div>
              <title-headings>
                <Link to="/login">Login </Link>
              </title-headings>
              </div>
              <div>
              <title-headings>     
                <Link to="/signup">Signup </Link>
              </title-headings>
              </div>
              <div>
              <title-headings>       
                <Link to="/logout">Logout </Link>
              </title-headings>
              </div>
            </h2>
        
        <Routes>
          <Route 
          index 
          element={
            <RequireAuth>
              <NotesPage />
            </RequireAuth>
          } />
          <Route path="/home" element={<HomePage />} />
          <Route path="/inventory" element={<NotesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;