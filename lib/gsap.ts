import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export const EASE_APPLE = "cubic-bezier(0.16, 1, 0.3, 1)";
export const EASE_KEYFRAME = "cubic-bezier(0.25, 1, 0.5, 1)";

export const animateOnScroll = (
  element: HTMLElement | string,
  animationProps: gsap.TweenVars,
  triggerProps?: ScrollTrigger.Vars
) => {
  return gsap.to(element, {
    ...animationProps,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none reverse",
      ...triggerProps,
    },
  });
};
