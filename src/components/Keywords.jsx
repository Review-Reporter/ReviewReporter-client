import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import toteBag from '../assets/images/toteBag.png';
import backpack from '../assets/images/backpack.png';
import Rank from '../components/Rank';
import {
  PageContainer,
  Title,
  ContentsContainer,
  Category,
  ImageWrapper,
  Image,
  KeywordContainer,
  Keyword,
  RankContainer,
} from '../styles/Keywords';

const keywords = ["keyword", "keyword", "keyword", "keyword", "keyword", "keyword", "keyword", "keyword", "keyword", "keyword"];

const Keywords = ({}, ref) => {
  const { category } = useSelector(state => state.data);

  if (!category) return null;
  return (
    <PageContainer
      ref={ref}
    >
      <Title>주요 언급 키워드</Title>
      <ContentsContainer>
        <Category>{category}</Category>
        <ImageWrapper>
          <Image 
            value={category} 
            src={category === 'Backpack' ? backpack : toteBag}
          />
        </ImageWrapper>
        <KeywordContainer></KeywordContainer>
        <RankContainer>
          {keywords.map((keyword, i) => (
           <Rank key={i} rank={i+1} keyword={keyword} />
          ))}
        </RankContainer>
      </ContentsContainer>
    </PageContainer>
  )
};

export default forwardRef(Keywords);