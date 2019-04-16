import _ from "lodash"; //載入 lodash ，用來簡化陣列之類的東西，讓js好用(?)
import "./style.css"; //引入css檔(需要設定css的相關loader後，才能import .css進來)
import "./aa.scss";
import Icon from "./giphy.gif";

function component(){
    let el=document.createElement("div");
    // el.innerText="Hello webpack";
    el.innerText =_.join(['Hello', 'webpack'], ' ');
    el.classList.add("hello");

    //add img
    var myIcon=new Image();
    myIcon.src=Icon;
    el.appendChild(myIcon);

    return el;
}

document.body.appendChild(component());