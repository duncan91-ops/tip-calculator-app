import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 30px;

  .form-input {
    width: 100%;
    text-align: right;
    padding: 10px 10px;
    border-radius: 5px;
    border: none;
    padding: 5px 15px;
    font-size: 2.4rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondaryCyan};
    background-color: ${(props) => props.theme.colors.tertiaryLightGrayishCyan};
  }

  .form-input::placeholder {
    color: ${(props) => props.theme.colors.tertiaryDarkGrayishCyan};
    font-weight: 400;
  }

  .form-input:hover {
    cursor: pointer;
  }

  .form-input:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.primaryCyan};
  }

  .form-input.error {
    border: 2px solid orangered;
  }

  .form-icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }
`;

export default Wrapper;
