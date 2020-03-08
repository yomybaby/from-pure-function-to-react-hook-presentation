import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import './App.css';

// # DEMO : How to make custom hook?
// # What is input
// When change the output?
// If output is changed, when something is changed. Something is input.

// from parent:
// by itself:

// API
// `http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=3b979dc1234a31ff0494c13354801b54`
// `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

const WeatherDetailView = () => {
  return (
    <div className="WeatherDetail">
      icon <br />
      description
    </div>
  );
};

function App() {
  const list = [
    {
      id: 1645528,
      title: '🇮🇩 Denpasar'
    },
    {
      id: 1835848,
      title: '🇰🇷 Seoul'
    }
  ];

  const [selectedCityId, setSelectedCityId] = useState(list[0].id);

  const cityButtons = list.map(city => (
    <button
      key={city.id}
      style={{
        backgroundColor: selectedCityId === city.id ? '#09d3ac' : 'gray'
      }}
      onClick={() => {
        setSelectedCityId(city.id);
      }}
    >
      {city.title}
    </button>
  ));

  console.log('render <App/>');
  return (
    <div className="App">
      <h1>Current Weather</h1>
      <div>{cityButtons}</div>
      <span>{selectedCityId}</span>
      --------------
      <WeatherDetailView />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
