import { useState } from "react";
import { FaSearch, FaCode, FaLanguage, FaPaintBrush, FaMusic, FaHandshake } from "react-icons/fa";
import "../styles/BrowseSkills.css";

export default function BrowseSkills() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const skills = [
    { id: 1, name: "Web Development", category: "Technology", icon: <FaCode />, desc: "Learn HTML, CSS, JavaScript, React and more." },
    { id: 2, name: "Spanish Language", category: "Languages", icon: <FaLanguage />, desc: "Improve your Spanish with conversation practice." },
    { id: 3, name: "Digital Art", category: "Arts", icon: <FaPaintBrush />, desc: "Master drawing, painting, and digital design." },
    { id: 4, name: "Guitar Lessons", category: "Music", icon: <FaMusic />, desc: "Learn acoustic and electric guitar from scratch." },
    { id: 5, name: "Negotiation Skills", category: "Business", icon: <FaHandshake />, desc: "Enhance your communication and deal-making skills." },
  ];

  const categories = ["All", "Technology", "Languages", "Arts", "Music", "Business"];

  const filteredSkills = skills.filter((skill) =>
    (category === "All" || skill.category === category) &&
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="browse-skills">
      <h2 className="page-title">Browse Skills</h2>

      {/* Search & Filter */}
      <div className="search-filter">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="category-filter"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
              <span className="skill-category">{skill.category}</span>
              <button className="connect-btn">Connect</button>
            </div>
          ))
        ) : (
          <p className="no-results">No skills found. Try another search.</p>
        )}
      </div>
    </div>
  );
}
