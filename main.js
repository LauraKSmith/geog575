

function passAjax(){
  console.log("test text")

  $.ajax("/data/miss.geojson", {
    dataType: "json",
    success: debugCallback
  });

};

function debugCallback(response){

    var mydata = response;
    $('#mydiv').append('GeoJSON data: ' + JSON.stringify(mydata));

};

$(document).ready(passAjax);
