import styled from "styled-components";

const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 30px;
  min-width: 375px;
  max-width: 50%;
  margin: 0 auto;

  span {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2;
    color: ${(props) => props.theme.colors.secondaryDarkGrayishCyan};
  }

  .labels {
    display: flex;
    justify-content: space-between;
  }

  .labels.error .error-msg {
    display: block;
  }

  .labels .error-msg {
    color: orangered;
    display: none;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
    row-gap: 15px;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  .tip-input {
    width: 100%;
    text-align: right;
    padding: 10px;
    border-radius: 5px;
    border: none;
    padding: 5px 10%;
    font-size: 2.4rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondaryCyan};
    background-color: ${(props) => props.theme.colors.tertiaryLightGrayishCyan};
  }

  .tip-input::placeholder {
    color: ${(props) => props.theme.colors.secondaryDarkGrayishCyan};
    font-weight: 700;
  }

  .tip-input:hover {
    cursor: pointer;
  }

  .tip-input:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.primaryCyan};
  }

  .display-section {
    background-color: ${(props) => props.theme.colors.secondaryCyan};
    border-radius: 10px;
    padding: 40px 20px 30px;
  }

  .amount {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .definition {
    display: flex;
    flex-direction: column;
  }

  .definition--main {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.6rem;
  }

  .definition--sub {
    font-size: 1.2rem;
    margin-top: -5px;
  }

  .tip-amount,
  .total-amount {
    font-size: 4rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.primaryCyan};
  }

  .reset-btn {
    margin-top: 30px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    background-color: ${(props) => props.theme.colors.primaryCyan};
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondaryCyan};
    border: none;
    border-radius: 5px;
    padding: 10px 0;
  }

  .reset-btn:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.theme.colors.secondaryLightGrayishCyan};
  }

  .reset-btn:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  @media screen and (min-width: 1200px) {
    max-width: 65%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;

    .buttons {
      grid-template-columns: repeat(3, 1fr);
    }

    .display-section {
      position: relative;
      padding: 40px;
      border-radius: 15px;
    }

    .reset-btn {
      width: calc(100% - 80px);
      position: absolute;
      bottom: 40px;
    }
  }
`;

export default Wrapper;
