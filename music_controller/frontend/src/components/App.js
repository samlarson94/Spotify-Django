import React, { Component } from "react";
import { render } from "react-dom";

// NOTE: Refactor to Functional Componenets in future
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>Testing React Code</h1>);
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);