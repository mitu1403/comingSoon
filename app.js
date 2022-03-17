var countDate = new Date('March 31, 2022 00:00:00').getTime();

function launch(){
  var now = new Date().getTime();
  var gap = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute *60;
  var day = hour * 24;

  var d = Math.floor(gap / (day));
  var h = Math.floor((gap % (day)) / (hour));
  var m = Math.floor((gap % (hour)) / (minute));
  var s = Math.floor((gap % (minute)) / second);

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;  
}

setInterval(function(){
  launch();
},1000)


//DISABLE RIGHT-CLICK
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
}, false);

//DISABLE THE “VIEW SOURCE” SHORTCUT KEY
document.addEventListener("keydown", (e) => {
  // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
  // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
  // THIS WILL ONLY DISABLE CONTROL AND F12
  if (e.ctrlKey || e.keyCode==123) {
    e.stopPropagation();
    e.preventDefault();
  }
});