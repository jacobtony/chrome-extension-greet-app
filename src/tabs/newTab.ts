
import axios from 'axios';

const config = {
    headers:{
        Accept: 'application/json'
    }
}
// axios.get("https://icanhazdadjoke.com", config).then((res) => {
//     const header = document.createElement('h1');
//     document.body.appendChild(header);
//     header.innerHTML = res.data.joke
// });

let name
chrome.storage.sync.get(["name"], (res) => {
    name = res.name;
    const header = document.createElement('h1');
    document.body.appendChild(header);
    header.innerHTML =  "Hi " + name + ", Search Something "
})

