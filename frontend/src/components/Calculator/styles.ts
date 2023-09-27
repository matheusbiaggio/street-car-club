import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  padding: 20px;

  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 10px;

    input, textarea {
      width: 100%;
      padding: 10px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #fff;
      color: #333;
      cursor: not-allowed;
    }
  }

  button {
    background-color: #007BFF;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #0056b3;
    }
  }

  .clear-button {
    background-color: #ff0000;
    margin-left: 10px;
  }

  .clear-button:hover {
    background-color: #8B0000;
  }
`;