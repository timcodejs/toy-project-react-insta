# ReactJS로 Instagram 클론코딩

| Day | 적용 | 프로젝트 내용 |
| ------ | -- |----------- |
| 1일차 | ✅ | 메인 페이지 컴포넌트화 |
| 2일차 | ✅ | styled-components 모듈을 사용하여 디자인 적용 |
| 3일차 | ✅ | Hooks 함수를 사용하여 이벤트 적용 |
| 4일차 | ✅ | Context API를 사용하여 ZIndex 전역 상태 관리 |

## 1일차 - 메인 페이지 컴포넌트화 (main.js)
  - header.js (로고, 검색창, Navi 메뉴)
  - container.js (컨텐츠 영역)
  - userinfo.js (유저 프로필 및 친구 추천 섹션)


## 2일차 - styled-components 모듈을 사용하여 디자인 적용
  - createGlobalStyle -> App.js에 글로벌 스타일 적용
  - 각 컴포넌트별 필요한 스타일 적용


## 3일차 - Hooks 함수를 사용하여 이벤트 적용
  - useState 상태관리
  - useCallback 함수 재사용

## 4일차 - Context API를 사용하여 ZIndex 전역 상태 관리
  - onClick Event로 발생하는 Popup창 컴포넌트별 z-index 문제 발견
  - 컴포넌트의 Depth에 따라 z-index가 적용이 안되기 때문에 전역으로 관리하기 위해 Context API 적용
  - App.js에 Provider 적용 후 필요한 컴포넌트에 ZindexerContext 적용
  - onClick Event 발생 시 "PLUS" action을 넘겨 initialState에 + 2를 넘기고 z-index 증가
  - Popup창을 닫을 시 "MINUS" action을 넘겨 initialState에 - 2를 넘기고 z-index 원복

<img width="1440" alt="1" src="https://user-images.githubusercontent.com/46413981/161025634-f93314a1-80ac-432d-9835-3d689cfdf193.png">
<img width="1440" alt="2" src="https://user-images.githubusercontent.com/46413981/161025665-5930801e-2e73-4113-962b-eeeaebd095de.png">
<img width="1440" alt="3" src="https://user-images.githubusercontent.com/46413981/161025673-ac5c43b8-007a-48c8-8270-e5c5f4ba6e1c.png">
<img width="1440" alt="4" src="https://user-images.githubusercontent.com/46413981/161025687-97d1dcab-8b1b-49f0-8806-a23b9a497377.png">
<img width="1440" alt="5" src="https://user-images.githubusercontent.com/46413981/161025696-8859785b-76ea-4eec-ba35-a47589ade29c.png">
