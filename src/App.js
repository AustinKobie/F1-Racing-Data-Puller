import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthProvider";
import Home from "./views/Home";
import About from "./views/About";
import WeatherSingle from "./views/WeatherSingle";

function App() {
  const { login, user, logout } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div className="auth">
        {user.loggedIn ? (
          <>
            <button className="logout-btn" onClick={logout}>Log Out</button>
            <h2>Welcome {user.displayName}!<br/>
            Here are your cities below:
            </h2>
          </>
        ) : (
          <>
            <h2>
              Welcome to the Weather App
              <br />
              Please Login to continue
            </h2>
            <button className="login-btn" onClick={login}>Login</button>
          </>
        )}
      </div>
      <Routes>
        <Route path="/post/:uid/:id" element={<WeatherSingle />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
