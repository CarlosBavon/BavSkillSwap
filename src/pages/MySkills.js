import React, { useState } from "react";
import "../styles/MySkills.css";

export default function MySkills() {
  const [skills, setSkills] = useState(["React", "Node.js", "MongoDB"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="my-skills-page">
      <h1>My Skills</h1>
      <p className="subtitle">Manage and showcase your skills here ✨</p>

      <form onSubmit={addSkill} className="my-skill-form">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Enter a new skill..."
        />
        <button type="submit">Add Skill</button>
      </form>

      <div className="my-skills-list">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div className="my-skill-card" key={index}>
              <span>{skill}</span>
              <button onClick={() => removeSkill(skill)}>✖</button>
            </div>
          ))
        ) : (
          <p className="my-no-skills">No skills added yet. Start adding some!</p>
        )}
      </div>
    </div>
  );
}
