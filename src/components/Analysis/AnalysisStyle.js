import styled, { css } from 'styled-components';
import { AiOutlineInfoCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';

const PageContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter };
  
  flex-direction: column;
  max-width: 1080px;
  padding: 2rem;
  margin: 0 auto;
  font-weight: 500;
  margin-bottom: 2rem;
  margin-top: 6rem;
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

const InfoIcon = styled(AiOutlineInfoCircle)`
  ${({ theme }) => theme.common.buttonStyle };
  
  color: lightgray;
  margin-left: 0.5rem;
`;

const Keyword = styled.span`
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
`;

const ContentsTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  padding-left: 0.5rem;
  font-weight: bold;
`;

const SubTitle = styled.span`
  font-size: 1rem;
  color: lightgray;
`;

const Background = styled.div`
  position: relative;
  padding: 2rem;
  background: ${props => props.theme.dark_bg_color};
  width: 100%;

  ${(props) =>
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

const Text = styled.p`
  color: ${ props => props.theme.sub_text_color };
  font-size: 1.1rem;
  line-height: 1.3;
`;

const List = styled.li``;

const Value = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const HighLight = styled.span`
  color: ${props => props.theme.highlight_color};
`;

const CloseIcon = styled(IoCloseOutline)`
  ${({ theme }) => theme.common.buttonStyle };

  color: darkgray;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const OpenIcon = styled(AiOutlinePlusCircle)`
  ${({ theme }) => theme.common.buttonStyle };

  color: darkgray;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const AnalysisContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const style = {
  PageContainer,
  TitleContainer,
  Title,
  InfoIcon,
  Keyword,
  ContentsContainer,
  GraphTitle,
  GraphContainer,
  Graph,
  ContentsTitle,
  SubTitle,
  Background,
  Text,
  List,
  Value,
  HighLight,
  CloseIcon,
  OpenIcon,
  AnalysisContainer
};