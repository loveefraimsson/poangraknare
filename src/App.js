import './App.css';
import React from "react";
import Game from "./components/Game";
//import Form from "./components/Form";



class App extends React.Component {

  // state = {
  //   inputText: "Skriv text"
  // }


  // saveNewText = (textToSave) => {
  //   console.log("textToSave från App: ", textToSave);
  // }


  
  render() {
    return (
      <div>
        <Game />
        {/* <Form inputText={this.state.inputText} getNewText={this.saveNewText} /> */}
      </div>
    )
  }
  
}


export default App;
