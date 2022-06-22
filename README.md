# React-Nodebird
ZeroCho님의 React로 Nodebird SNS만들기 강의 실습 내용입니다.
<br /> <br />

## 🛠 사용 기술
### - Front
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/Redux Saga-764ABC?style=for-the-badge&logo=Redux-Saga&logoColor=white"> <img src="https://img.shields.io/badge/Ant Design-0170FE?style=for-the-badge&logo=Ant Design&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> 

### - Back
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white">
<br /> <br />

## ✏ 실습 내용
### # ch1
- SSR(Server Side Rendering)이란?
  - 클라이언트가 접속했을때 브라우저에서 자바스크립트 코드를 다운로드 받아 해석 할 때까지 기다리지 않고,<br />
    서버에서 보여질 HTML을 미리 준비해 클라이언트한테 응답해주는 방식
- SSR 장단점
  - 장점 : 렌더링 속도가 향상되어 사용자가 웹 페이지에 접속했을 때 바로 볼 수 있음<br />
           SEO 최적화가 쉬움
  - 단점 : 서버 부하가 비교적 CSR(Client Side Rendering)보다 많음<br />
- SPA에서 SSR을 하기 위하여 Next.js를 사용

### # ch2
- Ant Design을 사용하여 화면 만들기
- 반응형으로 개발할때는 가로 -> 세로 / 모바일 -> 태블릿 -> PC 순으로 넓혀나가면서 개발하는것이 효율적
- ```target="_blank" rel="noreferrer noopener"``` 
  - _blank 의 보안상 취약점과 퍼포먼스 향상을 위하여 noreferrer noopener를 같이 사용
- 컴포넌트의 props로 넘겨주는 함수는 useCallback을 사용해줌으로 최적화
- 불필요한 리렌더링을 막기 위해 inline style을 사용하지 않고 styled-component(또는 useMemo 등)를 사용하는 것이 최적화에 도움

### # ch3

