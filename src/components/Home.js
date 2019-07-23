import React, { Component } from 'react'

class Home extends Component{


    // state={
    //     dragons: []

    // }

    // componentDidMount(){
    //     fetch("http://localhost:3001/dragons")
    //     .then(res => res.json())
    //     .then(dragons =>{
    //         console.log(dragons);
    //         this.setState({dragons: dragons})

    //     })
    // }

    // recall = (e,id) => {//function to change the atWar attribute
      
    //     e.preventDefault()
        
    //     let selectedDragon = this.props.dragons.find( dragon => { return dragon.id==e.target.id})
    //     selectedDragon.atWar = !selectedDragon.atWar
    //     return selectedDragon ///????
    // }




    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        // console.log(this.state.dragons[0])
        
        // let homeDragons = this.state.dragons.filter(dragon => {return dragon.atWar===false })

        // console.log(this)
        let homeDragons = this.props.dragons
        console.log(this.props.dragons,"props dragons home")

        return (
        <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
            <h1>Home</h1>
            {/* Render Dragons Here */}
            {homeDragons.map(dragon => {
            return (
                <div>
            <p>{dragon.name}</p>
            <img src={dragon.image} width = "150px" atl=""/>
            <p>{dragon.description}</p>
            <button id={dragon.id} onClick={this.props.onClick} >Recall</button>
            </div>
            )
                
            })}
        </div>
        )
    }

}

export default Home