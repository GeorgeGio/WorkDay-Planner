var timeInterval = setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

}, 1000)


function someFunction () {
    // const items = [];
    new Array(9).fill().forEach((acc, index) => {
      let hour = moment( {hour: index + 9} ).format('h:mm A');
      $(".container").append(
        `    
        <div class="row">
        <span class="col-2"> ${hour} </span>
        <textarea class="col-8"></textarea>
        
        <button> Save </button>
        </div>`)
    
    })
  
  }

someFunction();
// $("textarea").attr("class", "future")