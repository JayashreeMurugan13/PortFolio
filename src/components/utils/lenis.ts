import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.7,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length && value !== undefined) {
      lenis.scrollTo(value, { immediate: true });
    }
    return lenis.scroll;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
});

ScrollTrigger.defaults({ scroller: document.body });

lenis.on("scroll", () => ScrollTrigger.update());
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

export const lenisInstance = lenis;

export function scrollTo(section: string | null) {
  if (!section) return;
  const el = document.querySelector(section);
  if (el) lenis.scrollTo(el as HTMLElement, { offset: 0 });
}
