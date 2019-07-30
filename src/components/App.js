import React, { Component } from 'react';
import War from './War'
import Home from './Home'

class App extends Component {

  state={
    dragons: [],
    search: ""//or an empty string.... dunno
}

  componentDidMount(){
      fetch("http://localhost:3001/dragons")
      .then(res => res.json())
      .then(dragons =>{
          console.log("plus ultra",dragons);
          this.setState({dragons: dragons})
      })
  }

  seek =(searchValue)=>{//it still need to react on change ...or something
    console.log(searchValue)
    // let filteredDragons = this.state.dragons.filter(dragon => {return dragon.name.includes(searchValue)})
    // console.log(filteredDragons)
    this.setState({
      search:searchValue
    })
  }

  recall = (e,id) => {//function to change the atWar attribute
        
    e.preventDefault()
    
    let selectedDragon = this.state.dragons.find( dragon => { return dragon.id==e.target.id})
    selectedDragon.atWar = !selectedDragon.atWar
    
    this.setState({ 
      dragons: this.state.dragons
    })
  }


  render() {
    // console.log(this.state.search)
    
   
      let filteredDragons = this.state.dragons.filter(dragon => {return dragon.name.includes(this.state.search)})
    
   
 
   let homeDragons = this.state.dragons.filter(dragon => {return dragon.atWar===false })
    // console.log(homeDragons,"home")
    let warDragons = this.state.dragons.filter(dragon => {return dragon.atWar===true })
    // console.log(warDragons)
    
    return (
      <div>
        <div>
        <label>Search</label>
          <input onChange={(e)=>{this.seek(e.target.value)}} type="text"/>
        </div>
        
          
        <Home dragons={this.state.search !== '' ? filteredDragons.filter(dragon => {return dragon.atWar===false }) : homeDragons} onClick={this.recall} />
        <War dragons ={this.state.search !== '' ? filteredDragons.filter(dragon => {return dragon.atWar===true }) : warDragons} onClick={this.recall} />
        
        
      </div>
    );
  }
}
export default App;
