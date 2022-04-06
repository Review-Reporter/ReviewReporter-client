import toteBag from '../assets/images/toteBag.jpg';
import backpack from '../assets/images/backpack.jpg';
import {
  CategoriesContainer,
  Category,
  Image,
  Text
} from '../styles/Categories';

const Categories = () => {
  return (
    <CategoriesContainer>
      <Category>
        <Image src={toteBag} />
        <Text>Tote Bag</Text>
      </Category>
      <Category>
        <Image src={backpack} />
        <Text style={{left: '19%'}}>Backpack</Text>
      </Category>
    </CategoriesContainer>
  )
};

export default Categories;