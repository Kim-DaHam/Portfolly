# Portfolly
![portfolly_thumnail](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHjjcg%2FbtsE0JqGnCm%2F29gkawNCW3C5Y3TAh9pD70%2Fimg.png)

<br/>

* **프로젝트명:** Portfolly (클라이언트 & 전문가 간 포트폴리오 전시 및 외주 중개 홈페이지)
* **프로젝트 기간:** 2023. 07 - 2023. 08 (1개월)
* **리팩토링 기간:** 2024. 01 - 현재까지 진행중
* **인원:** 김다함(FE)

<br/>

## ⚙️ Stacks
* **React**
  * 갤러리 형태 UI를 재사용 컴포넌트로 만들기 위해 React 라이브러리를 사용합니다.
  * 고화질 이미지, 영상을 렌더링할 때 빠른 인터렉션을 위해 CSR(Client Side Rendering)을 선택했습니다.
* **Typescript**
  * 포트폴리오 게시물 작성, 의뢰 폼 작성 등 다양한 형태의 데이터를 주고받을 때 엄격한 코드 검사를 위해 사용합니다.
* **MSW(Mock Service Worker)**
  * 실제 배포 서버와 통신하기 전, 더미 데이터로 테스트하기 위해 사용합니다.
* **Redux-Toolkit**
  * 로그인 정보를 전역 상태로 저장한 뒤 메모리에 가볍게 접근하기 위해 사용합니다.
* **Styled-Components**
  * 재사용 컴포넌트에 디자인 토큰을 동적 할당하기 위해 사용합니다.
* **React-Query**
  * 비동기 데이터를 분리해서 관리하고, 캐싱하기 위해 사용합니다.
  * 무한스크롤, 좋아요/북마크 낙관적 업데이트 코드를 간단하게 작성하기 위해 사용합니다.

<br/>

