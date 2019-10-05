import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import FavoritesBlock from "../favorites-block/favorites-block";

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


  return (
      <FavoritesBlock measurements={measurements} cityinfo={cityinfo}/>
  );
}

export default App;
