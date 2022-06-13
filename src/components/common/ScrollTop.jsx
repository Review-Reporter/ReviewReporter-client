import React from 'react';
import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Button
      onClick={scrollToTop}
    >
      <Icon size="32"/>
    </Button>
  )
};

const Button = styled.div`
  ${({ theme }) => theme.common.buttonStyle };
  ${({ theme }) => theme.common.flexCenter };
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: white;
  opacity: 0.5;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  &:active { opacity: 0.4 };
`;

const Icon = styled(FiArrowUp)`
  color: gray;
`;

export default ScrollTop;