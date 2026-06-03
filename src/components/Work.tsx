import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01",
    title: "Nexia Career Guide",
    category: "Web / Mobile Platform",
    year: "2026",
    tools: "MERN, JavaScript, Database Management",
    desc: "Interactive career guidance platform with assessments, personalized recommendations, goal tracking, and user dashboards. End-to-end full-stack development and deployment.",
    image: "/images/nexia.webp",
  },
  {
    num: "02",
    title: "AI Web Assistant",
    category: "AI / NLP Application",
    year: "2025",
    tools: "Python, Streamlit, IBM Granite LLM, Cloud",
    desc: "AI-powered Streamlit app with YouTube summarization, IBM Granite LLM integration, streak maintenance, and animations. Deployed on cloud for real-time NLP tasks.",
    image: "/images/ai-assistant.webp",
  },
  {
    num: "03",
    title: "Reunify",
    category: "AI / Disaster Response Platform",
    year: "2025",
    tools: "Vue.js, Python, MongoDB, DeepFace, OpenCV, FaceNet",
    desc: "AI-powered disaster response platform to reunite missing individuals with their families. Features facial recognition-based matching, AI-generated metadata extraction, missing-person search, and offline disaster-response architecture using LoRaWAN concepts.",
    image: "/images/reunify.webp",
  },
  {
    num: "04",
    title: "Human-Elephant Detection",
    category: "IoT / AI System",
    year: "2025",
    tools: "Seismic Sensors, Infrasound, IoT, AI",
    desc: "Wildlife safety system using seismic sensors and infrasound to detect elephant movement in forest-border areas. Sends real-time alerts to villages and forest departments.",
    image: "/images/elephant.webp",
  },
  {
    num: "05",
    title: "EduEnhance",
    category: "EdTech Platform",
    year: "2024",
    tools: "Web Development, Database, UI/UX Design",
    desc: "Educational platform bridging the urban-rural learning gap with adaptive content, quizzes, teacher dashboards, and a clean mobile-friendly interface.",
    image: "/images/eduenhance.webp",
  },
];

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        scroller: document.body,
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", { x: -translateX, ease: "none" });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.num}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools &amp; Stack</h4>
                <p>{project.tools}</p>
                <h4>About</h4>
                <p>{project.desc}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
