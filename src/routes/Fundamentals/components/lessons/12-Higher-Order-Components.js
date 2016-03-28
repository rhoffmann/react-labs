import React from 'react';

const counterComponent = (InnerComponent) => React.createClass({
  getInitialState() {
    return { val: 0 };
  },
  componentWillMount() {
    console.log('willMount');
  },
  componentDidMount() {
    console.log('didMount');
  },
  update() {
    this.setState({
      val: this.state.val + 1
    });
  },
  render() {
    return (
      <InnerComponent
        update={this.update}
        {...this.state}
        {...this.props}
      />
    );
  }
});

const Button = (props) => {
  return <button onClick={props.update}>{props.txt} - {props.val}</button>;
};

Button.propTypes = {
  update: React.PropTypes.func,
  txt: React.PropTypes.string,
  val: React.PropTypes.number
};

const Label = (props) => {
  return <label onMouseOver={props.update}>{props.txt} - {props.val}</label>;
};

Label.propTypes = {
  update: React.PropTypes.func,
  txt: React.PropTypes.string,
  val: React.PropTypes.number
};

const CounterButton = counterComponent(Button);
const CounterLabel = counterComponent(Label);

const Component = (props) => {
  return (
    <div>
      <CounterButton txt="Button" />
      <CounterLabel txt="Label" />
    </div>
  );
};

export default Component;
