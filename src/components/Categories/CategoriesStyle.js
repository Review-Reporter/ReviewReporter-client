import styled from 'styled-components';

const PageContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter };
  
  flex-direction: column;
  max-width: 1080px;
  height: 100vh;
  padding: 2rem;
  margin: 0 auto;
  font-weight: 500;
`;

const CategoryContainer = styled.div`
  margin-top: 3rem;
  display: flex;
`;

const Category = styled.div`
  display: inline-block;
  max-width: 380px;
  margin: 2rem 1rem;
  cursor: pointer;
  position: relative;

  :not(:hover) { opacity: 0.85; }
  &:hover { transform: scale(1.02); }
`;

const Image = styled.img.attrs(() => ({
  loading: 'lazy'
}))`
  width: 100%;
`;

export const style = {
  PageContainer,
  CategoryContainer,
  Category,
  Image
};