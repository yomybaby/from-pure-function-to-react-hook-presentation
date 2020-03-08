import ReactDOM from 'react-dom';
import React, { memo, useState, useRef } from 'react';
import './App.css';

const CounterButton = ({ count, onClickIncrement, onClickDecrement }) => {
  return (
    <>
      <button onClick={onClickIncrement}>+</button>
      <span>{count}</span>
      <button onClick={onClickDecrement}>-</button>
    </>
  );
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
