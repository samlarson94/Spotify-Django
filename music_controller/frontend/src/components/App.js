import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage';
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

// NOTE: Refactor to Functional Componenets in future
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
         <HomePage />
        </div>
        )
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);