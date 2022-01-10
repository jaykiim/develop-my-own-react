/* @jsx createElement */

import { createElement, render } from "./react";

function Title(props) {
  console.log("타이틀");
  return <h1>{props.children}</h1>;
}

function Item(props) {
  return <li style={`color: ${props.color}`}>{props.children}</li>;
}

const vdom = (
  <p>
    <Title>리액트 진짜 잘 만들기</Title>
    <ul>
      <Item color="blue">첫 번째 아이템</Item>
      <Item color="green">두 번째 아이템</Item>
      <Item color="red">세 번째 아이템</Item>
    </ul>
  </p>
);

render(vdom, document.querySelector("#root"));
