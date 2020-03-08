import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import './App.css';

// 기타 메모
// 함수 안에 let count : 화면이 안바뀌는 이유는?
// 함수 안에 let count (forceRender 이용) 그래도 항상 0인이유는?
// 함수 밖의 let count : 컴포넌트 두개를 쓰면?
// useState로 해결하기 : 각 컴포넌트 인스턴스마다 별도로 저장하고 setCount는 렌더까지 트리거

// 1. functional component로 만들기
// 2. Pure하게 만들기 방법으로 만들어보기 (부모가 cout를 가지고 있도록)
// - (슬라이드로 돌아가서) 누구의 역할인가?
// - hook에서 useState를 써보자
// 3. 함수지만 기억할 수 있다.
// 4. (슬라이드로 돌아가서) Pure한가?

const CounterButton = ({ title }) => {
  const [count, setCount] = useState(0);
  console.log('render <CounterButton/>');
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {title} : {count}
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <CounterButton title="Click" />
    </div>
  );
}

// export default App;
const forceRender = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

forceRender();

// let state;
// const fakeUseState = initValue => {
//   state = state || initValue;
//   const setState = newValue => {
//     state = newValue;
//     forceRender();
//   };
//   return [state, setState];
// };
