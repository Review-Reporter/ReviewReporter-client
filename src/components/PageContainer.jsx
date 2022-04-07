import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  height: 100vh;
  padding: 2rem;
  margin: 0 auto;
  font-weight: 500;
`;

const PageContainer = ({ children }) => {
  return (
    <Main>{children}</Main>
  )
};

export default PageContainer;