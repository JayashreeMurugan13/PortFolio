import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span></span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSLC</h4>
                <h5>Subbiah Vidhyalayam — 89%</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>Completed SSLC with 89% from Subbiah Vidhyalayam.</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC</h4>
                <h5>Subbiah Vidyalayam — 86.6%</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>Completed Higher Secondary with 86.6% from Subbiah Vidyalayam.</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Intern</h4>
                <h5>NIELIT Calicut — 4 Weeks | Offline</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Internship in Data Analytics, AI, and Web Development using Python &amp; Django,
              with hands-on projects and practical training.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. CSE (AI &amp; ML)</h4>
                <h5>Sri Eshwar College of Engineering — CGPA: 8.2</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing B.E. in Computer Science &amp; Engineering with specialization in
              Artificial Intelligence &amp; Machine Learning (2024–2028).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
