        

function toggle(){
    var newsletter = document.querySelector('.newsletter')
    newsletter.classList.toggle('active')
}
    alert("do you want to know when you die?");
    alert("if you visit this website, your life is in danger. this website will be the solution for your life")   
    let name = window.prompt("What is your name?");
    let age = window.prompt ("how old are you?");
    document.getElementById("header").innerHTML = `Welcome ${name}`;

    var countDate =new Date(`jan ${age}, 2021, 00:00:00`).getTime();
    // if (countDate < age) {
    //     age = age - 30;
    //     var countDate =new Date(`jan ${age}, 2021, 00:00:00`).getTime();
    // }
    if (age > 30) {
        var countDate =new Date(`feb ${age - 30}, 2021, 09:09:00`).getTime();
    }

    function newYear(){
        var now = new Date().getTime();
        gap = countDate - now;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / second);

        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;
        document.getElementById('minutes').innerText = m;
        document.getElementById('second').innerText = s;
}
setInterval(function(){
    newYear();
},1000)