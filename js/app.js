function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
console.log(document.getElementsByTagName('p'));
}

function changeBackground() {
document.getElementById('block1').style.backgroundColor="blue";
}

function increaseFont() {
    document.getElementById('block2').style.fontSize="xx-large";
}

function changeFontColor() {
document.getElementById('block3').style.color="green";

}

function revertColor() {
    document.getElementById('block3').style.color="black";
}

function hide() {
    document.getElementById('block4').style.visibility="hidden";
}

function changeBackColorForAllBox(a,b) {
    var c=document.getElementsByClassName(b);
    for(i=0;i<c.length;i++)
    {
    c[i].style.backgroundColor=a;
    }

}
function changeBackColor(x,y){
    var c=document.getElementsByClassName(y);
    for(i=0;i<c.length;i++){
        c[i].style.backgroundColor="blue";
    }
}

function isNumber(evt) {
    var KeyCode = (evt.which) ? evt.which : evt.keyCode
    if ( KeyCode < 48 || KeyCode > 57)
        return false;

    return true;
}    
function addAdjacent() {
var node = document.createElement("p");             
var textnode = document.createTextNode("I got generated on the fly...");         
node.appendChild(textnode);                              
document.getElementById("para2").appendChild(node);  
}

function removePara() {
var a=document.getElementById("para4");
a.parentNode.removeChild(a);
}

function animatePara() {
    myMove();
}
function myMove(){
var elem = document.getElementById("box5"); 
elem.style.position="relative";
elem.style.animationName="ex";
elem.style.animationDuration="3s";
}




function upper() {
    document.getElementById("inputBox2").value=document.getElementById("inputBox1").value.toUpperCase();
}

function camelcase(){
    var a=document.getElementById("inputBox3").value;
    var b=a.split(" ");
    a=b[0];
    for(var i=1;i<b.length;i++){
        b[i]=b[i].charAt(0).toUpperCase()+b[i].substr(1);
        a+=b[i];
    }
    document.getElementById("inputBox3").value=a;
}

function browser(){
    console.log(document.getElementById("browsers").value);
}

function func() {
    document.getElementById("input").style.backgroundColor = "yellow";
}