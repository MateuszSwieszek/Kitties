import React, {Component} from 'react';
import {CardList} from './components/card_list/card_list_component';
import './App.css';
import './components/card_list/card_list_style.css'
import { SearchBox } from './components/serach_box/search_box_component';

class App extends Component{
  constructor(){
    super();
    this.state=  {  
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>{return response.json();})
      .then(users => this.setState({monsters:users}));
  }

  handleChange = e =>{this.setState({searchField: e.target.value})}

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (    
    <div className="App">
      <h1>Kitties for my love</h1>
      <SearchBox
        placeholder='search kitties'
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters}/> 
    </div>
    );
  }
}


export default App;
