import ReactDOM from 'react-dom';
import React, { useState, useEffec } from 'react';
import './App.css';

const CounterButton = () => {
  const [count, setCount] = useState(1);

  // useDebugValue('Online');
  useEffect(() => {
    console.log('effect!');
    const id = setInterval(() => console.log(new Date()), count * 1000);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <button
      onClick={() => {
        // do something
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <CounterButton />
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
