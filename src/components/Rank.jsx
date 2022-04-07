import styled from 'styled-components';

const RankContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  margin-top: 0;
`;

const NumBackground = styled.div`
  background: ${props => props.theme.primary_color};
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  z-index: 2;
`;

const Num = styled.div`
  line-height: 2.4rem;
  text-align: center;
  margin-left: -0.1rem;
  font-weight: bold;
`;

const Keyword = styled.div`
  position: relative;
  display: flex;
`;

const RectBackground = styled.div`
  background: ${props => props.theme.light_bg_color};
  width: 9rem;
  height: 2.2rem;
  padding: 0.6rem;
  padding-left: 2rem;
  margin-left: -1rem;
  text-align: center;
  z-index: 1;
`;

const RoundBackground = styled.div`
  position: absolute;
  right: -1rem;
  background: ${props => props.theme.light_bg_color};
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0 50% 50% 0;
  z-index: 0;
`;

const Rank = ({ rank, keyword }) => {
  return (
    <RankContainer>
      <NumBackground><Num>{rank}</Num></NumBackground>
      <Keyword>
        <RectBackground>{keyword}</RectBackground><RoundBackground />
      </Keyword>
    </RankContainer>
  )
};

export default Rank;