/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react";
import Buttons from "./buttons/Buttons";
import Main from "./main/Main";

function App() {
  let [data, setData] = useState([]);
  async function fetchRandomUsers() {
    const response = await fetch('https://randomuser.me/api')
    const responseData = await response.json()
    const newUser = {
        user: `${responseData.results[0].name.first} ${responseData.results[0].name.last}`,
        money: Math.floor(Math.random() * 1000000)
      }
    setData([newUser]);
  }
  useEffect(() => {
    fetchRandomUsers()
  }, []);

  // Format number as money 
  function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  // Add User
const handleAdd = async () => {
  const response = await fetch('https://randomuser.me/api');
  const responseData = await response.json();
  const newUser = {
    user: `${responseData.results[0].name.first} ${responseData.results[0].name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };
  setData([...data, newUser]);
};

// Double Money
const doubleMoney = () => {
  const newData = data.map(user => {
    return {...user, money: Number(user.money) * 2}
  });
  setData(newData);
};

// Show Millionaires
const showMillionaires = () => {
  const newData = data.filter(item => Number(item.money) > 1000000);
  setData(newData);
};

// Sort by richest
const sortByRichest = () => {
  const newData = [...data].sort((a, b) => b.money - a.money);
  setData(newData);
};

// Calculate entire wealth
const calculateWealth = () => {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  alert(`Total wealth: ${formatMoney(wealth)}`);
};

  return (
    <div className="App">
      <h1 className="heading">React Array Methods</h1>
      <div className="container">
        <Buttons 
          handleAdd = {handleAdd}
          doubleMoney = {doubleMoney}
          showMillionaires = {showMillionaires}
          calculateWealth = {calculateWealth}
          sortByRichest = {sortByRichest}
        />
        <Main 
          data = {data}
          formatMoney = {formatMoney}
        />
      </div>
    </div>
  );
}

export default App;
