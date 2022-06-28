export const initialState = {
  logInLoading: false,  // 로그인 시도중
  logInDone: false,     
  logInError: null,     
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,    
  logOutError: null, 
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,    
  signupError: null, 
  me: null,
  signUpData: {},
  loginData: {},
}

// 오타 방지를 위해 액션을 변수로 지정
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FALLOW_REQUEST = 'FALLOW_REQUEST';
export const FALLOW_SUCCESS = 'FALLOW_SUCCESS';
export const FALLOW_FAILURE = 'FALLOW_FAILURE';

export const UNFALLOW_REQUEST = 'UNFALLOW_REQUEST';
export const UNFALLOW_SUCCESS = 'UNFALLOW_SUCCESS';
export const UNFALLOW_FAILURE = 'UNFALLOW_FAILURE';

const dummyUser = (data) => ({
  ...data,
  nickname: 'eomdh',
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
});

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
};

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return  {
        ...state,
        logInLoading: true,
        logInDone: false,
        logInError: null,
      }
    case LOG_IN_SUCCESS:
      return  {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data),
      }
    case LOG_IN_FAILURE: 
      return  {
        ...state,
        logInLoading: false,
        logInError: action.error,
      }
    case LOG_OUT_REQUEST:
      return  {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      }
    case LOG_OUT_SUCCESS:
      return  {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        me: null,
      }
    case LOG_OUT_FAILURE: 
      return  {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      }
    case SIGN_UP_REQUEST:
      return  {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      }
    case SIGN_UP_SUCCESS:
      return  {
        ...state,
        signUpLoading: false,
        signUpDone: true,
      }
    case SIGN_UP_FAILURE: 
      return  {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      }
    default:
      return state;
  }
};

export default reducer;
