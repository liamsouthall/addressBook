import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    numbers: [],
    current: "",
    inputSwitch: true,
    tempObj: { name: "", number: "" }
  };

  enterHandler = event => {
    let storedNums = [...this.state.numbers];
    let tempObj1 = this.state.tempObj;
    if (event.key === "Enter") {
      if (this.state.inputSwitch === true) {
        tempObj1.name = this.state.current;
        this.setState({ tempObj: tempObj1, current: "", inputSwitch: false });
        console.log(this.state.numbers);
        console.log(this.state.tempObj);
      } else {
        tempObj1.number = this.state.current;
        this.setState({ tempObj: tempObj1 });
        console.log(this.state.tempObj);
        storedNums.push(this.state.tempObj);
        console.log(storedNums);
        this.setState({ numbers: storedNums, current: "", inputSwitch: true });
      }
    }
  };

  changeHandler = event => {
    this.setState({ current: event.target.value });
  };

  delete = index => {
    this.setState(this.state.numbers.splice(index, 1));
  };

  render() {
    return (
      <div>
        <h1>Address Book</h1>
        <input
          type="text"
          className="Input"
          placeholder={this.state.inputSwitch ? "Write Name" : "Write Number"}
          value={this.state.current}
          onChange={event => {
            this.changeHandler(event);
          }}
          onKeyDown={event => this.enterHandler(event)}
        ></input>
        {this.state.numbers.map((num, index) => {
          return (
            <div key={index}>
              <p>{num.name}</p>
              <p>{num.number}</p>
              <button onClick={() => this.delete(index)}>x</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
