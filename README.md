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

