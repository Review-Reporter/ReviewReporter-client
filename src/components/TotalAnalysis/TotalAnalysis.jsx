import { useState, forwardRef, useEffect } from 'react';
import Info from '../common/Info';
import {
  PageContainer,
  TitleContainer,
  Title,
  SubTitle,
  Category,
  InfoIcon,
  ContentsContainer,
  ContentsTitle,
  GraphContainer,
  Graph,
  Background,
  AnalysisContainer,
} from '../../styles/TotalAnalysis';

const TotalAnalysis = ({ category }, ref) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  useEffect(() => {
    if (isInfoVisible) {
      document.body.style.cssText = `
        position: fixed;
        top: -${window.pageYOffset}px;
        overflow-y: scroll;
        width: 100%;
      `
    }
    else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [isInfoVisible]);
  
  return (
    <PageContainer
      ref={ref}
    >
      <TitleContainer>
        <Title><Category>{category}</Category> 카테고리 통합 분석</Title>
        <InfoIcon size="24" color="darkgray"
          onClick={() => setIsInfoVisible(true)}
        />
        <Info
          isVisible={isInfoVisible}
          setIsVisible={setIsInfoVisible}
        >[21.05.09 ~ 22.04.23] 기간 동안 'Google'과 'NAVER'에서의 검색량을 바탕으로 언급량을 측정하였습니다.</Info>
      </TitleContainer>
      <ContentsContainer>
        <GraphContainer>
          <ContentsTitle>언급량 <SubTitle>- 판매량 연관 키워드</SubTitle></ContentsTitle>
          <Background
            graph
          ><Graph /></Background>
        </GraphContainer>
        <GraphContainer>
          <ContentsTitle>판매량</ContentsTitle>
          <Background
            graph
          ><Graph /></Background>
        </GraphContainer>
      </ContentsContainer>
      <ContentsContainer>
        <AnalysisContainer>
          <ContentsTitle>통합 분석 결과</ContentsTitle>
          <Background>
            
          </Background>
        </AnalysisContainer>
      </ContentsContainer>
    </PageContainer>
  )
};

export default forwardRef(TotalAnalysis);