var countdowndate=new Date("aug 5, 2019 15:37:25").getTime();

var x=setInterval(()=>{
    
    var now= new Date().getTime();
    var distance = countdowndate-now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML=days
    document.getElementById("hour").innerHTML=hours;
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=seconds;


},1000)