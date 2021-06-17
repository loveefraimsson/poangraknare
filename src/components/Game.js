import React from "react";
import Player from "./Player";
import Form from "./Form";


class Game extends React.Component {

    state = {
        players: [
            {id: 1, pName: "Kalle", score: 0},
            {id: 2, pName: "Anna", score: 5},
            {id: 3, pName: "Johan", score: 8},
        ]      
    }


    saveNewPlayer = (newPlayer) => {
        const playersList = this.state.players;
        playersList.push(newPlayer);
        this.setState({players: playersList})
    }
    

    updateScore = (newScore, id) => {

        const newState = this.state.players;
        newState[id].score = newScore;

        this.setState(
            {players: newState}
        )

    }
    
    render() {

        const sortPlayerList = this.state.players;
        sortPlayerList.sort((a, b) => b.score - a.score);

        return (
            <div>
                <ul className="playersList">

                    { Object.keys(this.state.players).map((item, i) => 
                        <Player key={i} id={item} pName={this.state.players[item].pName} score={this.state.players[item].score} updateScore={this.updateScore} />
                    )}

                </ul>

                <Form players={this.state.players} saveNewPlayer={this.saveNewPlayer} />
                
            </div>
        )
    }

}


export default Game;