## 프로젝트 배경
포트폴리오 플랫폼 ‘[ArtStation](https://www.artstation.com/?sort_by=latest&dimension=all)’과 ‘[크몽](https://kmong.com/portfolio/1)’은 각각 포트폴리오 전시 혹은 외주 중 1개에 집중된 서비스만을 제공합니다.
 
포트폴리오 전시 홈페이지 ‘ArtStation’는 작가와 연락하기 위해 별도의 소통 창구를 이용해야 하는 불편함이 존재합니다.
 
외주 홈페이지 ‘크몽’은 상업적인 포트폴리오만 게시되어 작품의 다양성이 부족합니다.
 
‘Portfolly’는 작품의 다양성 & 간편한 연락 시스템이라는 2가지 장점을 결합한 포트폴리오 전시·중개 홈페이지입니다.

<br/>

## 프로젝트 내용
 ‘Portfolly’는 전문가 & 클라이언트 두 가지 회원으로 구성됩니다.
 
 전문가는 판매 목적에 상관없이 자유롭게 포트폴리오를 전시하고, 클라이언트는 마음에 드는 포트폴리오가 있을 경우 채팅 서비스를 통해 외주를 문의합니다.
 
 의견이 상호 합의되면 ‘Portfolly’가 제공하는 중개 서비스를 통해 외주를 진행합니다.

<br/>

## 💼 주요 업무 및 상세 역할

**<포트폴리오 상세 보기/등록/수정 페이지 UI 및 기능 구현>**
- react-quill 에디터 라이브러리 사용, 커스텀 이미지 핸들러로 base 64 인코딩 방식 탈피
- redux-toolkit 및 react-hook-form을 활용한 form 데이터 수집 및 API 요청

**<styled-components를 활용한 재사용 컴포넌트 구현>**
- 디자인 토큰을 동적 할당해서 한 가지 컴포넌트를 페이지에 따라 다양한 형태로 출력
- alert() 모달, toast, selector, 페이지마다 다른 디자인의 사용자 프로필, 태그 등
- 브라우저/HTML에서 기본 제공하는 컴포넌트를 그대로 사용하지 않고 직접 구현

**<메서드 추출 리팩토링으로 클린 코드 유지>**
- 5 Lines Of Code 규칙에 최대한 충실
- 유틸리티 함수 및 커스텀 훅을 활용해 재사용 로직을 분리
- API 호출 함수, 이미지 업로드, 페이지 뒤로가기/새로고침 막기 등 보일러 플레이트 코드

**<현재까지 Firebase 배포를 목표로 리팩토링 진행 중>**
- 전문가 & 클라이언트 간 실시간 채팅 시스템
- react-query로 비동기 데이터 분리, 좋아요/북마크 낙관적 업데이트, 무한 스크롤 구현
- GlobalErrorBoundary, ApiErrorBoundary를 활용한 사용자 친화적 에러 페이지

<br/>

## 리팩토링 결과

* **무한스크롤이 정상 작동하지 못하는 문제**
  
→ react-query의 useInfiniteQuery 훅을 사용해 구현. 1페이지당 100개 데이터를 불러온 뒤, 10개씩 끊어서 로드.

* **포트폴리오 카테고리 메뉴를 바꿀 때마다 새롭게 서버 요청**
  
→ react-query로 데이터를 캐싱해 5개 카테고리를 1번씩 불러온 뒤에는 추가 요청하지 않음.

* **서버 상태에 따라 한 박자 늦는 ‘좋아요/북마크’ 처리**

→ react-query 낙관적 업데이트로 미리 화면을 바꾼 뒤, 요청 결과에 따라 다시 출력하는 사용자 중점 UI 구현.

* **부족한 에러 처리 **

→ react-error-boundary로 GlobalErrorBoundary와 ApiErrorBoundary를 분리한 뒤 컴포넌트 단위로 에러 메시지 및 재요청 버튼 추가.
→ 페이지 전체를 불러오지 못 할 정도의 데이터 통신 에러의 경우 스켈레톤 UI로 페이지 형태는 보여주되, 경고 모달을 띄워 뒤로가게 만듦.

* **클라이언트 의뢰 문의 기능 구현하지 못한 문제**

→ Firebase Realtime Database로 현재 채팅 시스템 추가 구현 중.
→ 전문가와 클라이언트는 마이페이지 '구매관리/판매관리' 탭에서 자신이 진행한 의뢰 별도 관리 가능.
→ 클라이언트 리뷰 작성 기능 추가 개발.

* **부족한 클라이언트 유효성 검증**

→ 홈페이지 내 존재하는 모든 POST 요청에 대해 유효성 검증 및 성공/실패 결과 Toast 알림.

* **스켈레톤 UI 추가**

→ `Suspense`, `lazy`를 활용해 Lazy Loading 구현

<br/>

## 프로젝트 결과물

<br/>

### 인트로 페이지

<br/>

![인트로 페이지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fv3y66%2FbtsEZa4AV5K%2FXyGF2CeNMdY7dQHbJwXuQ0%2Fimg.png)

* 앱, 웹, 일러스트, 사진, 영상 5개 섹션 별 최근 포트폴리오 3개를 대표로 보여줍니다.
* 각 섹션 컴포넌트 단위로 스크롤이 부드럽게 내려갑니다.
* 각 포트폴리오 아이템 클릭 시 해당 포트폴리오 상세보기 페이지로 이동합니다.
* 맨 우측 More 버튼 클릭 시 해당 섹션 **메인 페이지**로 이동합니다.

<br/>

### 메인 페이지

<br/>

![메인 페이지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHyRo3%2FbtsE8Di6qHV%2FdVKUyzjFfYBKHlivFKLMFK%2Fimg.png)

* 포트폴리오 목록을 보여주는 메인 페이지입니다.
* 좌측 상단 Section 메뉴를 클릭해 섹션별 포트폴리오를 확인할 수 있습니다.
* 섹션별 포트폴리오 아이템 썸네일 비율이 다릅니다. 'Android/iOS'는 휴대폰 화면 비율, 'Web'은 브라우저 화면 비율입니다.
* 스켈레톤 UI를 적용해 화면 로딩 시에도 사용자가 페이지의 대략적인 구조를 파악 가능합니다.
* `Suspense`, `lazy`를 사용해 Lazy Loading하며, api GET 통신 에러 시 포트폴리오 목록 부분만 에러 문구 및 재시도 버튼이 나타납니다. 
* 로그인 시 헤더 우측 상단 메뉴가 사용자 프로필 메뉴로 변경됩니다.
* 사용자 프로필 메뉴 클릭 시 Popper가 나타나고, 스크롤이 중단됩니다.
* 카테고리 NavBar는 브라우저 크기가 축소/확장될 때마다 자동으로 길이를 조절합니다.
  * 브라우저 길이가 짧아지면 좌우 화살표 버튼을 눌러 슬라이드 합니다.
  * 브라우저 길이가 짧아졌다가 다시 확장되면 카테고리바도 동시에 확장됩니다.
* 포트폴리오 아이템 위에 마우스를 hover하면 대표 이미지 3장을 슬라이드 해서 볼 수 있습니다.
* 포트폴리오 아이템 클릭 시 **포트폴리오 상세보기 페이지**로 이동합니다.

<br/>

### 포트폴리오 상세보기 페이지

![포트폴리오 상세보기 페이지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbhO496%2FbtsE1BNQsrO%2Ft0ZdsaiJRrbl3aY0WoZYs1%2Fimg.png)

* 현재 테스트 화면을 첨부해 콘텐츠가 보이지 않음 양해 부탁드립니다.
* 사용자 프로필을 클릭하면 사용자 **마이페이지**로 이동합니다.
* '문의하기' 버튼 클릭 시 사용자와의 **메세지 페이지**로 이동합니다.

<br/>

### 포트폴리오 등록 페이지

![포트폴리오 등록 페이지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbrqWQ1%2FbtsE1FvYGQH%2FgmIyh3tDakkncWevrS316K%2Fimg.png)

* 전문가 회원으로 로그인 시, 헤더 우측 상단 'Upload' 버튼을 클릭하면 **포트폴리오 등록 페이지**로 이동합니다.
* 입력할 수 있는 모든 값에 대해 유효성 검사를 실시합니다.
  * 유효성 검사를 통과하지 못할 시 붉은색 경고 Toast를 띄웁니다.
  * 게시물 정상 등록 시 초록색 성공 Toast를 띄웁니다.
*  태그 입력란은 검은색 영역 안에 키워드를 입력 후 키보드 엔터 키를 누르면 태그가 등록됩니다.
  * 등록된 태그 위에 마우스를 hover하면 x 아이콘이 표시됩니다.
  * 클릭 시 등록한 태그가 삭제됩니다.
  * 태그는 최대 10개 작성 가능하며, 10글자 미만 키워드만 등록됩니다.
* 글 작성 중 새로고침/뒤로가기/헤더 로고 클릭 시 '정말 나가시겠습니까?' confirm을 띄웁니다.

<br/>

### 전문가 마이페이지

![전문가 마이페이지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlNpcv%2FbtsEY86NDG7%2FFcBUI4GovjuTAyDj4yuhO1%2Fimg.png)

* 사용자 프로필 혹은 헤더 프로필 메뉴 '내 정보' 버튼 클릭 시 **마이페이지**로 이동합니다.
* 위 화면은 전문가 마이페이지 입니다.
* 클라이언트 마이페이지는 '판매관리→구매관리'라고 표기되고, 포트폴리오/리뷰 탭이 존재하지 않습니다.
* 본인 계정의 마이페이지인 경우에만 판매관리/구매관리/북마크가 보입니다.
* 포트폴리오, 북마크 탭은 갤러리 형태고, 리뷰는 목록 형태입니다. 둘 다 페이지네이션을 제공합니다.
* 만약 포트폴리오/북마크 아이템이 존재하지 않을 경우 '아이템이 존재하지 않습니다.'라는 문구를 표시합니다.

<br/>

### 마이페이지 - 판매 관리 / 구매 관리 탭

![판매관리 페이지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbjpcaj%2FbtsEZzQysJa%2Fx1wKVSyVH1fG0z1ragsTG0%2Fimg.png)

* 전문가 마이페이지의 '판매 관리' 탭을 클릭한 화면 모습입니다.
* 전문가가 진행 중인 의뢰 수를 상태 별로 확인할 수 있습니다.
* 진행 중/진행 완료한 의뢰는 하단 목록에서 확인할 수 있습니다.
  * 의뢰 상태(진행 중, 분쟁 중 등)/포트폴리오 섹션/의뢰 날짜/키워드 등 각종 옵션을 사용해 필터링 검색을 할 수 있습니다.(중복 필터 가능)
* 리뷰가 작성된 의뢰는 '리뷰 확인' 버튼이 표시되고, 클릭 시 해당 아이템 세로 길이가 늘어나며 작성된 리뷰가 나타납니다.
  * 클라이언트의 경우 리뷰 작성 가능한 의뢰 옆에 '리뷰 작성' 버튼이 나타나고, 클릭 시 아래에 리뷰 작성 폼이 나타납니다.
* 의뢰 아이템 클릭 시 의뢰 폼 모달이 나타납니다.

<br/>

### 의뢰 폼 모달

![의뢰 폼 모달](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fxh3sN%2FbtsE0ITNqoB%2FZ7UrsEbdnwDanjhTQVkGak%2Fimg.png)

* 의뢰 폼 모달를 띄운 모습입니다. (전체 스크롤 캡쳐로 인한 화면 깨짐 양해 부탁드립니다.)
* 전문가의 경우 '의뢰 수정' 버튼이 보이고, 클라이언트의 경우 '의뢰 취소' 버튼이 보입니다.
* '의뢰 수정' 버튼 클릭 시 현재 수정 가능한 입력값들이 input 태그로 변경됩니다.

<br/>

### 메세지 페이지

![메세지 페이지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbysAHk%2FbtsE5EXBSGm%2FYKpPlrlFK6TWpKQ75PTx70%2Fimg.png)

* '문의하기' 또는 헤더 프로필 메뉴 '메세지' 버튼 클릭 시 **메세지 페이지**로 이동합니다.
* 채팅방 목록은 `ApiErrorBoundary`로 감싸 데이터를 정상적으로 불러오지 않을 경우 재시도 버튼이 나타납니다.
* 전문가의 경우 해당 채팅방에서 의뢰가 진행되지 않았을 경우 우측 프로필 영역에 '의뢰 폼 등록' 버튼이 보입니다.
  * 클릭 시 의뢰 폼 작성 모달이 나타납니다.
* 의뢰가 진행 중인 채팅방의 경우 '의뢰 폼 확인' 버튼이 보입니다.
  * 클릭 시 의뢰 폼 모달이 나타납니다.
* 채팅방 우측 상단 '나가기' 버튼 클릭 시 '정말 나가시겠습니까?' 모달을 띄웁니다.
* 파일은 최대 10개 첨부 가능합니다.
  * 이미지 파일만 2개 이상 업로드 할 경우 3x3 Grid 형식으로 이미지 썸네일이 전송됩니다.
  * 이미지 파일 1개 전송 시 원본 비율에 맞춰 이미지 썸네일이 전송됩니다.
  * 그 외 파일 전송 시 별도의 썸네일 없이 파일 제목만 보이는 목록 형태로 전송됩니다.
  * 전송된 이미지 클릭 시 새 탭에서 이미지 열기합니다.
* 유효성 검증을 통과하지 못하면 경고 Toast가 나타납니다. 

### api 통신 에러가 발생할 경우 화면 모습

![에러 화면](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtGfhv%2FbtsE42KW8pf%2FD3oYVnXU9DJ6ytlm1REikK%2Fimg.png)

* 페이지를 불러오는 데 필수적인 데이터에 대해 api 통신 에러가 발생했을 경우, 위 화면과 같이 에러 모달을 띄우고 뒤로가기 합니다.
* '취소' 버튼 클릭 시 완벽하게 렌더링되지 못한 페이지에 그대로 머무릅니다.
* 페이지를 불러오지 못 해도 사용자가 페이지 형태를 인식할 수 있게 합니다.
* 포트폴리오 디테일 페이지, 메세지 페이지에서 api 통신 에러 발생 시 위와 같은 모달이 나타납니다.
* 그 외 페이지 일부만 책임지는 데이터의 경우(해당 데이터가 없어도 페이지를 불러오는 데는 문제 없음) `ApiErrorBoundary`로 감싸 재시도 버튼을 제공합니다.

<br/>

## 시연 영상

작성 준비중 입니다.

<br/><br/>
