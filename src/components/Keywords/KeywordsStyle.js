import styled, { css } from 'styled-components';

const PageContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter };
  flex-direction: column;
  max-width: 1080px;
  min-height: 100vh;
  padding: 2rem;
  margin: 6rem auto 2rem auto;
  font-weight: 500;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 5vw;
  position: relative;
`;

const Category = styled.div`
  ${({theme}) => {
    return css`
      font-family: ${theme.fonts.category};
      color: ${theme.light_bg_color};
    `;
  }};
  letter-spacing: 2px;
  font-size: 10vw;
  width: 100%;

  @media screen and (min-width: 1481px) {
    font-size: 148px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -1.5em;
`;

const Image = styled.img.attrs(() => ({
  loading: 'lazy'
}))`
  margin-top: 0.4em;
  width: 22%;
`;

const KeywordContainer = styled.div``;

const WordCloudContainer = styled.div`
  position: absolute;
  top: 1rem;
  width: 100%;
`;

const ContentsTitle = styled.h3`
  font-size: 1.4rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid gray;
  font-weight: bold;
`;

const RankContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: auto;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 8px;
  padding: 1.5rem 0 0.5rem 0;
  background: ${props => props.theme.dark_bg_color};
`;

export const style = {
  PageContainer,
  Title,
  ContentsContainer,
  Category,
  ImageWrapper,
  Image,
  KeywordContainer,
  WordCloudContainer,
  ContentsTitle,
  RankContainer
};