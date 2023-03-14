function yesClick(){
    alert("Yes, You are right. I love you too");
}
function noTouch(){
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById("cntno").style.left = x + 'px';
    document.getElementById("cntno").style.top = y + 'px';
}