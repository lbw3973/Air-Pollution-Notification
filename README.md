# 미세먼지 알리미

## 💁🏻 프로젝트 소개
> 지역별 실시간 미세먼지 농도를 확인할 수 있는 미세먼지 알리미

> 한국환경공단의 대기오염정보 API를 활용
<br />

#### ⏰ 개발 기간

- 2023.03.27 ~ 2023. 03. 29

<br/>

#### 🔗 배포 사이트

- [⛅ 미세먼지 알리미 ⛅](https://air-pollution-notification.vercel.app/)
<br/>

## 🛠️기술스택

- Basic: `react`, `javascript`
- Library: `axios`, `react-router-dom`, `redux`, `redux-thunk`, `emotion`
<br/>

### 📁 프로젝트 폴더 구조
```
📦Air-Pollution-Notification
 ┣ 📂src
 ┃ ┣ 📂apis
 ┃ ┣ 📂assets
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂DropdownMenu
 ┃ ┃ ┣ 📂Loading
 ┃ ┃ ┣ 📂LocalInfo
 ┃ ┃ ┗ 📂Navigation
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂AllLocation
 ┃ ┃ ┣ 📂Favorite
 ┃ ┃ ┗ 📂MyLocation
 ┃ ┣ 📂reducers
 ┃ ┣ 📂store
 ┃ ┣ 📂styles
 ┃ ┣ 📂utils
 ┃ ┣ 📜App.jsx
 ┃ ┗ 📜main.jsx
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜index.html
 ┣ 📜LICENSE
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜vercel.json
 ┣ 📜vite.config.js
 ┗ 📜yarn.lock
```
<br/>

## 🖥 프로젝트 미리보기
|**전체 시도보기**|
| --- |
|<p align="center"><img src="https://github.com/lbw3973/Air-Pollution-Notification/assets/75530371/91f236f6-8505-4dfd-aa38-1ff690f50499" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">선택한 도,시의 모든 지역 정보를 확인할 수 있습니다. </p>|

|**내 지역보기**|
| --- |
|<p align="center"><img src="https://github.com/lbw3973/Air-Pollution-Notification/assets/75530371/e3f00d25-38fa-41b1-be9f-aeeaa73f9c6f" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">특정 지역의 정보를 확인할 수 있습니다. </p>|

|**즐겨찾기**|
| --- |
|<p align="center"><img src="https://github.com/lbw3973/Air-Pollution-Notification/assets/75530371/88178961-098f-496e-be54-f5126e028b1c" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">원하는 지역을 즐겨찾기 할 수 있고, 즐겨찾기한 목록을 조회할 수 있습니다. </p>|
