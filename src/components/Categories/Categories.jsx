import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActivePage, setCategory } from '../../modules/data';
import toteBag from '../../assets/images/categories_toteBag.png';
import backpack from '../../assets/images/categories_backpack.png';
import {
  PageContainer,
  CategoryContainer,
  Category,
  Image,
} from '../../styles/Categories';


const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory(null));
  }, []);

  return (
    <PageContainer>
      <CategoryContainer>
        <Category
          onClick={() => {
            dispatch(setCategory('Tote Bag'));
            dispatch(setActivePage('keywords'));
          }}
        >
          <Image src={toteBag} />
        </Category>
        <Category
          onClick={() => {
            dispatch(setCategory('Backpack'));
            dispatch(setActivePage('keywords'));
          }}
        >
          <Image src={backpack} />
        </Category>
      </CategoryContainer>
    </PageContainer>
  )
}

export default Categories;