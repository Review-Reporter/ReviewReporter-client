import { useEffect } from 'react';
import PageContainer from './PageContainer';
import toteBag from '../assets/images/toteBag.jpg';
import backpack from '../assets/images/backpack.jpg';
import {
  CategoryContainer,
  Category,
  Image,
  Text
} from '../styles/Categories';

const Categories = ({ category, setCategory }) => {
  useEffect(() => {
    setCategory(null);
  }, []);

  return (
    <PageContainer>
      <CategoryContainer>
        <Category
          onClick={() => setCategory('Tote Bag')}
        >
          <Image src={toteBag} />
          <Text>Tote Bag</Text>
        </Category>
        <Category
          onClick={() => setCategory('Backpack')}
        >
          <Image src={backpack} />
          <Text style={{left: '19%'}}>Backpack</Text>
        </Category>
      </CategoryContainer>
    </PageContainer>
  )
};

export default Categories;