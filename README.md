# React-Nodebird
ZeroCho님의 React로 Nodebird SNS만들기 강의 실습 내용입니다.
<br /> <br />

# 🛠 사용 기술
### - Front
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/Redux Saga-764ABC?style=for-the-badge&logo=Redux-Saga&logoColor=white"> <img src="https://img.shields.io/badge/Ant Design-0170FE?style=for-the-badge&logo=Ant Design&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> 

### - Back
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> 

### - Deploy
<img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white">
<br /> <br />

## ✏ 실습 내용
### ch1
- SSR(Server Side Rendering)이란?
  - 클라이언트가 접속했을때 브라우저에서 자바스크립트 코드를 다운로드 받아 해석 할 때까지 기다리지 않고,<br />
    서버에서 보여질 HTML을 미리 준비해 클라이언트한테 응답해주는 방식
- SSR 장단점
  - 장점 : 렌더링 속도가 향상되어 사용자가 웹 페이지에 접속했을 때 바로 볼 수 있음<br />
           SEO 최적화가 쉬움
  - 단점 : 서버 부하가 비교적 CSR(Client Side Rendering)보다 많음<br />
- SPA에서 SSR을 하기 위하여 Next.js를 사용

### ch2
- Ant Design을 사용하여 화면 만들기
- 반응형으로 개발할때는 가로 -> 세로 / 모바일 -> 태블릿 -> PC 순으로 넓혀나가면서 개발하는것이 효율적
- ```target="_blank" rel="noreferrer noopener"``` 
  - _blank 의 보안상 취약점과 퍼포먼스 향상을 위하여 noreferrer noopener를 같이 사용
- 컴포넌트의 props로 넘겨주는 함수는 useCallback을 사용해줌으로 최적화
- 불필요한 리렌더링을 막기 위해 inline style을 사용하지 않고 styled-component(또는 useMemo 등)를 사용하는 것이 최적화에 도움

### # ch3
- Redux란?
  - 애플리케이션에서 state를 관리하기 위한 라이브러리
  - 데이터 혹은 UI의 변화가 복잡, 다양해지는 SPA에서 이를 좀 더 효율적으로 관리해줌
  - Store를 컴포넌트 구조 바깥에 두고 Store를 통해 state를 업데이트하거나, 새로운 state를 받음
- Next에서 Redux를 붙힐 때의 복잡함을 간편하게 해주는 next-redux-wrapper를 사용
  - next-redux-wrapper 6버전 이상에서는 알아서 Provider로 감싸주기 때문에 따로 Provider 감싸줄 필요 없음
- Switch문에서 ...스프레드 연산자를 사용하여 데이터 추적 밑 메모리 절약
- 컴포넌트에서 reduce를 useSelector로 받아 사용하고, useDispatch로 액션을 dispatch함
- ```javascript
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
  ```
  => redux-devtools에 액션을 기록하기 위해 미들웨어 사용
- reducer를 합칠때는 combineReducer가 필요함
- react-slick 라이브러리로 캐러셀 구현
