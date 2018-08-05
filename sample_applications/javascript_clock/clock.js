var date = new Date;
var sec = date.getSeconds();
var min = date.getMinutes();
var hour = date.getHours();


var keepGoing=true; 

function clock() {

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

    console.log( hour + ": " + min + " : " + sec );

    timer = setTimeout(clock, 1000);
    
}

clock();

