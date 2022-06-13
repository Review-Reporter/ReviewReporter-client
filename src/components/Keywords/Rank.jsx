import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { setKeyword } from '../../modules/data';
import { setActivePage } from '../../modules/page';


const Rank = ({ rank, keyword }) => {
  const dispatch = useDispatch();

  return (
    <RankContainer
      onClick={() => {
        dispatch(setKeyword(keyword));
        dispatch(setActivePage('analysis'));
      }}
    >
      <NumBackground><Num>{rank}</Num></NumBackground>
      <Keyword>
        <RectBackground>{keyword}</RectBackground><RoundBackground />
      </Keyword>
    </RankContainer>
  )
};

const RankContainer = styled.div`
  ${({ theme }) => theme.common.buttonStyle };
  ${({ theme }) => theme.common.flexCenter };
  font-size: 1rem;
  margin: 1rem;
  margin-top: 0;
`;

const NumBackground = styled.div`
  ${({ theme }) => {
    return css`
      background: ${ theme.primary_color };
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 50%;
      z-index: 2;
    `
  }};
`;

const Num = styled.div`
  ${({ theme }) => {
    return css`
      line-height: 2.4rem;
      text-align: center;
      font-weight: bold;
      font-family: ${ theme.fonts.title };
    `
  }};
`;

const Keyword = styled.div`
  position: relative;
  display: flex;
`;

const RectBackground = styled.div`
  ${({ theme }) => {
    return css`
      background: ${ theme.light_bg_color };
      width: 9rem;
      height: 2.2rem;
      padding: 0.5rem;
      padding-left: 2rem;
      margin-left: -1rem;
      font-size: 1.25rem;
      text-align: center;
      z-index: 1;
    `
  }};
`;

const RoundBackground = styled.div`
  ${({ theme }) => {
    return css`
      position: absolute;
      right: -1rem;
      background: ${ theme.light_bg_color };
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 0 50% 50% 0;
      z-index: 0;
    `
  }}
`;

export default Rank;