//import './popup.css'
import React from 'react';
import { createRoot } from 'react-dom/client'
let name
chrome.storage.sync.get(["name"], (res) => {
    name = res.name;
    document.body.innerHTML = name
})
const test = (<div>
    <h1>Options</h1>
<h2 className='name'> Name{ name }</h2></div>)

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(test)
