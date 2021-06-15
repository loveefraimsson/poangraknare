import React from "react";
//import Johan from "./johan/Johan";
//import Anna from "./Anna/Anna";
import Player from "./Player";


class Game extends React.Component {

    state = {
        players: {
            1: {pName: "Kalle", score: 0},
            2: {pName: "Anna", score: 5},
            3: {pName: "Johan", score: 8}
        }
    }

    updateScore = (newScore, id) => {
        console.log("Update score", newScore, "id", id);

        const newState = {...this.state.players} 
        console.log("newState", newState);
        newState[id].score = newScore;

        this.setState(
            {players: newState}
        )
    }
    
    render() {
        return (
            <ul className="playersList">
                { Object.keys(this.state.players).map((item, i) => 
                    <Player key={i} id={item} pName={this.state.players[item].pName} score={this.state.players[item].score} updateScore={this.updateScore} />
                )}
            </ul>
        )
    }

}


export default Game;