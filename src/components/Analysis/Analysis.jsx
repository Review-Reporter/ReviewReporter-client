import { useState, useEffect, forwardRef } from 'react';
import {
  PageContainer,
  Keyword,
  TitleContainer,
  Title,
  InfoIcon,
  ContentsContainer,
  GraphContainer,
  Graph,
  ContentsTitle,
  SubTitle,
  Background,
  CloseIcon,
  OpenIcon,
  AnalysisContainer
} from '../../styles/Analysis';

const Analysis = ({ category, keyword }, ref) => {
  const [folder, setFolder] = useState(null);
  const [isMentionGraphClicked, setIsMentionGraphClicked] = useState(false);
  const [isSalesGraphClicked, setIsSalesGraphClicked] = useState(false);

  const onGraphClicked = (value) => {
    if (value === 'sales') {
      setIsSalesGraphClicked(!isSalesGraphClicked);
      setIsMentionGraphClicked(false);
    }
    else {
      setIsSalesGraphClicked(false);
      setIsMentionGraphClicked(!isMentionGraphClicked);
    }
  }
  
  useEffect(() => {
    let str = category;

    setFolder(str.replace(/ /gi, ""));
  }, [category]);

  if (!category || !keyword) return null;
  return (
    <PageContainer
      ref={ref}
    >
      <TitleContainer>
        <Title><Keyword>'{keyword}'</Keyword> 키워드 세부 분석</Title>     
        <InfoIcon size="24" />
      </TitleContainer>
      <ContentsContainer>
        {!isSalesGraphClicked &&
        <GraphContainer>
          <ContentsTitle>언급량</ContentsTitle>
          <Background
            graph
            isClicked={isMentionGraphClicked}
            onClick={() => onGraphClicked('mention')}
          >
            {folder && 
            <Graph src={require(`../../assets/images/mention/${folder}/${keyword}.png`)} />}
            {isMentionGraphClicked ? <CloseIcon size="30" /> : <OpenIcon size="24" />}
          </Background>
        </GraphContainer>}
        {!isMentionGraphClicked &&
        <GraphContainer>
          <ContentsTitle>판매량</ContentsTitle>
          <Background
            graph
            isClicked={isSalesGraphClicked}
            onClick={() => onGraphClicked('sales')}
          >
            <Graph src={require(`../../assets/images/sales/${category}_sales.png`)} />
            {isSalesGraphClicked ? <CloseIcon size="30" /> : <OpenIcon size="24" />}
          </Background>
        </GraphContainer>}
      </ContentsContainer>
      <ContentsContainer>
        <AnalysisContainer>
          <ContentsTitle>분석 결과</ContentsTitle>
          <Background></Background>
        </AnalysisContainer>
      </ContentsContainer>
    </PageContainer>
  )
};

export default forwardRef(Analysis);