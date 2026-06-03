import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  _chars?: HTMLSpanElement[];
}

gsap.registerPlugin(ScrollTrigger);

function splitIntoChars(el: HTMLElement): HTMLSpanElement[] {
  const text = el.innerText;
  el.innerHTML = "";
  return text.split("").map((ch) => {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.textContent = ch === " " ? "\u00a0" : ch;
    el.appendChild(span);
    return span;
  });
}

function splitIntoWords(el: HTMLElement): HTMLSpanElement[] {
  const words = el.innerText.split(/\s+/);
  el.innerHTML = "";
  return words.map((w, i) => {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.textContent = w;
    el.appendChild(span);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    return span;
  });
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  document.querySelectorAll<ParaElement>(".para").forEach((para) => {
    para.classList.add("visible");
    if (para.anim) para.anim.progress(1).kill();
    const words = splitIntoWords(para);
    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          scroller: document.body,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  document.querySelectorAll<ParaElement>(".title").forEach((title) => {
    if (title.anim) title.anim.progress(1).kill();
    const chars = splitIntoChars(title);
    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          scroller: document.body,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
