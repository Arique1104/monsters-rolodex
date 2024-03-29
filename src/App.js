// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './/components/card-list/card-list.jsx'
import SearchBox from './/components/search-box/search-box.jsx'
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  console.log(searchField)
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  const [stringField, setStringField] = useState('');
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users)=> setMonsters(users));
  }, []);
  
  useEffect(() => {
    const newFilteredMonsters =  monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }) 
      setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

  const onStringChange = (event) => {
    setStringField(event.target.value);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder={"search monsters"} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
