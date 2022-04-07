import { useState, useEffect } from 'react';
import toteBag from '../assets/images/toteBag.png';
import backpack from '../assets/images/backpack.png';
import PageContainer from './PageContainer';
import Rank from '../components/Rank';
import {
  Title,
  ContentsContainer,
  Category,
  ImageWrapper,
  Image,
  KeywordContainer,
  Keyword,
  AlignWrapper,
  RankContainer,
} from '../styles/Keywords';

const keywords = ["keyword", "keyword", "keyword", "keyword", "keyword", "keyword", "keyword", "keyword", "keyword", "keyword"];

const Keywords = ({ category }) => {
  if (!category) return null;

  return (
    <PageContainer>
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
           <Rank rank={i+1} keyword={keyword} />
          ))}
        </RankContainer>
      </ContentsContainer>
    </PageContainer>
  )
};

export default Keywords;