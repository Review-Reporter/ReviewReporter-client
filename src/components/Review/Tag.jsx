import React from 'react';
import styled, { css } from 'styled-components';

const Tag = ({ keyword, setReviewKeyword, children }) => {
  return (
    <TagWrapper
      onClick={() => setReviewKeyword(children)}
      color={keyword === children ? "true" : undefined}
    >{children}</TagWrapper>
  )
};

const TagWrapper = styled.div`

  ${({ theme }) => {
    return css`
      ${ theme.common.buttonStyle };
      
      height: 2rem;
      border: 2px solid gray;
      margin: 0.3rem;
      padding: 0.5rem 0.8rem;
      border-radius: 7px;
      font-size: 0.98rem;
      font-family: ${ theme.fonts.title };
    `
  }};


  ${props =>
    props.color &&
    css`
      background: ${props.theme.primary_color};
      border: 2px solid ${props.theme.primary_color};
    `
  };
`;

export default Tag;