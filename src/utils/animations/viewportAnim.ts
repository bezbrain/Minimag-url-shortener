export const viewPortAnimation = (
  inView: any,
  priceCardRef: any,
  gsap: any
) => {
  if (inView && priceCardRef.current) {
    gsap.fromTo(
      priceCardRef.current,
      {
        y: -200,
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
