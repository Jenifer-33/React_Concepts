import { useLocation, useNavigate, useParams } from "react-router-dom";
import users from "./users";
import { useEffect } from "react";
const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const user = users.find((data) => data.id === Number(id));
  return (
    <div>
      <button onClick={() => navigate("/")}>back to home</button>
      <button onClick={() => navigate("#projects")}>view projects</button>
      <button onClick={() => navigate("#skills")}>view skills</button>
      <div style={{ height: "70px" }}></div>
      <h3>Cadidate Name: {user.name}</h3>
      <div style={{ height: "50px" }}></div>
      <h5>AboutMe:</h5>
      <p>{user.aboutMe}</p>
      <div style={{ height: "500px" }}></div>

      <h5 id="skills">Skills:</h5>
       <ul>
      {user.skills.map((skill) => (
          <li key={skill}>{skill}</li>
      ))}
       </ul>
    <div style={{ height: "500px" }}></div>

      <h5 id="projects">Projects:</h5>
      <ul>
      {user.projects.map((project) => (
        <li key={project}>{project}</li>
    
      ))}
      </ul>
    </div>
  );
};
export default Profile;
