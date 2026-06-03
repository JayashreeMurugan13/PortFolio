import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am Jayashree M, a passionate B.E. CSE (AI &amp; ML) student at Sri Eshwar College of
          Engineering with a CGPA of 8.2. I have a strong interest in Artificial Intelligence,
          Machine Learning, Full-Stack Development, and Data Analytics. I enjoy building innovative
          technology solutions that solve real-world problems — from AI-powered applications and
          career guidance platforms to wildlife conservation systems. I am a continuous learner who
          participates in coding challenges and hackathons, with a goal to leverage technology to
          create meaningful solutions that improve lives.
        </p>
        <div className="about-highlights">
          <div className="about-highlight-item">🎓 B.E. CSE (AI &amp; ML) | CGPA: 8.2</div>
          <div className="about-highlight-item">🏆 National Hackathon Finalist — Top 17 / 170+ Teams</div>
          <div className="about-highlight-item">🥉 3rd Position in SkillRack</div>
          <div className="about-highlight-item">💻 130+ LeetCode &amp; 1100+ SkillRack Problems Solved</div>
          <div className="about-highlight-item">🚀 Full-Stack Developer &amp; AI Enthusiast</div>
        </div>
      </div>
    </div>
  );
};

export default About;
