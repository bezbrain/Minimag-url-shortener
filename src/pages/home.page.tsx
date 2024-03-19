import styled from "styled-components";
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
    <HomePageWrapper className="pt-[60px]">
      <Hero />
      <Usage />
      <WhyMinimag />
      <Price setIsComingSoon={setIsComingSoon} />
      <TrimUrl />
      <Faqs />
      <LinkOpt />
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.main`
  background: radial-gradient(
    circle at 100%,
    #586d80,
    #eee 75%,
    #536a7f 50%,
    #dae3eb 75%
  );
`;
