import styled, { css } from 'styled-components';

const HeaderWrapper = styled.div`
  ${({theme}) => {
    return css`
      border-bottom: 1px solid ${theme.border_color};
    `
  }};
  
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  z-index: 10;
`;

const HeaderContainer = styled.div`
  width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 4rem;
  background: rgb(36, 36, 36, 0.85);
`;

const Title = styled.div`
  ${({theme}) => {
    return css`
      font-family: ${theme.fonts.logo};
    `
  }};
  font-size: 1.7rem;
  padding-top: 0.45rem;
  cursor: pointer;
`;

const Categories = styled.div`
  ${({theme}) => {
    return css`
      font-family: ${theme.fonts.menu};
    `;
  }};

  color: lightgray;
  cursor: pointer;
  &:hover { opacity: 0.8; };
`;

const Color = styled.span`
  ${({theme}) => {
    return css`
      color: ${theme.palette.yellow};
    `;
  }};
`;

const Header = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Title
          onClick={scrollToTop}
        >
          <Color>re</Color>view <Color>re</Color>porter</Title>
        <Categories
          onClick={scrollToTop}
        >Categories</Categories>
      </HeaderContainer>
    </HeaderWrapper>
  )
};

export default Header;