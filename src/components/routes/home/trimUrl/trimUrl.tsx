import styled from "styled-components";
import { InputField } from "../../../general/input";

const TrimUrl = () => {
  return (
    <TrimUrlWrapper>
      <div className="max-w-[500px] p-4 mx-auto py-16 bg-white">
        <InputField />
        <select name="" id=""></select>
        <InputField />
      </div>
    </TrimUrlWrapper>
  );
};

export default TrimUrl;

const TrimUrlWrapper = styled.section`
  background: radial-gradient(#304a63, #e2e0e0);
  padding-block: 5rem;
`;
