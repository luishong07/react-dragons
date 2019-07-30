import React, { Component } from 'react'

class Home extends Component{

    render(){
        
        let homeDragons = this.props.dragons
        // console.log(this.props.dragons,"props dragons home")

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