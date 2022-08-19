setTimeout(function(){greet()}, 10000);

setTimeout(function(){thanks()}, 20000);
let ddd = new Date();
console.log(ddd.getDay());
function find_day(day) {
    let today;
    switch (day) {
        case 0:
            today = "Sunday";
            break;
        case 1:
            today = "Monday";
            break;
        case 2:
            today = "Tuesday";
        break;
        case 3:
            today = "Wednesday";
        break;
        case 4:
            today = "Thursday";
        break;
        case 5:
            today = "Friday";
        break;
        case 6:
            today = "Saturday";
        break;
        default:
            break;
    }
    return today;
}
function greet() {
    const date = new Date();
    const hours = date.getHours();
    const day = date.getDay();
    let greetTime;
    if (hours >= 5 && hours <= 12) {
        greetTime = "Morning";
    } else if (hours >= 12 && hours < 17) {
        greetTime = "Afternoon";
    } else if (hours >= 17 && hours < 20) {
        greetTime = "Evening";
    } else {
        greetTime = "Night";
    }
    document.getElementById('greet-div').style.display = "block";
    document.getElementById("greet-div").innerHTML =
    `A "Good ${greetTime}" from <b>SANTHANU</b>   <a style="color:black;" onclick="close_greet()"> x </a> <br>
    Happy ${find_day(day)}...
    `;
}
function thanks() {
    document.getElementById('greet-div').style.display = "block";
    document.getElementById('greet-div').innerHTML = `Thanks for visiting my Portfolio :) <a style="color:black;" onclick="close_greet()"> x </a>`;

}
function close_greet() {
    document.getElementById("greet-div").style.display = "none";
}
function copy_phno() {

    navigator.clipboard.writeText(`+`+918870522547);
    alert("phone number copied!")
}
