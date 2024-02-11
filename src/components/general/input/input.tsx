import styled from "styled-components";

interface InputProps {
  inputType: string;
  inputPlaceholder: string;
  inputStyle?: string;
}

const InputField = ({
  inputType,
  inputPlaceholder,
  inputStyle,
}: InputProps) => {
  return (
    <InputWrapper className={inputStyle}>
      <input type={inputType} placeholder={inputPlaceholder} />
    </InputWrapper>
  );
};

export default InputField;

const InputWrapper = styled.div`
  > input {
    border: 1px solid #005ae2;
    border-radius: 6px;
    height: 40px;
    width: 100%;
    padding-left: 15px;
  }

  > input:focus {
    border: 2px solid #005ae2;
    outline: none;
  }
`;
