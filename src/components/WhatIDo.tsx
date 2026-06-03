import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const containers = containerRef.current.filter(Boolean) as HTMLDivElement[];

    containers.forEach((container) => {
      if (ScrollTrigger.isTouch) {
        container.classList.remove("what-noTouch");
        container.addEventListener("click", () => handleClick(container));
      } else {
        container.addEventListener("mouseenter", () => {
          container.classList.add("what-expanded");
          containers.forEach((s) => {
            if (s !== container) s.classList.add("what-collapsed");
          });
        });
        container.addEventListener("mouseleave", () => {
          container.classList.remove("what-expanded");
          containers.forEach((s) => s.classList.remove("what-collapsed"));
        });
      }
    });

    return () => {
      containers.forEach((container) => {
        container.removeEventListener("click", () => handleClick(container));
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVELOP</h3>
              <h4>Full Stack & AI Development</h4>
              <p>
                Building end-to-end web applications and AI-powered tools — from career guidance platforms to disaster response systems.
              </p>
              <h5>Programming Languages</h5>
              <div className="what-content-flex">
                <div className="what-tags">C</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Java</div>
              </div>
              <h5>Databases</h5>
              <div className="what-content-flex">
                <div className="what-tags">MySQL</div>
                <div className="what-tags">MongoDB</div>
              </div>
              <h5>Web Technologies</h5>
              <div className="what-content-flex">
                <div className="what-tags">HTML</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">React.js</div>
                <div className="what-tags">Node.js</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>SOLVE</h3>
              <h4>Competitive Programming & Problem Solving</h4>
              <p>
                Active competitive programmer with 1100+ problems on SkillRack, 130+ on LeetCode, and a 5-star Python badge on HackerRank.
              </p>
              <h5>Core Concepts</h5>
              <div className="what-content-flex">
                <div className="what-tags">DSA</div>
                <div className="what-tags">OOPS</div>
                <div className="what-tags">DBMS</div>
              </div>
              <h5>Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">VS Code</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">Canva</div>
                <div className="what-tags">Excel</div>
                <div className="what-tags">PowerPoint</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
