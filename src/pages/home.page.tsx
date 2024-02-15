import { Hero, Price, Usage, WhyMinimag } from "../components/routes/home";

const HomePage = () => {
  return (
    <main className="pt-[60px]">
      <Hero />
      <Usage />
      <WhyMinimag />
      <Price />
    </main>
  );
};

export default HomePage;
