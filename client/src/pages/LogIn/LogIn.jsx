import React, { useState } from "react";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Investor");
  const [loginMessage, setLoginMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const storeUserData = (userData) => {
    localStorage.setItem("InvestorInformation", JSON.stringify(userData));
    return true;
  };

  const submitForm = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        storeUserData(data);
        setIsLoading(false);
        if (role === "admin") {
          navigate("/admin/admin-panel");
        } else {
          navigate("/");
        }
      } else {
        const errorResponseData = await response.json();
        setLoginMessage(
          errorResponseData.message || "Login failed. Try again later."
        );
        setIsLoading(false);
      }
    } catch (error) {
      setLoginMessage("An error occurred. Try again later.");
      setIsLoading(false);
    }
  };

  return (
    <div className="LogInbody">
      <section className="Login">
        {loginMessage && (
          <div
            className={
              loginMessage === "Login successful"
                ? "success-message"
                : "error-message"
            }
          >
            {loginMessage}
          </div>
        )}
        <h1> Welcome Investor! </h1>
        <p>Enter your email and password to continue!</p>
        <div id="Loginform">
          <div>
            <input
              type="email"
              name="email"
              id="emailL"
              placeholder="E.g Investor@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="passwordL"
                placeholder="Enter your password here"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              ></span>
            </div>
            <label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                id="role"
              >
                <option value="Investor">Investor</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            <button onClick={submitForm} id="submitbtn" disabled={isLoading}>
              {isLoading ? "Logging In Now..." : "Log In"}
            </button>
            <br />
            <p>
              Don't have an account?
              <Link to="/register"> Sign Up</Link>
            </p>
            <p>
              Forgot Password?
              <Link to="/"> Click Here</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
