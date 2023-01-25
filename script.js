var timeInterval = setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

}, 1000)




for (let i = 0; i <=8; i++) {

    $(".container").append(
        `    
        <div class="row">
        ${i+9}
        <textarea class="col-8"></textarea>
        
        <button> Save </button>
        </div>`)
    
     

}

$("textarea").attr("class", "future")