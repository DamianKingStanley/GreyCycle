import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UserUpdate.css";
import jwt_decode from "jwt-decode"; 

const UserUpdate = () => {
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
  });
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    const InvestorInformation = JSON.parse(
      localStorage.getItem("InvestorInformation")
    );
    if (InvestorInformation && InvestorInformation.token) {
      const userToken = InvestorInformation.token;
      setToken(userToken);
      if (isTokenExpired(userToken)) {
        requireLogin();
      }
    } else {
      requireLogin(); 
    }
  }, []);

  
  const isTokenExpired = (token) => {
    if (!token) return true; // If token is null or undefined, consider it expired

    try {
      const decoded = jwt_decode(token);
      const now = Date.now() / 1000; // Convert to seconds
      return decoded.exp < now;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true; // If there's an error decoding, assume token is invalid/expired
    }
  };

 
  const requireLogin = () => {
    setShowLoginModal(true);
    setTimeout(() => {
      setShowLoginModal(false);
      navigate("/login");
    }, 2000);
  };

 
  useEffect(() => {
    if (!isTokenExpired(token)) {
      const fetchUserProfile = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/user/profile/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response.json();

          if (response.ok) {
            setFormData({
              fullname: data.fullname || "",
              username: data.username || "",
              phoneNumber: data.email || "",
            });
          } else {
            console.error("Failed to fetch user profile:", data);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      };

      fetchUserProfile();
    }
  }, [userId, token]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isTokenExpired(token)) {
      requireLogin();
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:5000/user/profile/${userId}/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Profile updated successfully!");
        setIsLoading(false);
        navigate(`/user/profile/${userId}`);
      } else {
        console.error("Failed to update profile");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);

      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="update-profile">
      <h2>Update Profile</h2>
      {showLoginModal && <p>Please log in again. Redirecting...</p>}
      <form onSubmit={handleSubmit} className="update-form">
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Profile Updating..." : "Save Changes"}
        </button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserUpdate;
