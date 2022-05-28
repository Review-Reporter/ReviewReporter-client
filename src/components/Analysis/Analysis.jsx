import { useState, useEffect, forwardRef } from 'react';
import PopUp from '../common/PopUp';
import {
  PageContainer,
  Keyword,
  TitleContainer,
  Title,
  InfoIcon,
  ContentsContainer,
  GraphTitle,
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
  const [selectedGraph, setSelectedGraph] = useState('');
  
  const handlePopUpBackground = (isVisible) => {
    if (isVisible) {
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
  }

  useEffect(() => {
    if (folder) handlePopUpBackground(selectedGraph);
  }, [selectedGraph])

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
        <GraphContainer>
          <Background
            graph
            onClick={() => setSelectedGraph('언급량')}
          >
            <GraphTitle>언급량</GraphTitle>
            {folder && 
            <Graph src={require(`../../assets/images/mention/${folder}/${keyword}.png`)} />}
          </Background>
        </GraphContainer>
        <GraphContainer>
          <Background
            graph
            title="클릭 시 이미지가 확대됩니다."
            onClick={() => setSelectedGraph('판매량')}
          >
            <GraphTitle>판매량</GraphTitle>
            <Graph src={require(`../../assets/images/sales/${category}.png`)} />
          </Background>
        </GraphContainer>
        <GraphContainer>
          <Background
            graph
            title="클릭 시 이미지가 확대됩니다."
            onClick={() => setSelectedGraph('차분된 그래프')}
          >
            <GraphTitle>차분된 그래프 <SubTitle>- 설명</SubTitle></GraphTitle>
            {folder &&
             <Graph src={require(`../../assets/images/differencing/${folder}/${keyword}.png`)}/>}
          </Background>
        </GraphContainer>
      </ContentsContainer>
      <ContentsContainer>
        <AnalysisContainer>
          <ContentsTitle>분석 결과</ContentsTitle>
          <Background></Background>
        </AnalysisContainer>
      </ContentsContainer>
      {selectedGraph &&
      <PopUp
        graph
        isVisible={selectedGraph !== ""}
        setIsVisible={setSelectedGraph}
      >
        <GraphTitle>{selectedGraph}</GraphTitle>
        {folder &&
         selectedGraph === '언급량' &&
         <Graph src={require(`../../assets/images/mention/${folder}/${keyword}.png`)} />}
        {selectedGraph === '판매량' &&
         <Graph src={require(`../../assets/images/sales/${category}.png`)} />}
        {folder &&
         selectedGraph === '차분된 그래프' &&
         <Graph src={require(`../../assets/images/differencing/${folder}/${keyword}.png`)}/>}
      </PopUp>}
    </PageContainer>
  )
};

export default forwardRef(Analysis);