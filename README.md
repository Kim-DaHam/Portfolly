# Portfolly
![portfolly_thumnail](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHjjcg%2FbtsE0JqGnCm%2F29gkawNCW3C5Y3TAh9pD70%2Fimg.png)

<br/>

* 프로젝트명: Portfolly (클라이언트 & 전문가 간 포트폴리오 전시 및 외주 중개 홈페이지)
* 프로젝트 기간: 2023. 07 - 2023. 08
* 리팩토링 기간: 2024. 01 - 현재까지 진행중
* 인원: FE - 김다함

<br/>

## ⚙️ Stacks(Front-end)
* React
  * 갤러리 형태 UI를 재사용 컴포넌트로 만들기 위해 React 라이브러리를 사용합니다. 또한 고화질 이미지, 영상을 렌더링할 때 빠른 인터렉션을 위해 CSR(Client Side Rendering)을 선택했습니다.
* Typescript
  * 포트폴리오 게시물 작성, 의뢰 폼 작성 등 다양한 형태의 데이터를 주고받을 때 엄격한 코드 검사를 위해 사용합니다.
* MSW(Mock Service Worker)
  * 실제 배포 서버와 통신하기 전, 더미 데이터로 테스트하기 위해 사용합니다.
* Redux-Toolkit
  * 로그인 정보를 전역 상태로 저장한 뒤 메모리에 가볍게 접근하기 위해 사용합니다.
* Styled-Components
  * 재사용 컴포넌트에 디자인 토큰을 동적 할당하기 위해 사용합니다.
* React-Query
  * 단순한 형태의 디자인 토큰을 생성하기 위해 사용합니다.
* Firebase
  * 추후 리팩토링 단계에서 비동기 데이터를 분리해서 관리하고, 서버와 통신 횟수를 줄이기 위해 사용합니다.

<br/>

## 프로젝트 배경
 기존에 존재하는 포트폴리오 플랫폼 ‘ArtStation’과 ‘크몽’은 각각 포트폴리오 전시 혹은 외주 중 1개에 집중된 서비스를 제공합니다.
 
 포트폴리오 전시 홈페이지 ‘ArtStation’는 작가와 연락하기 위해 별도의 소통 창구를 이용해야 하는 불편함이 존재합니다.
 
 반면, 외주 홈페이지 ‘크몽’는 상업적인 포트폴리오만 게시되어 작품의 다양성이 부족합니다.
 
 ‘Portfolly’는 작품의 다양성 & 간편한 연락 시스템이라는 두 가지 서비스의 장점을 결합한 포트폴리오 전시·중개 홈페이지입니다.

<br/>

## 프로젝트 내용
 ‘Portfolly’는 작품의 다양성 & 간편한 채팅 시스템이라는 2가지 장점을 결합한 포트폴리오 전시·중개 서비스를 제공합니다. 
 
 ‘Portfolly’는 전문가 & 클라이언트 두 가지 회원으로 구성됩니다.
 
 전문가는 판매 목적에 상관없이 자유롭게 포트폴리오를 전시하고, 클라이언트는 마음에 드는 포트폴리오가 있을 경우 채팅 서비스를 통해 외주를 문의합니다.
 
 의견이 상호 합의되면 ‘Portfolly’가 제공하는 중개 서비스를 통해 외주를 진행합니다.

<br/>

## 💼 주요 업무 및 상세 역할

<b><포트폴리오 상세 보기/등록/수정 페이지 UI 및 기능 구현></b>
- react-quill 에디터 라이브러리 사용, 커스텀 이미지 핸들러로 base 64 인코딩 방식 탈피
- redux-toolkit 및 react-hook-form을 활용한 form 데이터 수집 및 API 요청

<b><styled-components를 활용한 재사용 컴포넌트 구현></b>
- 디자인 토큰을 동적 할당해서 한 가지 컴포넌트를 페이지에 따라 다양한 형태로 출력
- alert() 모달, toast, selector, 페이지마다 다른 디자인의 사용자 프로필, 태그 등
- 브라우저/HTML에서 기본 제공하는 컴포넌트를 그대로 사용하지 않고 직접 구현

<b><메서드 추출 리팩토링으로 클린 코드 유지></b>
- 5 Lines Of Code 규칙에 최대한 충실
- 유틸리티 함수 및 커스텀 훅을 활용해 재사용 로직을 분리
- API 호출 함수, 이미지 업로드, 페이지 뒤로가기/새로고침 막기 등 보일러 플레이트 코드

<b><현재까지 Firebase 배포를 목표로 리팩토링 진행 중></b>
- 전문가 & 클라이언트 간 실시간 채팅 시스템
- react-query로 비동기 데이터 분리, 좋아요/북마크 낙관적 업데이트, 무한 스크롤 구현
- GlobalErrorBoundary, ApiErrorBoundary를 활용한 사용자 친화적 에러 페이지

<br/>

## 프로젝트 결과물

<br/>

### 인트로 페이지

<br/>

작성 준비중 입니다.

<br/>

### 메인 페이지

<br/>

작성 준비중 입니다.

<br/>

작성 준비중 입니다.

<br/>

### 포트폴리오 상세보기 페이지

작성 준비중 입니다.

<br/>

### 포트폴리오 등록 페이지

작성 준비중 입니다.

<br/>

### 전문가 마이페이지

작성 준비중 입니다.

<br/>

### 클라이언트 마이페이지

작성 준비중 입니다.

<br/>

### 메세지 페이지

작성 준비중 입니다.

<br/>

## 시연 영상

작성 준비중 입니다.

<br/><br/>
