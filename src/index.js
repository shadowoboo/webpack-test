import _ from "lodash"; //載入 lodash ，用來簡化陣列之類的東西，讓js好用(?)
// import "./style.css"; //引入css檔(需要設定css的相關loader後，才能import .css進來)
// import "./aa.scss";
// import Icon from "./giphy.gif";
// import Png from "./cookie.png";
// import Data from "./data.xml";
import printMe from "./print";

function component(){
    let el=document.createElement("div");
    var btn=document.createElement("button");
    // el.innerText="Hello webpack";
    el.innerText =_.join(['Hello', 'webpack'], ' ');
    // el.classList.add("hello");

    btn.innerHTML="Click then check console";
    btn.onclick=printMe;
    el.appendChild(btn);


    // //add img
    // var myIcon=new Image();
    // myIcon.src=Icon;
    // myIcon.classList.add("myIcon");
    // el.appendChild(myIcon);

    // //add png
    // var myPng = new Image();
    // myPng.src = Png;
    // myPng.classList.add("myPng");
    // el.appendChild(myPng);

    // //xml test
    // console.log(Data);


    
    return el;
}

// document.body.appendChild(component());

//在 HMR 並即時更新頁面時，需要能隨時 重新渲染。
//把元件令出來，方便在 module.hot 時，使用重繪
let elem = component();
document.body.appendChild(elem);


if(module.hot){
    module.hot.accept("./print.js",function(){
        console.log(`Accepting the updated printMe module!!!`);
        // printMe();
        document.body.removeChild(elem); //先移除該元件
        elem=component();//重新渲染，把 component() 再次令給 elem
        document.body.appendChild(elem); //塞回去        
    })
}