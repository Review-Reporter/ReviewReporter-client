import React, { useState, forwardRef, useEffect } from 'react';
import { style } from './TotalAnalysisStyle';
import Loading from '../common/Loading';
import PopUp from '../common/PopUp';
import DataAPI from '../../lib/api/DataAPI';
import AnalysisData from '../../assets/data/total_analysis_data.json';
import { useDispatch, useSelector } from 'react-redux';
import { getKeywordsObj } from '../../modules/data';
import { setActivePage } from '../../modules/page';

const TotalAnalysis = ({ category, setIsClicked, setPageOffset }, ref) => {
  const [loading, setLoading] = useState(true);
  const [folder, setFolder] = useState(null);
  const [isInfoVisible, setIsInfoVisible] = useState(null);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectedGraph, setSelectedGraph] = useState('');
  const [keywords, setKeywords] = useState([]);
  const { keywordsObj } = useSelector(state => state.data);
  const dispatch = useDispatch();

  const keywordsText = (keywords) => {
    let text = '';

    for (let keyword of keywords) {
      text += " '" + keyword + "',"
    }

    return text.slice(0, -1)
  }

  const analysisText = (category) => {
    const array = [];
    const category_analysis = AnalysisData[category];

    category_analysis['comment'].map((data, i) => {
      let elem = <Text key={i} dangerouslySetInnerHTML={{ __html: data}}></Text>
      array.push(elem);
    });
    
    return array;
  }

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
    if (!ref) return;

    const calculateOffset = () => {
      const offsetBottom = ref.current.offsetTop + ref.current.offsetHeight;
      
      setPageOffset(offsetBottom);
    }

    calculateOffset();
    window.addEventListener('resize', calculateOffset);
    return () => {
      window.removeEventListener('resize', calculateOffset);
    }
  }, []);

  useEffect(() => {
    handlePopUpBackground(isInfoVisible);
  }, [isInfoVisible]);

  useEffect(() => {
    handlePopUpBackground(selectedGraph);
  }, [selectedGraph])

  useEffect(() => {
    const getSelectedKeywordData = () => {
      DataAPI.getSelectedKeyword(category)
      .then(res => {
        setSelectedKeywords(res);
        setLoading(false)
      })
    }

    const getKeywordData = () => {
      dispatch(getKeywordsObj(category));
    }

    const getFolderName = () => {
      let str = category;
      return str.replace(/ /gi, "");
    }

    setLoading(true);
    setSelectedKeywords('');
    getKeywordData();
    getSelectedKeywordData()
    setFolder(getFolderName());
  }, [category])

  useEffect(() => {
    if (keywordsObj) setKeywords(Object.keys(keywordsObj));
  }, [keywordsObj]);
  
  return (
    <PageContainer
      ref={ref}
    >
      {loading ? <Loading /> : <>
        <TitleContainer>
        <Title><Category>{category}</Category> ???????????? ?????? ??????</Title>
        <InfoIcon size="24"
          onClick={() => setIsInfoVisible(true)}
        />
        <PopUp
          isVisible={isInfoVisible}
          setIsVisible={setIsInfoVisible}
        >[21.05.09 ~ 22.04.23] ?????? ?????? 'Google'??? 'NAVER'????????? ???????????? ???????????? ???????????? ?????????????????????.</PopUp>
      </TitleContainer>
      {selectedKeywords &&
      <ContentsContainer>
          {selectedKeywords &&
           selectedKeywords.map((keyword, i) => (
            <GraphContainer key={i}>
              <Background
                graph
                title="?????? ??? ???????????? ???????????????."
                isClicked={selectedGraph === keyword}
                onClick={() => setSelectedGraph(keyword)}
              >
                <GraphTitle >{keyword}</GraphTitle>
                <Graph
                  src={require(`../../assets/images/differencing/${folder}/${keyword}.png`)} 
                />
              </Background>
            </GraphContainer>
          ))}
      </ContentsContainer>}
      {keywords &&
      <ContentsContainer>
        <AnalysisContainer>
          <ContentsTitle>?????? ?????? ??????</ContentsTitle>
          <Background>
            <TextContainer>
              <Text>
                {category} ???????????? ?????? ?????????, ?????? ????????? ?????? ?????? 10?????? ???????????? 
                <HighLight>{keywordsText(keywords)}</HighLight>??? ?????????????????????.
              </Text>
              <Text>
                ??? ????????? 
                <HighLight> ???????????? ????????? ??????</HighLight>??? ?????? ????????? ???????????? ???????????? 
                <HighLight> {keywordsText(selectedKeywords)}</HighLight>?????? ?????????????????????.
              </Text>
              {analysisText(category)}
            </TextContainer>
          </Background>
          <Background style={{marginTop: '1rem'}}>
            <TextContainer>
              <SummaryTitle>?????? ????????? ??????</SummaryTitle>
              <Text dangerouslySetInnerHTML={{ __html: AnalysisData[category]['summary'][0] }}></Text>
            </TextContainer>
          </Background>
          <Background style={{marginTop: '1rem'}}>
            <TextContainer>
              <SummaryTitle>?????? ????????? ??????</SummaryTitle>
              <Text dangerouslySetInnerHTML={{ __html: AnalysisData[category]['summary'][1] }}></Text>
            </TextContainer>
          </Background>
        </AnalysisContainer>
      </ContentsContainer>}
      <ButtonWrapper>
        <Button
          onClick={() => {
            dispatch(setActivePage('keywords'));
            setIsClicked(true);
          }}
        >???????????? ?????? ?????? ??????</Button>
      </ButtonWrapper>
      {selectedGraph !== "" &&
      <PopUp
        graph
        isVisible={selectedGraph !== ""}
        setIsVisible={setSelectedGraph}
      >
        <GraphTitle>{selectedGraph}</GraphTitle>
        <Graph src={require(`../../assets/images/differencing/${folder}/${selectedGraph}.png`)}/>
      </PopUp>}</>}
    </PageContainer>
  )
};

const {
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
} = style;

export default forwardRef(TotalAnalysis);