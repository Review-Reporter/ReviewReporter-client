import styled, { css } from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const PageContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter };
  flex-direction: column;
  max-width: 1080px;
  min-height: 100vh;
  padding: 2rem;
  padding-bottom: 4rem;
  margin: 0 auto;
  margin-top: 6rem;
  font-weight: 500;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Category = styled.span`
  color: ${ props => props.theme.highlight_color };
  font-weight: bold;
`;

const InfoIcon = styled(AiOutlineInfoCircle)`
  ${({ theme }) => theme.common.buttonStyle };

  color: darkgray;
  margin-left: 0.5rem;
`;

const HighLight = styled.span`
  ${({ theme }) => {
    return css`
      color: ${ theme.highlight_color };
    `
  }}
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  width: 100%;
  margin-bottom: 2rem;
`;

const ContentsTitle = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  padding-left: 0.5rem;
  font-weight: bold;
`;

const GraphTitle = styled.h3`
  font-size: 1.25rem;
  color: lightgray;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  margin-bottom: 0.7rem;
  padding-left: 0.5rem;
`;

const GraphContainer = styled.div`
  padding: 1rem;
  font-size: 5vw;
`;

const Graph = styled.img.attrs(() => ({
  loading: 'lazy'
}))`
  width: 100%;
  height: auto;
`;

const Background = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      padding: 2rem;
      background: ${ theme.dark_bg_color };
      width: 100%;
    `
  }};

  ${props =>
    props.graph &&
    css`
      ${ props.theme.common.buttonStyle };

      width: 7.5em;
      max-width: 26rem;
      padding: 0;
      padding: 1rem;
    `
  };
`;

const AnalysisContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

const TextContainer = styled.div`
  ${({ theme }) => {
    return css`
      color: ${ theme.sub_text_color };
    `
  }};
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.3;
  margin-bottom: 1rem;

  &:last-child { margin-bottom: 0 };
`;

const ButtonWrapper = styled.div``;

const Button = styled.div`
  ${({ theme }) => theme.common.buttonStyle };

  color: lightgray;
  font-size: 1.3rem;
  text-decoration: underline;
`;

const SummaryTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  border-bottom: 1px solid gray;
  padding-bottom: 0.7rem;
  margin-bottom: 0.7rem;
`;


export const style = {
  PageContainer,
  TitleContainer,
  Title,
  Category,
  InfoIcon,
  ContentsContainer,
  ContentsTitle,
  GraphContainer,
  Graph,
  Background,
  AnalysisContainer,
  TextContainer,
  Text,
  HighLight,
  SummaryTitle,
  ButtonWrapper,
  Button,
  GraphTitle
};