import React from "react";
//import Game from "./Game";

class Form extends React.Component {

    state = {
        inputName: "",
    }

    onChange = (evt) => {
        console.log("Ändring upptäckt");
        this.setState({inputName: evt.target.value})
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        // let textToSave = this.state.inputName;
        // console.log("textToSave: ", textToSave);
        // this.props.getNewText(textToSave);

        const newPlayer = {id: Object.keys(this.props.players).length + 1, pName: this.state.inputName, score: 0};
        this.props.saveNewPlayer(newPlayer);
    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.inputName} onChange={this.onChange} />
                <button type="submit">Lägg till spelare</button>
            </form>
        )
    }
}


export default Form;