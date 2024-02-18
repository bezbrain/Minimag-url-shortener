import {
  Faqs,
  Hero,
  LinkOpt,
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
      <LinkOpt />
    </main>
  );
};

export default HomePage;
