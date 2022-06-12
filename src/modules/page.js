const ACTIVE_PAGE = 'data/ACTIVE_PAGE';
const SCROLL_PAGE = 'data/SCROLL_PAGE';
const IS_KEYWORDS_VISIBLE = 'data/IS_KEYWORDS_VISIBLE';
const IS_POPUP_VISIBLE = 'data/IS_POPUP_VISIBLE';

export const setActivePage = (data) => {
  return {
    type: ACTIVE_PAGE,
    data
  }
};

export const setScrollPage = (data) => {
  return {
    type: SCROLL_PAGE,
    data
  }
};

export const setIsKeywordsVisible = (boolean) => {
  return {
    type: IS_KEYWORDS_VISIBLE,
    boolean
  }
};

export const setIsPopUpVisible = (boolean) => {
  return {
    type: IS_POPUP_VISIBLE,
    boolean
  }
};

const initialState = {
  active_page: "",
  scroll_page: "categories",
  is_keywwords_visible: false,
  is_popup_visible: false
};


export default function pageReducer(state = initialState, action) {
  switch(action.type) {
    case ACTIVE_PAGE:
      return { ...state, active_page: action.data }
    case SCROLL_PAGE:
      return { ...state, scroll_page: action.data }
    case IS_KEYWORDS_VISIBLE:
      return { ...state, is_keywords_visible: action.boolean }
    case IS_POPUP_VISIBLE:
      return { ...state, is_popup_visible: action.boolean }
    default:
      return state;
  } 
};