var countDate = new Date('May 31, 2022 00:00:00').getTime();

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



// on click ToggleClass
document.querySelector('.wrapper').addEventListener(
  'click', (e) => {
    e.currentTarget.classList.toggle('is-active');
  }
);

// popup modal
function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}