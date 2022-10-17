'use strict';

let samm = 'sam';
console.log(samm)

const countDown = ()=>{

    let now = new Date().getTime();
    // console.log(now);
   let countDate = new Date('Oct 20, 2022 12:00:am')
            let gap = countDate - now;


            
        
            //How the fuck does time work?
            let second = 1000;
            let minute = second * 60;
            let hour = minute * 60;
            let day = hour * 24;
        
            //calculate the shit
            let textDay = Math.floor(gap / day);
            let textHour = Math.floor((gap % day) / hour);
            let textMinute = Math.floor((gap % hour) / minute);
            let textSecond = Math.floor((gap % minute) / second);
            // console.log(gap);
        
            document.querySelector(".day").innerHTML = textDay;
            document.querySelector(".hour").innerHTML = textHour;
            document.querySelector(".minute").innerHTML = textMinute;
            document.querySelector(".second").innerHTML = textSecond;


            // When the Countdown Finished!!!
            if (gap <= 0) {
                let num = 0;
                document.querySelector(".day").innerHTML = num;
            document.querySelector(".hour").innerHTML = num;
            document.querySelector(".minute").innerHTML = num;
            document.querySelector(".second").innerHTML = num;


            }

            

}
setInterval(() => {
    countDown()
}, 1000);





