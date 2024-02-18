import {
  Faqs,
  Hero,
  Price,
  TrimUrl,
  Usage,
  WhyMinimag,
} from "../components/routes/home";

const HomePage = () => {
  return (
    <main className="pt-[60px]">
      <Hero />
      <Usage />
      <WhyMinimag />
      <Price />
      <TrimUrl />
      <Faqs />
    </main>
  );
};

export default HomePage;
