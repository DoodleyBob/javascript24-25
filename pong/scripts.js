/* 
    Title: JS Pong
    By: Elijah Snyder
    Created: Spring 2025
    From the Book: JavaScript Crash Course
*/

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);