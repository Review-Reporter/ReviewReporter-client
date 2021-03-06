import React, { forwardRef, useEffect, useState } from 'react';
import { style } from './KeywordsStyle';
import Loading from '../common/Loading';
import { useSelector } from 'react-redux';
import toteBag from '../../assets/images/product/toteBag.png';
import backpack from '../../assets/images/product/backpack.png';
import WordCloud from './WordCloud';
import Rank from './Rank';


const Keywords = ({ category, setPageOffset }, ref) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [rank, setRank] = useState(null);
  const { keywordsObj } = useSelector(state => state.data);

  const calculateRank = (data) => {
    let keys = Object.keys(data);
    let values = Object.values(data);
    let tmp = null;

    for (let i=0; i<keys.length-1; i++) {
      for (let j=i+1; j<keys.length; j++) {
        if (values[i] < values[j]) {
          tmp = values[i];
          values[i] = values[j];
          values[j] = tmp;

          tmp = keys[i];
          keys[i] = keys[j];
          keys[j] = tmp;
        }
      }
    }

    setRank(keys);
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
    if (!keywordsObj) return null;

    setLoading(true)
    setData(keywordsObj);
    calculateRank(keywordsObj);
    setLoading(false);
  }, [keywordsObj]);
  

  if (!category) return null;
  return (
    <PageContainer
      ref={ref}
    >
      {loading ? <Loading /> : <>
      <Title>주요 언급 키워드</Title>
      <Category>{category}</Category>
      <ContentsContainer>
        <KeywordContainer>
        <ImageWrapper>
          <Image 
            value={category} 
            src={category === 'Backpack' ? backpack : toteBag}
            style={category === 'Tote Bag' ? {marginTop: '0.8em'} : {}}
          />
        </ImageWrapper>
        {data && <WordCloudContainer>
          <WordCloud 
            data={data}
            category={category}
          />
        </WordCloudContainer>}
        </KeywordContainer>
        {rank &&
        <RankContainer>
          <ContentsTitle>워드 클라우드 순위</ContentsTitle>
          {rank.map((keyword, i) => (
            <Rank 
              key={i} 
              rank={i+1} 
              keyword={keyword} 
            />
          ))}
        </RankContainer>}
      </ContentsContainer></>}
    </PageContainer>
  )
};


const {
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
} = style;

export default forwardRef(Keywords);