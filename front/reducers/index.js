import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from './user';
import post from './post';

// (이전상태, 액션) => 다음상태
// combineReducers : reducer 합치기
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
    
      default: {  // Reducer 초기화 할때 switch문도 실행되므로, default 설정 필수
        return {
          ...state,
        }
      }
    }
  },
  user,
  post,
});

export default rootReducer;