import "./Hobbies.css";

const hobbies = [
  { icon: "📚", title: "Learning English & Dutch", description: "Improving my language skills every day to connect with more people and learn new things." },
  { icon: "💻", title: "Coding New Projects", description: "Building small apps and trying new technologies to grow as a developer." },
  { icon: "🚶‍♂️", title: "Going for Walks", description: "I enjoy walking to clear my mind and think about new ideas." },
  { icon: "☕", title: "Drinking Coffee", description: "Morning coffee gives me energy and focus for the day." },
  { icon: "🎵", title: "Listening to Music", description: "Music helps me relax and inspires my creativity." },
];

const HobbiesSection = () => {
  return (
    <section className="hobbies-section">
      <h2 className="hobbies-title">Beyond Code</h2>
      <p className="hobbies-subtitle">A few things I enjoy in my daily life</p>
      <div className="hobbies-container">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <h3 className="hobby-title">{hobby.title}</h3>
            <p className="hobby-description">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HobbiesSection;
