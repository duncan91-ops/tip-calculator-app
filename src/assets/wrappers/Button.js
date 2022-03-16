import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondaryCyan};
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  padding: 10px 0;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryCyan};
    color: ${(props) => props.theme.colors.secondaryCyan};
  }

  &.active {
    background-color: ${(props) =>
      props.theme.colors.secondaryLightGrayishCyan};
    color: ${(props) => props.theme.colors.secondaryCyan};
  }
`;

export default Button;
