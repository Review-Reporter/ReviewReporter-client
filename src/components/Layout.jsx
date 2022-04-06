import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  height: calc(100vh - 4.04rem);
  padding: 2rem;
  margin: 0 auto;
  font-weight: 500;
`;


const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export default Layout;