import styled from 'styled-components';

export const SoothesContainer = styled.div`
  padding: 20px;
  margin: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  label {
    display: flex;
    align-items: flex-start;
    font-size: 1.1rem;
    text-align: center;
    color: black;
    gap: 10px;
    margin-bottom: 10px;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
    }
  }

  input[type="checkbox"] {
    margin-top: 3px;
    transform: scale(1.5); /* Tamanho maior para os checkboxes */
  }
`;

export const CrimesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin: 20px;

  button {
    width: 340px;
    padding: 12px 24px;
    margin-bottom: 10px;
    font-size: 1.2rem;
    background: none;
    border: none;
    border-radius: 10px;
    text-align: left;

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;