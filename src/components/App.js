import React, { Component } from 'react';
import War from './War'
import Home from './Home'

class App extends Component {

  state={
    dragons: []

}

componentDidMount(){
    fetch("http://localhost:3001/dragons")
    .then(res => res.json())

    .then(dragons =>{
        console.log("plus ultra",dragons);
        this.setState({dragons: dragons})

    })
}

recall = (e,id) => {//function to change the atWar attribute
      
  e.preventDefault()
  
  let selectedDragon = this.state.dragons.find( dragon => { return dragon.id==e.target.id})
  selectedDragon.atWar = !selectedDragon.atWar
  
  this.setState({ 
    dragons: this.state.dragons
  })

  // this.setState({
  //   dragons: this.state.dragons.map( dragon => {
  //     if(dragon.id != e.target.id){
  //       return dragon
  //     } else {
  //       return { ...dragon, atWar: !dragon.atWar }
  //     }
  //   })
  // })

}


//  homeDragons = this.state.dragons.filter(dragon => {return dragon.atWar===false })

//  warDragons = this.state.dragons.filter(dragon => {return dragon.atWar===true })


  render() {
   let homeDragons = this.state.dragons.filter(dragon => {return dragon.atWar===false })
    console.log(homeDragons,"home")
    let warDragons = this.state.dragons.filter(dragon => {return dragon.atWar===true })
    // console.log(this.state)
    return (
      <div>
        <Home dragons={homeDragons} onClick={this.recall} />
        <War dragons ={warDragons} onClick={this.recall}/>
      </div>
    );
  }
}

export default App;
