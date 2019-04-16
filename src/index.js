import _ from "lodash"; //載入 lodash ，用來簡化陣列之類的東西，讓js好用(?)
import "./style.css"; //設定css的相關loader後，引入css檔

function component(){
    let el=document.createElement("div");
    // el.innerText="Hello webpack";
    el.innerText =_.join(['Hello', 'webpack'], ' ');
    el.classList.add("hello");
    return el;
}

document.body.appendChild(component());