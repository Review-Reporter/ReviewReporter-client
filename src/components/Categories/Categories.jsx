import React, { useEffect, useRef } from 'react';
import { style } from './CategoriesStyle';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../modules/data';
import { setActivePage } from '../../modules/page';
import toteBag from '../../assets/images/category/Tote Bag.png';
import backpack from '../../assets/images/category/Backpack.png';


const Categories = ({ setPageOffset }) => {
  const pageRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory(null));
  }, []);

  useEffect(() => {
    if (!pageRef) return;

    const calculateOffset = () => {
      const offsetBottom = pageRef.current.offsetTop + pageRef.current.offsetHeight;
      
      setPageOffset(offsetBottom);
    }

    calculateOffset();
    window.addEventListener('resize', calculateOffset);
    return () => {
      window.removeEventListener('resize', calculateOffset);
    }
  }, []);

  return (
    <PageContainer
      ref={pageRef}
    >
      <CategoryContainer>
        <Category
          onClick={() => {
            dispatch(setCategory('Tote Bag'));
            dispatch(setActivePage('total_analysis'));
          }}
        >
          <Image src={toteBag} />
        </Category>
        <Category
          onClick={() => {
            dispatch(setCategory('Backpack'));
            dispatch(setActivePage('total_analysis'));
          }}
        >
          <Image src={backpack} />
        </Category>
      </CategoryContainer>
    </PageContainer>
  )
}

const {
  PageContainer,
  CategoryContainer,
  Category,
  Image
} = style;

export default Categories;