
function RandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var start = new Date().getTime();
function move(){
    var left;
    var top;
    var wh;
    left = Math.random() * 400; 
    top = Math.random() * 400; 
    wh = ((Math.random() * 400) + 100);
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.width = wh + "px";
    document.getElementById("shape").style.height = wh + "px";
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.backgroundColor = RandomColor();
    start = new Date().getTime();
    console.log("calling")
}

document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var time = end - start;
    alert("Time taken: " + time / 1000 + "s");
    move();
}
