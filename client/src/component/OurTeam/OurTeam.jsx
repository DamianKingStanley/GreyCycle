import React from "react";
import { FaUserTie } from "react-icons/fa";
import "./OurTeam.css";

const teamMembers = [
  { name: "Arthur Chapman", role: "Chairman", image: "path/to/image1.jpg" },
  {
    name: "Sarah Moore",
    role: "Chief Investment Officer",
    image: "path/to/image2.jpg",
  },
  {
    name: "John Doe",
    role: "Head of Blockchain Operations",
    image: "path/to/image3.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="OurTeamSection">
      <div className="Container">
        <h2 className="SectionTitle">Our Team</h2>
        <div className="TeamGrid">
          {teamMembers.map((member, index) => (
            <div className="TeamCard" key={index}>
              <img src={member.image} alt={member.name} className="TeamImage" />
              <h3 className="TeamName">{member.name}</h3>
              <p className="TeamRole">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
