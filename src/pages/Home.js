import CardSwap, { Card } from "../components/CardSwap";
import { FaUserAlt, FaSearch, FaHandshake } from "react-icons/fa";
import "../styles/Home.css";
import SoftwareEngineering from "../images/software-engineering.jpg";
import ComputerScience from "../images/computer-science.jpg";
import WebDesign from "../images/web-design.jpg";
import GraphicDesign from "../images/graphic.jpg";
import Testimonials from "../components/Testimonials";
import CircularGallery from "../components/CircularGallery";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Swap Skills, Not Money.</h1>
          <p>
            Learn new things, share what you know, and connect with people who
            want to exchange knowledge. From coding to cooking, SkillSwap Hub
            makes learning social and affordable.
          </p>
          <div className="hero-buttons">
            <a href="/signup" className="btn-primary">
              Get Started
            </a>
            <a href="/browse" className="btn-secondary">
              Browse Skills
            </a>
          </div>
        </div>

        <div style={{ height: "600px", position: "relative" }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card
              className="card"
              style={{ backgroundImage: `url(${SoftwareEngineering})` }}
            >
              <div className="card-content">
                <h3>Software Engineering</h3>
                <p>Share your Software Engineering skills.</p>
              </div>
            </Card>

            <Card
              className="card"
              style={{ backgroundImage: `url(${ComputerScience})` }}
            >
              <div className="card-content">
                <h3>Computer Science</h3>
                <p>Share your Computer Science skills.</p>
              </div>
            </Card>

            <Card
              className="card"
              style={{ backgroundImage: `url(${WebDesign})` }}
            >
              <div className="card-content">
                <h3>Web Design</h3>
                <p>Share your Web Designing skills here. </p>
              </div>
            </Card>

            <Card
              className="card"
              style={{ backgroundImage: `url(${GraphicDesign})` }}
            >
              <div className="card-content">
                <h3>Graphic Design</h3>
                <p>Share your Graphic Designing skills.</p>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
      <section className="how-it-works">
        <h2 className="how-title">How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="icon">
              <FaUserAlt size={60} color="#780083" />
            </div>
            <h3>Create Your Profile</h3>
            <p>List your skills and the ones you want to learn.</p>
          </div>
          <div className="step">
            <div className="icon">
              <FaSearch size={60} color="#780083" />
            </div>
            <h3>Find a Match</h3>
            <p>Browse categories or get personalized skill suggestions.</p>
          </div>
          <div className="step">
            <div className="icon">
              <FaHandshake size={60} color="#780083" />
            </div>
            <h3>Swap & Learn</h3>
            <p>Connect with people, exchange skills, and grow together.</p>
          </div>
        </div>
      </section>

      <section className="popular-skills">
        <h2 className="skills-title">Popular Skill Categories</h2>
        <div style={{ height: "500px", position: "relative" }}>
          <CircularGallery
            bend={1}
            textColor="#780083"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </section>
      <Testimonials />
    </>
  );
}
