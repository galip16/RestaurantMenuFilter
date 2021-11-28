
import './App.css';
import { useState, useEffect } from 'react';
import Food from './components/Food';
import Header from './components/Header';

function App() {

  const [data, setData] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetch("https://foodbukka.herokuapp.com/api/v1/menu")
      .then((response) => response.json())
      .then((data) => {
        setData(data.Result);

      });
  }, []);


  useEffect(() => {
    setAllItems(data)

  }, [data])




  return (
    <div className="App">
      <Header data={data} setAllItems={setAllItems} />
      <Food allItems={allItems} />
    </div>
  );
}

export default App;
