export const viewPortAnimation = (
  inView: any,
  containerRef: any,
  gsap: any
) => {
  if (inView && containerRef.current) {
    gsap.fromTo(
      containerRef.current,
      {
        y: -150,
        opacity: 0,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1, // Stagger effect
        ease: "power3.out",
      }
    );
  }
};
