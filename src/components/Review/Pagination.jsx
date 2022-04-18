import { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  height: 2rem;
`;

const Button = styled.div`
  text-align: center;
  width: 2rem;
  height: 2rem;
  line-height: 2.2;
  font-size: 1rem;
  padding-right: 1px;
  cursor: pointer;

  &:hover{ opacity: 0.8 };
  &:active{ opacity: 0.7 };

  ${props =>
    props.color &&
    css`
      background: ${props.theme.primary_color};
    `
  }
`;

const Prev = styled(MdArrowBackIosNew)`
  margin-top: 0.5rem;
`;

const Next = styled(MdArrowForwardIos)`
  margin-top: 0.5rem;
`;


const Pagination = ({ currentPage, setCurrentPage, totalPage, scrollToTop }) => {
  const paginationLimit = useRef(10);
  const [startPage, setStartPage] = useState(null);

  const setNextPage = () => {
    setCurrentPage(startPage + paginationLimit.current);
  }

  const setPrevPage = () => {
    setCurrentPage(startPage - 1);
  }

  const ButtonContainer = () => {
    const start = startPage;
    const limit = paginationLimit.current;
    const array = [];

    for (let i=start; i<start+limit; i++) {
      if (i > totalPage) break;
      array.push(
      <Button
        key={i}
        color={currentPage === i ? "true" : undefined}
        onClick={() => {
          setCurrentPage(i); 
          scrollToTop();
        }}
      >{i}</Button>)
    }

    return array;
  }

  useEffect(() => {
    setStartPage(parseInt((currentPage - 1) / paginationLimit.current) * paginationLimit.current + 1);
  }, [currentPage]);


  return (
    <PaginationContainer>
      {startPage > 1 && 
      <Button
        onClick={setPrevPage}
      ><Prev /></Button>}
      <ButtonContainer />
      {startPage + paginationLimit.current <= totalPage &&
      <Button
        onClick={setNextPage}
      ><Next /></Button>}
    </PaginationContainer>
  )
};

export default Pagination;