import CardSwap, { Card } from "../components/CardSwap";

export default function Home() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        <Card>
          <h3>Software Engineering</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Computer Science</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Web Design</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Graphic Design</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap>
    </div>
  );
}
