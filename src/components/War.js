import React, { Component } from 'react'

class War extends Component{
    // state={
    //     dragons: []
    // }

    // componentDidMount(){
    //     fetch("http://localhost:3001/dragons")
    //     .then(res => res.json()
    //     .then(dragons =>{
    //         console.log(dragons);
    //         this.setState({dragons: dragons})

    //     }))
    // }



    render(){
        // Note how style attributes are now passed as object instead of a string!!!

        // let homeDragons = this.state.dragons.filter(dragon => {return dragon.atWar===true })
        let warDragons = this.props.dragons 
        console.log(warDragons,"war dragons props")

        return (
            <div style={{float:'left', width:'40%', padding:'5%', backgroundColor:'#f98181'}}>
                <h1>War</h1>
                
                
                 {warDragons.map(dragon => {
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

export default War