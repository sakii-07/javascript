box = document.getElementById("box")

head1 = document.getElementById("head1")
head2 = document.getElementById("head2")
head3 = document.getElementById("head3")

sec = 0
min = 0 
hour = 0
var alarm;

function start(){
    alarm = setInterval(function(){
        head1.innerHTML = hour;
        head2.innerHTML = min;
        head3.innerHTML = sec;
        sec++;
        if(sec > 9){
            sec = 0 
            min++;
        }
        if(min > 9){
            min = 0 
            hour++;
        }
    },500)
}
function stop(){
    clearInterval(alarm)
}
function reset(){
    sec = 0
    min = 0
    hour = 0
    head1.innerHTML = hour; 
    head2.innerHTML = min; 
    head3.innerHTML = sec; 
}   