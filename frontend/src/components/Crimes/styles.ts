import styled from "styled-components"

export const ContentWrapper = styled.div`
  flex: 1;
  min-height: 100%;
`

export const CrimesContainer = styled.div`
  width: 340px;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-bottom: 10px;

    input[type="checkbox"] {
      margin-right: 10px;
      transform: scale(1.5); /* Tamanho maior para os checkboxes */
    }
  }
`;
