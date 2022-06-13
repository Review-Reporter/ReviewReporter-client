import styled from 'styled-components';

const PageContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter };
  flex-direction: column;
  max-width: 1080px;
  padding: 2rem;
  margin: 0 auto;
  font-weight: 500;
  padding-bottom: 5rem;
`;

const ContentsContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

const PageTitle = styled.h3`
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  margin-left: 3rem;
  font-weight: bold;
`;

const Background = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme.dark_bg_color};
`;

const TagContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  border: 1px solid ${props => props.theme.border_color};
  padding: 0.1rem 0.5rem;
  align-items: center;
`;

const ReviewContainer = styled.div`
  padding: 1rem 0;
  color: ${props => props.theme.sub_text_color};
`;

export const style = {
  PageContainer,
  Background,
  ContentsContainer,
  PageTitle,
  TagContainer,
  ReviewContainer
};