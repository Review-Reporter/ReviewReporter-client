import DataAPI from "../lib/api/DataAPI";

const CATEGORY = 'data/CATEGORY';
const KEYWORD = 'data/KEYWORD';
const KEYWORDS_OBJ = 'data/KEYWORDS_OBJ';

export const setCategory = (data) => {
  return {
    type: CATEGORY,
    data
  }
};

export const setKeyword = (data) => {
  return {
    type: KEYWORD,
    data
  }
};

export const getKeywordsObj = (category) => async (dispatch) => {
  const data = await DataAPI.getKeywordsObj(category);
  dispatch({
    type: KEYWORDS_OBJ,
    data
  })
}

const initialState = {
  category: "",
  keyword: "",
  keywordsObj: {}
};

export default function dataReducer(state = initialState, action) {
  switch(action.type) {
    case CATEGORY:
      return { ...state, category: action.data }
    case KEYWORD:
      return { ...state, keyword: action.data }
    case KEYWORDS_OBJ:
      return { ...state, keywordsObj: action.data }
    default:
      return state;
  } 
};