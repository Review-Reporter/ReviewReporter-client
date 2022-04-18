import { useState, useEffect, useRef } from 'react';
import ReviewContents from './ReviewContents';
import Tag from './Tag';
import {
  PageContainer,
  Background,
  ContentsContainer,
  PageTitle,
  TagContainer,
  ReviewContainer
} from '../../styles/Review';

const Review = ({ category, keyword }) => {
  const [reviewKeyword, setReviewKeyword] = useState(keyword);
  const [data, setData] = useState(null);
  


  return (
    <PageContainer>
      <PageTitle>키워드별 리뷰</PageTitle>
      <ContentsContainer>
        <Background>
          <TagContainer>
            <Tag
              keyword={reviewKeyword}
              setReviewKeyword={setReviewKeyword}
            >디자인</Tag>
            <Tag
              keyword={reviewKeyword}
              setReviewKeyword={setReviewKeyword}
            >있지 유나</Tag>
          </TagContainer>
          <ReviewContainer>
            <ReviewContents></ReviewContents>
          </ReviewContainer>
        </Background>
      </ContentsContainer>
    </PageContainer>
  );
};

export default Review;