import React, { useEffect, useState } from "react";
import './popup.css'
import { createRoot } from "react-dom/client";
const jacob = require('../assets/joke.png') 




const handleSubmit = (e)=>{
    const name = e.target[0].value
    chrome.storage.sync.set({name}, ()=>{
        console.log(`Name set to ${name}`)
    })
}
function Popup(){

    useEffect(() => {
        chrome.storage.sync.get(["name"], (result) => {
            console.log(result.name)
        })
    })
    
    return (
    <div>
        {/* <img id="jokeImg" src= {jacob} width={100} height={100}/> */}
        <form onSubmit={handleSubmit}>
            <input id="name" autoComplete="new-name" placeholder="Provide your name"/>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}
const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Popup />)


export default Popup;

