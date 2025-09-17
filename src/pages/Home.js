import CardSwap, { Card } from "../components/CardSwap";
import { FaUserAlt, FaSearch, FaHandshake } from "react-icons/fa";
import "../styles/Home.css";
import SoftwareEngineering from "../images/software-engineering.jpg";
import ComputerScience from "../images/computer-science.jpg";
import WebDesign from "../images/web-design.jpg";
import GraphicDesign from "../images/graphic.jpg";
import Testimonials from "../components/Testimonials";
import CircularGallery from "../components/CircularGallery";
import Stepper, { Step } from "../components/Stepper";

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
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <h2>Welcome to the Skill Swap Hub!</h2>
            <p>Check out the next step!</p>
          </Step>
          <Step>
            <div className="icon">
              <FaUserAlt size={60} color="#780083" />
            </div>
            <h2>Create Your Profile!</h2>
            <img
              style={{
                height: "100px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center -70px",
                borderRadius: "15px",
                marginTop: "1em",
              }}
              alt="Cute Cat"
              src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894"
            />
            <p>List your skills and the ones you want to learn.</p>
          </Step>
          <Step>
            <div className="icon">
              <FaSearch size={60} color="#780083" />
            </div>
            <h2>Find a Match?</h2>
            <p>Browse categories or get personalized skill suggestions.</p>
          </Step>
          <Step>
            <h2>Final Step</h2>
            <div className="icon">
              <FaHandshake size={60} color="#780083" />
            </div>
            <h3>Swap & Learn!</h3>
            <p>Connect with people, exchange skills, and grow together.</p>
          </Step>
        </Stepper>
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
