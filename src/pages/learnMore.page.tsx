import styled from "styled-components";
import { LearnMore } from "../components/routes/learnMore";

const LearnMorePage = () => {
  return (
    <LearnMoreWrapper className="pt-[60px] min-h-[100vh]">
      <LearnMore />
    </LearnMoreWrapper>
  );
};

export default LearnMorePage;

const LearnMoreWrapper = styled.main`
  background: radial-gradient(
    circle at 100%,
    #586d80,
    #eee 75%,
    #536a7f 50%,
    #dae3eb 75%
  );
`;
