import _ from "lodash";

function component(){
    let el=document.createElement("div");
    // el.innerText="Hello webpack";
    el.innerText =_.join(['Hello', 'webpack'], ' ');
    return el;
}

document.body.appendChild(component());