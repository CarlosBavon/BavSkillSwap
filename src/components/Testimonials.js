import React from "react";
import "../styles/Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      skill: "Web Development",
      text: "I swapped my coding lessons for guitar classes. It was such a fun and affordable way to learn!",
      avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
      name: "John Smith",
      skill: "Cooking",
      text: "SkillSwap connected me with amazing people. I taught cooking and learned photography in return.",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Emily Johnson",
      skill: "Graphic Design",
      text: "It’s a community that values sharing knowledge. I polished my design skills while learning Spanish.",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Users Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
            <h3>{t.name}</h3>
            <p className="testimonial-skill">Exchanged: {t.skill}</p>
            <p className="testimonial-text">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
