import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [username, setUsername] = useState("Investor");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("InvestorInformation"));
    if (userData && userData.result.username) {
      setUsername(userData.result.username);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = JSON.parse(
          localStorage.getItem("InvestorInformation")
        );
        if (userData && userData.result.id) {
          const response = await fetch(
            `http://localhost:5000/user/profile/${userData.result.id}`,
            {
              headers: {
                Authorization: `Bearer ${userData.token}`,
              },
            }
          );
          const data = await response.json();
          if (response.ok) {
            setUser(data);
          } else {
            console.error("Failed to fetch user profile:", data);
          }
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (isLoggedIn) fetchUserProfile();
  }, [isLoggedIn]);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? "" : menu));
  };

  const handleLogout = () => {
    localStorage.removeItem("InvestorInformation");
    setIsLoggedIn(false);
    setUsername("Investor");
    navigate("/");
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobile && navRef.current && !navRef.current.contains(e.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  return (
    <div>
      <nav className="Navbar" ref={navRef}>
        <div className="NavbarContainer">
          <div className="Logo">
            <Link to="/">GreyCycle</Link>
          </div>

          <div
            className="MobileMenuIcon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <FaTimes id="icn" /> : <FaBars id="icn" />}
          </div>
          <ul className={isMobile ? "NavActions active" : "NavActions"}>
            <li className="NavItem" onClick={closeMobileMenu}>
              <Link to="/">HOME</Link>
            </li>
            <li className="NavItem" onClick={closeMobileMenu}>
              <Link to="/investment">INVESTMENT</Link>
            </li>

            <li className="NavItem" onClick={() => toggleDropdown("about")}>
              <span>ABOUT</span>
              {activeDropdown === "about" && (
                <ul className="DropdownMenu">
                  <li onClick={closeMobileMenu}>
                    <a href="#WhoWeAre">Who We Are</a>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <a href="#WhyChooseUs">Why Choose Us</a>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <a href="#HowWeWork">How We Work</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="NavItem" onClick={() => toggleDropdown("browse")}>
              <span>OUR PLAN</span>
              {activeDropdown === "browse" && (
                <ul className="DropdownMenu ">
                  <li onClick={closeMobileMenu}>
                    <Link to="/packages">Packages</Link>
                  </li>
                  <li>
                    <Link to="/cashflow">CashFlow</Link>
                  </li>
                  <li>
                    <Link to="/rewards">Rewards</Link>
                  </li>
                  <li>
                    <Link to="/process">Process</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="NavItem"
              onClick={() => toggleDropdown("serviceDesk")}
            >
              <span>SERVICE DESK</span>
              {activeDropdown === "serviceDesk" && (
                <ul className="DropdownMenu">
                  <li onClick={closeMobileMenu}>
                    <a href="#Guidelines">Guidelines</a>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <a href="#Support">Support</a>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              )}
            </li>

            <div className="NavItem Account">
              <span>{username}</span>
              {isLoggedIn ? (
                <ul className="DropdownMenu">
                  <li onClick={closeMobileMenu}>
                    <Link to={`/user/profile/${user?._id}`}>Dashboard</Link>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <button className="logoutbutton" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              ) : (
                <button
                  className="loginbutton"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
