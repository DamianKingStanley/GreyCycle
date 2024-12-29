import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaPen } from "react-icons/fa"; // Icons for profile and edit
import "./UserDashboard.css";
import profilePicture from "../../assets/dp2.avif";

const UserDashboard = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = JSON.parse(
          localStorage.getItem("InvestorInformation")
        );
        const response = await fetch(
          `http://localhost:5000/user/profile/${userId}`,
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
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <div className="dashboard">
      <h2> Dashboard</h2>
      {user ? (
        <div className="user-info">
          <div className="profile-image">
            <img src={profilePicture} alt="profilePicture" />
          </div>
          {/* <FaUserCircle className="profile-icon" /> */}
          <div className="info-details">
            <p>
              <strong>Full Name:</strong> {user.fullname}
            </p>
            <p>
              <strong>Username:</strong> Investor {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
          <div className="thebuttons">
            <button
              className="update-button"
              onClick={() => navigate(`/user/profile/${userId}/update`)}
            >
              <FaEdit /> Update Profile
            </button>
            {user.role === "admin" && (
              <button
                className="update-button"
                onClick={() => navigate("/admin/admin-panel")}
              >
                <FaPen /> Admin Panel
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default UserDashboard;
