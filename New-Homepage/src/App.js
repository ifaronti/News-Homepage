import React from "react";
import Navbar from './components/Navbar'
import Top from "./components/Topleft";
import Bottom from "./components/Bottom";

export default function App() {
    return(
        <main className="app">
            <Navbar/>
            <Top/>
            <div className="bottom-wrap">
                <Bottom/>
            </div>
        </main>
    )
}