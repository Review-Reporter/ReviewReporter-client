import styled, { css } from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
`;

export const Category = styled.div`
  display: inline-block;
  width: 400px;
  margin: 2rem 1rem;
  cursor: pointer;
  position: relative;

  :not(:hover) {
    opacity: 0.85;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  width: 400px;
`;

export const Text = styled.div`
  ${({theme}) => {
    return css`
      font-family: ${theme.fonts.category};
      color: ${theme.palette.yellow};
    `;
  }};
  
  position: absolute;
  top: 50%;
  left: 21%;
  font-size: 3em;
  letter-spacing: 2px;
`;