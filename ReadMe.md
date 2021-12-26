# 구동방식

react native에 환경설정은 아래 페이지를 따라 하시면 됩니다.  
https://reactnative.dev/docs/environment-setup  
react nativ를 설치하셨다면

1. rootdirectory에서 터미널에`npm install`을 입력 하려 패키지를 인스톨
2. `cd ios`으로 ios폴더로 접근하여 `pod install`을 입력 하려 pod파일을 인스톨합니다.
3. 이후 다시 `cd ...` 을 입력하여 rootDirectory으로 이동한뒤
4. `npm run ios`으로 스크립트를 실행시켜주세요!

# jest 테스트방법

`npx jest` 으로 테스트 통과 여부를 확인한뒤  
(혹은 jsCode의 익스텐션인 jest를 사용하셔도 좋습니다)

`npx jest --coverage` 를 통해 커버리지를 확인할수있습니다.  
![](https://images.velog.io/images/jmyoon8/post/dd172e66-ed76-44c0-9141-87eb9aa86a9a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-26%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.36.31.png)

# 네비게이션 구조

![](https://images.velog.io/images/jmyoon8/post/697a5daa-a950-4686-b188-65e2e6d04e68/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-26%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.14.01.png)

# 파일구조

```javascript
|-rootDirectory
    |--modules 			--source폴더
        |-QuizMain   --퀴즈 선택 옵션/퀴즈 플이 화면
          |-Components
             |-AccordianContent.tsx
             |-MainStackScreenHeader.tsx
             |-QuizAnswers.tsx
             |-QuizCorrectMent.tsx
             |-QuizExplorer.tsx
             |-QuizFinishModal.tsx
             |-QuizStartModal.tsx
             |-SolvingQuizHeader.tsx
             |-SolvingQuizTimer.tsx
             |-SolvingQuizTopInfo.tsx
             |-WrongAnswerListItem.tsx
          |-Screen
             |-MainScreen.tsx
             |-SolvingQuizScreen.tsx
          |-types
             |-componentType.ts
             |-quizMainStackNavigationTypes.ts
             |-quizMainTypes.ts
          |-QuizMainNavigator.tsx ---네비게이터 파일
        |-utills              	  ---프로젝트에 사용된 유틸 폴더들
          |-Redux
             |-configureStore.ts
             |-reducers.tsx
             |-MostViewedArticle.tsx
             |-reduxType.tsx
             |-slice.tsx
          |-AsyncStorageHandlers.ts
          |-axiosInstance.ts
          |-QuizOptions.ts
          |-Styles.ts
          |-utilFunction.ts
          |-utilsTypes.ts
```

### 파일구조를 나눈 원칙

1. 퀴즈옵션 선택과 풀이는 하나의 과정으로 생각하여 이와 관련된 코드들은 같은 폴더에서 관리했습니다.
2. 그외에 사용되는 코드들은 utills폴더안에 저장하였습니다. (redux, asyncStorage, axiosInstance, 퀴즈선택 옵션 데이터, utills코드의 타입 등등 ...)

# 사용한 패키지와 사용이유

### reduxjs/toolkit

1. 리덕스를 더욱더 쉽게 사용할 수 있도록 만들어진 라이브러리입니다.
2. Promise Middleware와 Thunk가 내장되어있습니다.
3. 때문에 리덕스환경을 너무나도 쉽게 만들수 있습니다.

참고한싸이트 : https://redux-toolkit.js.org/

### axios

1. instance사용가능 : baseUrl를 사용하거나 인터셉트를 사용하여 요청보내기전/요청받기전에 행동을 수행할 수 있다.
2. JSON데이터 자동변환(fetch에선 .json을 사용해야한다)
3. 대부분 브라우저와 호환가능(IE까지!)
4. timeOut설정 가능

참고한싸이트 : https://sso-feeling.tistory.com/508

### moment

1. 가장 유명한 날짜 관련 라이브러리 입니다 날짜에 관련된 모든 것들을 제공해줍니다.

참고한싸이트 : https://momentjs.com/

### react-native-element

1. 많은 수의 svg아이콘들을 제공해줍니다.(react-native-vector-icon 내장)
2. 그외에 기본적인 ui들을 지원해줍니다.

참고한 싸이트 :https://reactnativeelements.com/

### lodash

1. 가장 유명한 js의 object 컨트롤 라이브러리입니다.
2. 퀴즈api으로 받아온 문제는 정답:sring, 오답:string[]이기 때문에 보기를 만들기 위해 정답을  
   오답에 push한뒤 \_.shuffle으로 섞어주었습니다.

참고한 싸이트 : https://lodash.com/

### async-storage

1. 앱 내부에 반영구적(앱이 삭제되면 지워지므로)으로 값을 저장하기위한 localStorage  
   라이브러리입니다.  

참고한 싸이트 : https://github.com/react-native-async-storage/async-storage  

### uuid
1. 오답노트의 유니크 아이디를 만들어주기위해 사용하였습니다.  

참고한 싸이트 : https://www.npmjs.com/package/uuid  

# Convention을위한 툴

1. eslint
2. prettier
