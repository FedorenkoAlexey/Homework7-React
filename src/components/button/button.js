import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.push = this.push.bind(this);
    this.state = { counter: 0 };
  }

  push() {
    this.setState({ counter: ++this.state.counter });
  }

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
