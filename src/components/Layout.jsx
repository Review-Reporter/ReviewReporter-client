import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Main = styled.div`
  max-width: 1280px;
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