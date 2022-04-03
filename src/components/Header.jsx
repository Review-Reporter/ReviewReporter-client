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
`;

const HeaderContainer = styled.div`
  width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 4rem;
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
  color: lightgray;
  font-family: 'Lato', sans-serif;
  cursor: pointer;
  &:hover { opacity: 0.8; };
`;

const Color = styled.span`
  ${({theme}) => {
    return css`
      color: ${theme.palette.orange};
    `;
  }};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Title><Color>re</Color>view <Color>re</Color>porter</Title>
        <Categories>Categories</Categories>
      </HeaderContainer>
    </HeaderWrapper>
  )
};

export default Header;