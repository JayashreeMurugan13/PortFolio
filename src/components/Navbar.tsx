import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { scrollTo } from "./utils/lenis";
import "./styles/Navbar.css";

export { lenisInstance } from "./utils/lenis";

const Navbar = () => {
  useEffect(() => {
    setTimeout(() => ScrollTrigger.refresh(), 300);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let el = e.currentTarget as HTMLAnchorElement;
          scrollTo(el.getAttribute("data-href"));
        }
      });
    });

    window.addEventListener("resize", () => ScrollTrigger.refresh(true));
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Logo
        </a>
        <a
          href="mailto:jayashree.m2024aiml@sece.ac.in"
          className="navbar-connect"
          data-cursor="disable"
        >
          jayashree.m2024aiml@sece.ac.in
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
