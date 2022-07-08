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
<br />

# ✏ 실습 내용
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

### # ch4
- Redux-thunk : Redux가 비동기액션을 dispatch할 수 있도록 도와주는 역할, 하나의 비동기 액션안에 여러 개의 동기액션을 넣을 수 있음
- Redux-Saga란?
  - thunk보다 지원하는 기능이 많음, 다양한 이펙트들을 지원하여 thunk에서는 직접 구현해야하는 불편함을 덜어줌
  - 제너레이터의 원리와 다양한 이펙트, 전체적인 흐름을 잘 아는것이 중요
  - rootSaga를 만들고, 거기에 비동기 액션들을 만들어줌
- 제너레이터 문법 : 중단점이 있는 함수
- ```javascript
     const gen = function* () {
      console.log(1);
      yield;
      console.log(2);
      yield;
      console.log(3);
      yield;
     }
  ```
  - gen.next();를 실행할 때 마다 yield가 있는 부분까지 실행되고 중단됨
- Redux-Saga의 이펙트들
  - all : 배열을 받아서 배열안의 있는 것들을 한번에 실행
  - fork / call : fork는 비동기 함수호출, call은 동기 함수호출
  - take : 액션이 실행될 때까지 대기 take(일회성), takeEvery(while(true)), takeLatest(여러번의 요청이 있을 때, 마지막 응답만)
  - throttle : 몇 초 동안에는 한번의 요청만 가능(DDoS 방지)
  - put : (=) Dispatch
- 더미데이터 만들 때 사용하는 라이브러리
  - shortId : 무작위 아이디를 생성해주는 라이브러리
  - faker : 이름, 문단, 문장, 이미지 등의 더미데이터를 생성해주는 라이브러리
- immer : 불변성을 유지하는 코드를 작성하기 쉽게 도와주는 라이브러리
- ```javascript
  function onScroll() {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 400) {
          if (hasMorePosts && !loadPostsLoading) {  // 다 불러왔거나, 불러오는 중이면 dispatch 안됨
            dispatch({
              type: LOAD_POSTS_REQUEST,
            });
          }
        }
      }
  ```
  - 인피니티 스크롤링 코드
  - useEffect에서 window.addEventListener 사용할 때 꼭 return해서 사용했던 이벤트리스너를 해제해줘야 함

### # ch5
- node.js : Chrome의 V8 엔진으로 빌드된 Javascript 런타임
- express :  node.js를 사용하여 쉽게 서버를 구성할 수 있게 만든 클래스와 라이브러리의 집합체
- express에서의 REST API 메소드
  - app.get 가져오기
  - app.post 생성
  - app.put 전체 수정
  - app.delete 삭제
  - app.patch 부분 수정
  - app.options 제공 가능한 API메소드
  - app.head 헤더만 가져오기
- app.use(express.json()) : json형식으로 데이터를 req.body에 넣어주는 역할
- app.use(express.urlencoded({ extended: true }): form을 submit했을 때 urlencoded방식으로 데이터가 넘어옴
  - express에서 미들웨어를 사용할 때 작성하는 위치가 중요함
- MySQL 연동
  - mysql2 : MySQL과 node를 연동해주는 드라이버
  - sequelize : 자바스크립트 언어로 SQL 조작할 수 있는 라이브러리
- 시퀄라이즈 모델의 기본 틀 (= MySQL의 테이블)
```javascript
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {},
    nickname: {},
    password: {},
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  User.associate = (db) => {};
  return User;
}
```
- 관계 설정
  - hasMany : 하나의 source 모델을 여러 개의 target 모델과 연결
  - belongsTo : 1:N 관계
  - belongsToMany : M:N 관계
- 시퀄라이즈 모델 구현 후 npx sequelize db:create 하여 DB에 스키마 생성
- 비동기 함수에는 await 꼭 사용하기
- CORS : 다른 도메인으로 요청을 보내면 브라우저가 차단하는 에러
  - 브라우저에서 서버로 요청할 때만 에러가 발생
  - 프록시 방식으로 해결 (브라우저 => 프론트 서버 => 백엔드 서버)
- passport 로그인 전략 구현
  - cookie : 백엔드 서버에서 브라우저로 실제적인 정보 대신 특수한 문자열을 보내주는 것 (보안강화)
  - session : 보내준 쿠키의 실제적인 데이터들
  - 쿠키를 다른 도메인으로 전달하고 싶으면 cores에서 credential: true 설정, axios에서 withCredentials: true 설정
- 게시글 10개씩 불러오기
  - limit과 offset은 게시글이 중간에 추가 삭제 될 때 문제 발생 => limit과 lastId로 구현
- 이미지 업로드 : multer 라이브러리로 multipart 해결
  - 하드디스크에 저장하는 방식으로 개발 후 배포 시 아마존 S3 클라우드로 변경
  - 먼저 서버에 이미지를 업로드하고 서버에서 프론트로 응답하여 미리보기, 리사이징할 수 있도록하는 방식
- GET 요청에서 url에 데이터를 담으려면 쿼리스트링 사용
  - GET 요청은 데이터 캐싱이 가능하다는 장점이 있
