import page1 from "../page/page1.html";
document.body.insertAdjacentHTML('beforeend', page1);

require.ensure([], function (require) {
    require('./a2.js');
});