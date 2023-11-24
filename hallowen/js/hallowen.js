/*******************************************
* Author: Jorge Bech Castillo
* File: JavaScript (Halloween)
********************************************/

/*Show an element*/
function show(element){
    document.getElementById(element).style.visibility="visible"; 
}
/*Hide an element*/
function hide(element){
    document.getElementById(element).style.visibility="hidden";
}
/*Start the audio*/
function play(element){
    document.getElementById(element).play();
}
/*Pause the audio*/
function pause(element){
    document.getElementById(element).pause();
}
