import React from "react";

class Player extends React.Component {

    addScore = (evt) => {
        console.log("Add score");
        this.props.updateScore(this.props.score + 1, evt.target.id);
    }

    removeScore = (evt) => {
        console.log("Remove score");
        this.props.updateScore(this.props.score - 1, evt.target.id);
    }



    render() {
        return <li>{this.props.pName}: {this.props.score} poäng <button onClick={this.addScore} id={this.props.id} >+</button> <button onClick={this.removeScore} id={this.props.id} >-</button> </li>
    }
}


export default Player;