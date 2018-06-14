var myHeading=document.querySelector('h1');
myHeading.innerHTML='Hello world!';

var myImage=document.querySelector('img');
myImage.onclick=function(){
    var mySrc=myImage.getAttribute('src');
    if(mySrc==='images/myicon.jpg'){
        myImage.setAttribute('src','images/zsicon.jpg');
    }else{
        myImage.setAttribute('src','images/myicon.jpg');
    }
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName(){
var myName=prompt('Please enter your name.');
localStorage.setItem('name',myName);
myHeading.innerHTML='My name is '+myName
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName=localStorage.getItem('name');
    myHeading.innerHTML='my name is '+storedName;
}

myButton.onclick=function(){
    setUserName();
}