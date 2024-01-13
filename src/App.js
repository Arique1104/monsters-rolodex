import { Component } from 'react';
import logo from './logo.svg';
import CardList from './/components/card-list/card-list.jsx'
import SearchBox from './/components/search-box/search-box.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  // when do I get the list? The moment it's rendered by React
  // how do I get the list? LifeCycle Methods to update and re-render
  // where do I put the list? in State
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=> this.setState(() => {
      return {monsters: users}
    }
    ));
  }
  
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return {searchField};
      });
  }


  render() {
    const {monsters, searchField } = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box' onChangeHandler= {onSearchChange} placeholder={"search monsters"} />
      <CardList monsters = {filteredMonsters}/>
    </div>
  );
}
}

export default App;
