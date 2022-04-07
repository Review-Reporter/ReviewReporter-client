import styled, { css } from 'styled-components';

export const Title = styled.div`
  font-size: 1.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Category = styled.div`
  ${({theme}) => {
    return css`
      font-family: ${theme.fonts.category};
      color: ${theme.light_bg_color};
    `;
  }};
  letter-spacing: 2px;
  font-size: 10rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -3rem;
`;

export const Image = styled.img`
  width: 20rem;
`;

export const KeywordContainer = styled.div``;

export const Keyword = styled.div``;

export const RankContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 2rem;
`;
