/* @jsx createElement */

import { createElement, render, Component } from "./react";

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

function Item(props) {
  return <li style={`color: ${props.color}`}>{props.children}</li>;
}

const App = () => (
  <p>
    <Title>리액트 진짜 클래스 컴포넌트 잘 만들기</Title>
    <ul>
      <Item color="blue">첫 번째 아이템</Item>
      <Item color="green">두 번째 아이템</Item>
      <Item color="red">세 번째 아이템</Item>
    </ul>
  </p>
);

render(<App />, document.querySelector("#root"));
