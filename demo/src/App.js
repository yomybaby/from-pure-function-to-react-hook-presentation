import ReactDOM from 'react-dom';
import React, { memo, useState } from 'react';
import './App.css';

// let storeForState = [];
// let index = 0;
// const useState = initialValue => {
//   let value = storeForState || initialValue;

//   const setState = newValue => {
//     storeForState = newValue;
//     forceRender();
//   };

//   return [value, setState];
// };
const MyButton = memo(({ title }) => {
  console.log('MyButton Render');
  // let count = 0;
  // console.log(this);
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        // console.log(count++);
        setCount(count + 1);
      }}
      id={count}
    >
      {`${title} : ${count}`}
    </button>
  );
});

function MyLabel({ title }) {
  return <span>{title}</span>;
}

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          forceRender();
        }}
      >
        force render
      </button>
      <MyButton title="x" />
      <MyButton title="y" />
      {/* <MyLabel /> */}
    </div>
  );
}

// export default App;
const forceRender = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

forceRender();
