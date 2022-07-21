# React-Nodebird
ZeroCho님의 React로 Nodebird SNS만들기 강의 실습 내용입니다.
<br /><br />
[결과물 바로가기](http://www.nodebird.online/) (인스턴스 중지상태)
<br /><br />

# 🛠 사용 기술
### - Front
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/Redux Saga-764ABC?style=for-the-badge&logo=Redux-Saga&logoColor=white"> <img src="https://img.shields.io/badge/Ant Design-0170FE?style=for-the-badge&logo=Ant Design&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=Babel&logoColor=white"> 

### - Back
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black"> <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"> 

### - Deploy
<img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=black"> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white"> <img src="https://img.shields.io/badge/AWS Lambda-FF9900?style=for-the-badge&logo=AWS Lambda&logoColor=white">

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
```javascript
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
```
  - redux-devtools에 액션을 기록하기 위해 미들웨어 사용
- reducer를 합칠때는 combineReducer가 필요함
- react-slick 라이브러리로 캐러셀 구현

### # ch4
- Redux-thunk : Redux가 비동기액션을 dispatch할 수 있도록 도와주는 역할, 하나의 비동기 액션안에 여러 개의 동기액션을 넣을 수 있음
- Redux-Saga란?
  - thunk보다 지원하는 기능이 많음, 다양한 이펙트들을 지원하여 thunk에서는 직접 구현해야하는 불편함을 덜어줌
  - 제너레이터의 원리와 다양한 이펙트, 전체적인 흐름을 잘 아는것이 중요
  - rootSaga를 만들고, 거기에 비동기 액션들을 만들어줌
- 제너레이터 문법 : 중단점이 있는 함수
```javascript
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
```javascript
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
  - GET 요청은 데이터 캐싱이 가능하다는 장점이 있음
  
### # ch6
- 서버사이드 렌더링
```javascript
  epoxrt const getServerSideProps = wrapper.getServerSideProps((context) => { ... }
```
  - 이 코드가 index.js보다 먼저 실행되어 화면 렌더 될 때 redux에 데이터가 채워진 상태로 존재함
  - getServerSideProps : 접속할 때 마다 상황에 맞춰 화면이 바뀌는 경우
  - getStaticProps : 언제 접속해도 데이터가 바뀔 일 없는 경우
- __NEXT_REDUX_WRAPPER_HYDRATE__
  - 서버사이드렌더링이 완료될 때 호출되는 액션
- 로그인 후 새로고침하면 쿠키가 서버에 전달되지 않아 로그인이 풀리기 때문에 프론트 서버로 쿠키 전달
```javascript
if (context.req && cookie)
  axios.defaults.headers.Cookie = cookie;
}  // 쿠키가 모든 서버에 공유되는 것 방지 (보안 강화)
```
```javascript
context.store.dispatch(END);
await context.store.sagaTask.Promise();  // 서버사이드렌더링에서 REQUEST가 SUCCESS 될 때 까지 기다리도록
```
- Styled-Components CSS 서버사이드 렌더링
  - babel-plugin-styled-components 인스톨
  - .babelrc 폴더 생성
  - pages폴더에 _document.js 파일 생성
  - app.js가 document로 감싸지면서 제일 위에 있는 html, head, body등을 수정할 수 있음
- SWR란
  - 원격데이터 fetch를 위한 커스텀 훅 npm 모듈
  - 첫번째 인자로 원격 상태에 대한 key, 두번째 인자로 데이터 fetch 함수를 받음
  - SWR에서 loading => data도 없고, error도 없을때,
  - return이 hooks보다 위에 있을 수 없음
  - swr은 매우 직관적이며 서버사이드렌더링 또한 가능함
- 라우팅 할 때 와일드카드(params)는 왠만하면 아래로 내려주는 것이 좋음
  - 미들웨어는 위에서 아래로, 왼쪽에서 오른쪽 순으로 실행되기 때문
  - /user/followers가 /user/:userId 에서 걸려서 오류 발생
- 게시글에 날짜 정보 추가
  - moment 라이브러리 활용 (dayjs로 넘어가는 추세, 용량면에서 이득)
  - ```javascript
    moment(post.createdAt).format('YYYY/MM/DD h:mm')
    ```
  - foramt 메소드로 편리하게 사용 
- Build
  - next build로 각 페이지의 용량 확인할 수 있음
  - next/bundle-analyzer 라이브러리로 용량을 분석할 수 있음
- 웹팩 설정
  - next.config.js 파일 생성
  - 웹팩은 next에 기본 설정이 있기 때문에 React에서 웹팩 설정하듯이 하는게 아니라 config 통해서 기본 설정을 바꿔주는 식으로 해야함
  - compress: true => html, css, js, ts 등의 파일을 gzip으로 압축하여 용량 줄일 수 있음
  - 브라우저는 gzip으로 압축된 것을 압축하여 제공할 수 있음

### # ch7
- AWS에 배포
- AWS에 EC2 인스턴스 2개 생성
  - 윈도우 환경에서 UNPROTECTED PRIVATE KEY FILE! 에러 발생
  - pem 파일의 상속 제거, 보안 주체를 소유자로 해서 권한 수정하여 에러 해결
- 생성한 EC2 인스턴스를 각각 fornt, back 서버와 연결하고 github의 코드와 연결
- front 서버와 back 서버에 node.js 설치 (back 서버에는 MySQL도 설치)
- back 서버 실행시 발생한 오류
  - ERROR: Access denied for user 'root'@'localhost' (using password: YES);
  - 구글링 결과 MySQL 비밀번호가 틀려서 발생하는 오류라고 하여 비밀번호를 변경하였으나 오류 해결되지 않음
  - 비밀번호 변경 후 .env 파일 수정하지 않아서 발생했던 오류였음
- foreground process : 터미널 끄면 같이 꺼짐
- background process : 터미널 꺼도 꺼지지 않음
  - pm2 라이브러리로 실행
- 노드에서 프로덕션 서버할때 hpp, helmet은 보안을 위해서 필수 사항
- 프론트 서버 배포
  - 요청 URL을 config 파일에 변수로 빼서 사용 (EC2 IP 주소가 계속 바뀌기 때문)
- npx pm2 start npm --start
  - pm2를 통해 npm start 할 수 있음
- 배포 후 수정사항이 생기면
  - front : git pull -> build -> pm2 start
  - back : git pull -> pm2 reload all
- 탄력적 IP 주소
  - 동적 클라우드 컴퓨팅을 위해 고안된 고정 퍼블릭 IPv 주소
  - 모든 인스턴스 또는 네트워크 인터페이스에 탄력적 IP 주소를 연결 가능
  - EC2 인스턴스를 생성하여 서버를 실행하면 동적IP를 핟랑받아 IP가 변경되는 문제가 발생하기 때문에 사용
- S3
  - 확장성, 데이터 가용성, 보안을 제공하는 객체 스토리지 서비스
  - S3 버킷 생성 (퍼블릭 액세스 차단 비활성화)
  - 버킷 정책 작성하여 퍼블릭으로 설정 (모든 사용자가 이미지 업로드 할 수 있도록)
- aws-sdk : S3 접근권한 얻을 때 사용하는 라이브러리
- multer-s3 : multer를 통해 S3 스토리지에 올릴 때 사용하는 라이브러리
  - Error: Cannot find module '@aws-sdk/abort-controller' 
  - aws-sdk v2를 사용하는 경우 multer-s3도 2.x.x 버전으로 설치해야 함. multer-s3을 2.9.0 버전으로 재설치하여 해결
- lambda로 이미지 리사이징하기
  - lambda : 이벤트에 대한 응답으로 코드를 실행하고 자동으로 기본 컴퓨팅 리소스를 관리하는 서버리스 컴퓨팅 서비스 (작은 함수 하나를 실행)
  - 프로젝트 폴더에 lambda 폴더 생성 후 aws-sdk와 sharp(이미지 리사이징 라이브러리)를 설치
  - index.js에 이미지 리사이징하는 코드 작성 후 폴더를 압축하여 s3에 업로드
  - lambda에 함수를 생성하고 트리거 설정
 

