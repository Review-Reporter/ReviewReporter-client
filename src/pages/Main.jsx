import { useState, useEffect } from 'react';
import Categories from "../components/Categories";
import Keywords from "../components/Keywords";

const Main = () => {
  const [category, setCategory] = useState(null);

  return (
    <div>
      <Categories
        category={category}
        setCategory={setCategory}
      />
      {category &&
      <Keywords 
        category={category}
      />}
    </div>
  )
};

export default Main;