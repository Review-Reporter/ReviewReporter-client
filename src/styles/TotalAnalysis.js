import styled, { css } from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  min-height: 100vh;
  padding: 2rem;
  margin: 0 auto;
  font-weight: 500;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
`;

export const SubTitle = styled.span`
  font-size: 1rem;
  color: lightgray;
`;

export const Category = styled.span`
  color: ${props => props.theme.sub_color};
  font-weight: bold;
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover { opacity: 0.8; };
  &:active { opacity: 0.7 };
`;

export const HighLight = styled.div``;

export const ContentsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
`;

export const ContentsTitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.7rem;
  padding-left: 0.5rem;
`;

export const GraphContainer = styled.div`
  width: 50%;
  padding: 1rem;
`;

export const Graph = styled.img`
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  padding: 2rem;
  background: ${props => props.theme.dark_bg_color};
  width: 100%;
  // height 추후 삭제
  height: 50rem;

  ${props =>
    props.graph &&
    css`
      width: 100%;
      height: 20rem;
      padding: 1rem;
    `
  };
`;

export const AnalysisContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;