import React from 'react';
import './App.css';
import Favorites from "../favorites/favorites";

function App() {

  const cityinfo = {
    name: "Mocow",
    temperature: "10",
    icon: "10d"
  };

  const measurements = [
    {
      name: "Ветер",
      text: "Отлично"
    },
    {
      name: "Ветер",
      text: "Отлично"
    },
    {
      name: "Ветер",
      text: "Отлично"
    }
  ];

  const blocks = [
    {
      measurements: measurements,
      cityinfo: cityinfo
    },
    {
      measurements: measurements,
      cityinfo: cityinfo
    },
    {
      measurements: measurements,
      cityinfo: cityinfo
    }
  ];


  return (
      <Favorites/>
  );
}

export default App;
