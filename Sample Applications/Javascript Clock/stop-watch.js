var keepGoing = false;
var sec = 0; 
var min = 0; 
var hour = 0; 
var ms=0;

var padded_hour;
var padded_minutes;
var padded_seconds;
var padded_milliseconds;

var timer;


function addZeroPadding(seconds,minutes,hours,millisec){
    padded_hour=hours<10?"0"+hours:hours;
    padded_minutes=minutes<10?"0"+minutes:minutes;
    padded_seconds=seconds<10?"0"+seconds:seconds;
    var temp=millisec*4;
    switch(true){
        case temp<10: 
            padded_milliseconds="00"+temp;
            break;
        case temp>=10 && temp<100:
            padded_milliseconds="0"+temp;
            break;
        default:
            padded_milliseconds=temp;
    }
    
    
}


function startTimer() {
    document.getElementById("start-button").disabled = true;
    keepGoing = true;

    function clock() {
        if (keepGoing) {
            timer = setTimeout(clock, 4);
        }
        ms++;
        if(ms==250){
        ms=0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hour++;
                if (hour == 24) {
                    hour = 0;
                }
            }
        }
    }

        // console.log( hour + ": " + min + " : " + sec );
        addZeroPadding(sec,min,hour,ms);
        document.getElementById('counter').innerHTML = padded_hour + ": " + padded_minutes + " : " + padded_seconds + " : " +padded_milliseconds;

    }

    clock();
}

function stopTimer() {
    document.getElementById("start-button").value = "Resume";
    document.getElementById("start-button").disabled = false;
    clearTimeout(timer);
    keepGoing = false;
}

function reset() {
    sec = 0;
    min = 0;
    hour = 0;
    ms=0;
    stopTimer();
    document.getElementById("start-button").value = "Start";
    addZeroPadding(sec,min,hour,ms);
    document.getElementById('counter').innerHTML = padded_hour + ": " + padded_minutes + " : " + padded_seconds + " : 000";
}