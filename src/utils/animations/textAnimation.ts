export const textAnimation = (heroImgRef: any, gsap: any) => {
  if (heroImgRef.current) {
    gsap.fromTo(
      heroImgRef.current,
      {
        y: -50, // Initial position moved up
        opacity: 0,
      },
      {
        duration: 2,
        y: 0, // Return to normal position
        opacity: 1,
        stagger: 0.1, // Stagger effect
        ease: "power3.out", // You can change easing function as needed
      }
    );
  }
};
