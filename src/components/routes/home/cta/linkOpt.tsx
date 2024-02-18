import styled from "styled-components";
import { LinkBtn } from "../../../general";
import { getAuthToken } from "../../../../utils/authToken";

const LinkOpt = () => {
  return (
    <LinkOptWrapper>
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-white text-xl font-bold mix-blend-overlay sm:text-4xl">
          Revolutionizing Link Optimization
        </h2>
        {!getAuthToken() && (
          <LinkBtn
            btnContent="Get Started"
            link="/register"
            btnStyles="w-fit mx-auto mt-8"
          />
        )}
      </div>
    </LinkOptWrapper>
  );
};

export default LinkOpt;

const LinkOptWrapper = styled.section`
  background: radial-gradient(
    circle at 100%,
    #304a63,
    #304a63 50%,
    #eee 75%,
    #304a63 75%
  );
  padding: 7rem 1rem;
`;
