import ReactDOM from 'react-dom';
import React, { memo, useState, useRef } from 'react';
import './App.css';

// 함수 안에 let count : 화면이 안바뀌는 이유는?
// 함수 안에 let count (forceRender 이용) 그래도 항상 0인이유는?
// 함수 밖의 let count : 컴포넌트 두개를 쓰면?
// useState로 해결하기 : 각 컴포넌트 인스턴스마다 별도로 저장하고 setCount는 렌더까지 트리거

// useEffect로 console.log 찍어보기
// 언제 실행되나?
//
// setInterval로 count시간 간격으로 로그찍어보자 응? 왜 계속 늘어나지?
// 클린업해줘야한다.

const CounterButton = ({ count, onClick }) => {
  return <button onClick={onClick}>{count}</button>;
};

class App extends React.Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div className="App">
        <CounterButton
          count={this.state.count}
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            });
          }}
        />
      </div>
    );
  }
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
