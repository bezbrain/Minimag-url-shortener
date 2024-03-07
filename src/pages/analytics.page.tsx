import styled from "styled-components";
import { Analytics } from "../components/routes/analytics";

const AnalyticsPage = () => {
  return (
    <AnalyticsWrapper className="pt-[60px] min-h-[100vh] overflow-x-hidden">
      <Analytics />
    </AnalyticsWrapper>
  );
};

export default AnalyticsPage;

const AnalyticsWrapper = styled.main`
  /* background: radial-gradient(
    circle at 100%,
    #738697,
    #eee 80%,
    #b3bdc7 95%,
    #dae3eb 25%
  ); */
  background: radial-gradient(circle at 100%, #738697, #eee 80%, #738697);
`;
