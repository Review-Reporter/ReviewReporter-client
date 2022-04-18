import { useState, useEffect, useRef } from 'react';
import ReviewContents from './ReviewContents';
import Tag from './Tag';
import Pagination from './Pagination';
import {
  PageContainer,
  Background,
  ContentsContainer,
  PageTitle,
  TagContainer,
  ReviewContainer
} from '../../styles/Review';

const review = [
  {
    "id": 1,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 ZARA 락 플랩 숄더백 "
  },
  {
    "id": 2,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "2"
  },
  {
    "id": 3,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "3"
  },
  {
    "id": 4,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "4"
  },
  {
    "id": 5,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "5"
  },
  {
    "id": 6,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "6"
  },
  {
    "id": 7,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "7"
  },
  {
    "id": 8,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "8"
  },
  {
    "id": 9,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "9"
  },
  {
    "id": 10,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "10"
  },
  {
    "id": 11,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "11"
  },
  {
    "id": 12,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "12"
  },
  {
    "id": 13,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "13"
  },
  {
    "id": 14,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "14"
  },
  {
    "id": 15,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "15"
  },
  {
    "id": 16,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "id": 17,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "id": 18,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "id": 19,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "id": 20,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "id": 21,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "id": 22,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "id": 21,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "id": 22,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "id": 21,
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  }
  ,
  {
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  },
  {
    "date": "22-03-09",
    "vendor_name": "Musinsa",
    "product_name": "ZARA 락 플랩 숄더백",
    "contents": "리뷰입니다"
  }
];

const Review = ({ category, keyword }) => {
  const [reviewKeyword, setReviewKeyword] = useState(keyword);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const totalPage = useRef(0);
  const limit = useRef(10);
  const pageRef = useRef(10);

  const countOffset = () => {
    setOffset((currentPage - 1) * limit.current)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: pageRef.current.offsetTop - 20});
  }
  
  useEffect(() => {
    setData(review);
    const totalData = review.length;
    totalPage.current = Math.ceil(totalData / limit.current);
  }, []);

  useEffect(() => {
    countOffset(review);
  }, [currentPage]);

  return (
    <PageContainer
      ref={pageRef}
    >
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
          {data &&
          <ReviewContainer>
            {data.slice(offset, offset + limit.current).map((review, i) => 
              <ReviewContents
                key={i}
                id={review.id}
                vendor_name={review.vendor_name}
                product_name={review.product_name}
                date={review.date}
                contents={review.contents}
              />
            )}
          </ReviewContainer>}
          <Pagination 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage.current}
            scrollToTop={scrollToTop}
          />
        </Background>
      </ContentsContainer>
    </PageContainer>
  );
};

export default Review;