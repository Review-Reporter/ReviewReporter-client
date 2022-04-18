import { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import Fold from './Fold';

const ReviewContentsContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.border_color};
  padding: 1.2rem 1rem;
`;

const Meta = styled.div`
  font-size: 0.75rem;
  color: gray;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

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
      height: 3.5rem;
    `
  }
  
  line-height: 1.2;
  font-size: 1rem;
`;



const ReviewContents = ({ vendor_name , date, product_name, contents }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFoldVisible, setIsFoldVisible] = useState(false);
  const text = useRef(null);

  useEffect(() => {
    if (text.current.scrollHeight > 56) setIsFoldVisible(true);
    else setIsFoldVisible(false);
  }, [contents]);
  
  return (
    <ReviewContentsContainer>
      <Meta>{vendor_name} · {date} · {product_name}</Meta>
      <Text
        ref={text}
        isOpen={isOpen}
      >{contents}</Text>
      <Fold
        isVisible={isFoldVisible}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </ReviewContentsContainer>
  )
};

export default ReviewContents;