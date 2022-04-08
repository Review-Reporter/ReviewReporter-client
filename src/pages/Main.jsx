import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setKeyword, setActivePage } from '../modules/data';
import Categories from "../components/Categories";
import Keywords from "../components/Keywords";

const Main = () => {
  const { category, active_page } = useSelector(state => state.data);
  const dispatch = useDispatch();
  const keywordRef = useRef(null);

  useEffect(() => {
    if (active_page === 'categories'){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (active_page === 'keywords'){
      dispatch(setKeyword(""));
      dispatch(setActivePage(""));
      window.scrollTo({ top: keywordRef.current.offsetTop - 35, behavior: 'smooth' });
    }
  }, [active_page, dispatch]);

  return (
    <div>
      <Categories
        category={category}
      />
      {category &&
      <>
      <Keywords 
        ref={keywordRef}
        category={category}
      />
      </>
      }
    </div>
  )
};

export default Main;