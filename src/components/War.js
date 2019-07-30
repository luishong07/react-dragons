import React, { Component } from 'react'

class War extends Component{
   
    render(){ 
        let warDragons = this.props.dragons 
        // console.log(warDragons,"war dragons props")
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