import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
`;

export const ContentContainer = styled.div`
  min-height: calc(100vh - 141px);
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  > div {
    flex-basis: calc(33.33% - 20px);
    margin: 10px;
  }
`;
