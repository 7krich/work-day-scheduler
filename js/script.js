let store = window.localStorage;

let currentHour = moment().format("HH");

let container = $(".container");

let now = moment();

// display current day in header
let currentTime = {text: moment().format("h:00 A"), hour: moment().format("HH")};

console.log(currentTime);

$("#day").text(now.format("dddd MMMM DD, YYYY"));

// color code based on past, present, future
$(".time-block").each(function() {
    var timeBlock = $(this).attr("id");
    if (timeBlock) {timeBlock = timeBlock.split("-")[1];
    if (currentTime.hour > timeBlock) {
        $(this).addClass("past")
    } else if (currentTime.hour == timeBlock) {
        $(this).addClass("present");
    } else if (currentTime.hour < timeBlock) {
        $(this).addClass("future");
    }
}
});
 

// save to local storage
$(".saveBtn").click(function(event) {
    event.preventDefault();
    var task = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, task);
});


//retrieve from local storage
var loadTasks = function() {
    task = JSON.stringify(localStorage.getItem("tasks"));

};

//display retrieved text on text area
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("13"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
$("#hour-18 .time-block").val(localStorage.getItem("18"));
$("#hour-19 .time-block").val(localStorage.getItem("19"));
$("#hour-20 .time-block").val(localStorage.getItem("20"));
