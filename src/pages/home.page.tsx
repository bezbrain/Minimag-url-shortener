import {
  Faqs,
  Hero,
  LinkOpt,
  Price,
  TrimUrl,
  Usage,
  WhyMinimag,
} from "../components/routes/home";

interface ComingSoonProps {
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePage = ({ setIsComingSoon }: ComingSoonProps) => {
  return (
    <main className="pt-[60px]">
      <Hero />
      <Usage />
      <WhyMinimag />
      <Price setIsComingSoon={setIsComingSoon} />
      <TrimUrl />
      <Faqs />
      <LinkOpt />
    </main>
  );
};

export default HomePage;
