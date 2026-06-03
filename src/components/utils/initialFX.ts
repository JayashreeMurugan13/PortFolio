import gsap from "gsap";

function splitIntoChars(selectors: string | string[]): HTMLSpanElement[] {
  const els = Array.isArray(selectors)
    ? selectors.flatMap((s) => Array.from(document.querySelectorAll<HTMLElement>(s)))
    : Array.from(document.querySelectorAll<HTMLElement>(selectors));
  return els.flatMap((el) => {
    const text = el.innerText;
    el.innerHTML = "";
    return text.split("").map((ch) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.textContent = ch === " " ? "\u00a0" : ch;
      el.appendChild(span);
      return span;
    });
  });
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", { backgroundColor: "#0b080c", duration: 0.5, delay: 1 });

  const chars1 = splitIntoChars([".landing-info h3", ".landing-intro h2", ".landing-intro h1"]);
  gsap.fromTo(
    chars1,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    { opacity: 1, duration: 1.2, filter: "blur(0px)", ease: "power3.inOut", y: 0, stagger: 0.025, delay: 0.3 }
  );

  const chars2 = splitIntoChars(".landing-h2-info");
  gsap.fromTo(
    chars2,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    { opacity: 1, duration: 1.2, filter: "blur(0px)", ease: "power3.inOut", y: 0, stagger: 0.025, delay: 0.3 }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", y: 0, delay: 0.8 }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", delay: 0.1 }
  );

  const chars3 = splitIntoChars(".landing-h2-info-1");
  const chars4 = splitIntoChars(".landing-h2-1");
  const chars5 = splitIntoChars(".landing-h2-2");

  LoopText(chars2, chars3);
  LoopText(chars4, chars5);
}

function LoopText(chars1: HTMLSpanElement[], chars2: HTMLSpanElement[]) {
  const delay = 4;
  const delay2 = delay * 2 + 1;
  gsap.timeline({ repeat: -1, repeatDelay: 1 })
    .fromTo(chars2, { opacity: 0, y: 80 }, { opacity: 1, duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay }, 0)
    .fromTo(chars1, { y: 80 }, { duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay: delay2 }, 1)
    .fromTo(chars1, { y: 0 }, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay }, 0)
    .to(chars2, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: delay2 }, 1);
}
