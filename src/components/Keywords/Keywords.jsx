import { forwardRef, useEffect, useState } from 'react';
import toteBag from '../../assets/images/toteBag.png';
import backpack from '../../assets/images/backpack.png';
import WordCloud from './WordCloud';
import Rank from './Rank';
import {
  PageContainer,
  Title,
  ContentsContainer,
  Category,
  ImageWrapper,
  Image,
  KeywordContainer,
  WordCloudContainer,
  RankContainer,
} from '../../styles/Keywords';


const toteBagData = {
  "tote1": 10, 
  "tote2": 5, 
  "tote3": 4, 
  "tote4": 14, 
  "tote5": 6, 
  "tote6": 13, 
  "tote7": 8, 
  "tote8": 15, 
  "tote9": 21, 
  "tote10": 1
};

const backpackData = {
  "backpack1": 10, 
  "backpack2": 5, 
  "backpack3": 4, 
  "backpack4": 14, 
  "backpack5": 6, 
  "backpack6": 13, 
  "backpack7": 8, 
  "backpack8": 15, 
  "backpack9": 21, 
  "backpack10": 1
};


const Keywords = ({ category }, ref) => {
  const [data, setData] = useState(null);
  const [rank, setRank] = useState(null);

  useEffect(() => {
    let selectedData = (category === 'Backpack') ? backpackData : toteBagData;

    setData(selectedData);
    calculateRank(selectedData);
  }, [category]);

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

  if (!category) return null;
  return (
    <PageContainer
      ref={ref}
    >
      <Title>주요 언급 키워드</Title>
      <Category>{category}</Category>
      <ContentsContainer>
        <KeywordContainer>
        <ImageWrapper>
          <Image 
            value={category} 
            src={category === 'Backpack' ? backpack : toteBag}
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
          {rank.map((keyword, i) => (
            <Rank 
              key={i} 
              rank={i+1} 
              keyword={keyword} 
            />
          ))}
        </RankContainer>}
      </ContentsContainer>
    </PageContainer>
  )
};

export default forwardRef(Keywords);