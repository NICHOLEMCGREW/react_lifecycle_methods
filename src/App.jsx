import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("App - Constructor");

    this.state = {
      text: "Hello World!",
      hasLoaded: false,
    };
  }

  componentDidMount() {
    console.log("App - Mount");
    this.setState({ hasLoaded: true })
  }

  componentDidUpdate() {
    console.log("App - Update");
  }

  componentWillUnmount() {
    console.log("App - Unmount");
  }

  handleInput = (event) => this.setState({ text: event.target.value });

  handleClick = (event) => this.setState({ hasLoaded: !this.state.hasLoaded });

  render() {
    console.log("App - Render")

    return (
      <div>
        {this.state.hasLoaded ? (
          <div>
          <h1>{this.state.text}</h1>
          <input placeholder={this.state.text} onChange={this.handleInput} />
        </div>
    ) : null}
       <button onClick={this.handleClick}>
        {this.state.hasLoaded ? "Unload" : "Load"}
        </button>
     </div>
    );
  }
}

export default App;
