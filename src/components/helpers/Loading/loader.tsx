import styled from "styled-components";
import { Load } from "../../../assets/svg";

const Loader = ({ color }: any) => (
  <div className="w-fit mx-auto min-h-[70vh]">
    <LoaderContainer>
      <LoaderWrapper>
        <Load color={color} />
      </LoaderWrapper>
    </LoaderContainer>
  </div>
);

export default Loader;

const LoaderContainer = styled.div`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`;
const LoaderWrapper = styled.div`
  /* border: 2px solid red; */
  /* height: 50px;
  width: 50px; */
`;
