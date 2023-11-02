import React from "react";
import NavBar from "./component/NavBar";
import Main from "./component/Main";
import "./index.css";

export default function App() {
    return (
        <div className="container">
            <NavBar />
            <Main />
        </div>
    )
}
