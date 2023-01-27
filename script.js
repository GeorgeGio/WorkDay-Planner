var timeInterval = setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

}, 1000)

let currentHour = moment().hour();
console.log(currentHour);
function someFunction() {
    // const items = [];
    new Array(9).fill().forEach((acc, index) => {
        let hour = index +9;
        let formattedHour = moment({ hour: hour }).format('h:mm A');
        $(".container").append(
            `    
        <div class="row">
        <span class="col-2"> ${formattedHour} </span>
        <textarea class="col-8 ${setTimeOfDay(hour) }"></textarea>
        
        <button> Save </button>
        </div>`)

    })

}
function setTimeOfDay(hour) {
    if (hour > currentHour){
        return "future";
    }
    else if (hour < currentHour){
        return "past"

    }
    return "present"    
}

someFunction();
// $("textarea").attr("class", "future")