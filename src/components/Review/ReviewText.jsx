import { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

const Text = styled.div`
  ${props =>
    !props.isOpen &&
    css`
      display: -webkit-box; 
      word-wrap: break-word; 
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical; 
      overflow: hidden; 
      text-overflow: ellipsis;
      height: 56px;
    `
  }
  
  line-height: 1.2;
  font-size: 1rem;
`;

const ReviewText = ({ isOpen, setIsFoldVisible, children }) => {
  const text = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (text.current.scrollHeight > 58) setIsFoldVisible(true);
      else setIsFoldVisible(false);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Text
      ref={text}
      isOpen={isOpen}
    >{children}</Text>
  )
};

export default ReviewText;