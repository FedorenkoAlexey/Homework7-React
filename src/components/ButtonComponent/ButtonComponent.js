import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  push = e => {
    this.setState({ counter: ++e.target.value });
  };

  render() {
    return (
      <div>
        <button onClick={this.push}> Button </button>
        <p> {this.state.counter} </p>
      </div>
    );
  }
}

export default Button;
