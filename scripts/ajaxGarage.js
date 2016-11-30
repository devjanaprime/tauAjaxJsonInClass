// empty garage
var garage = [];

$( document ).ready( function(){
  $( '#addCar' ).on( 'click', function(){
    // get user input and place in an object
    var newCar = {
      year: $( '#year' ).val(),
      make: $( '#make' ).val(),
      model: $( '#model' ).val(),
      description: $( '#description' ).val(),
      picURL: $( '#picURL' ).val()
    }; // end newCar
    console.log( 'adding:', newCar );
    // push car into garage array
    garage.push( newCar) ;
    // display garage
    console.log( 'garage:', garage );
    // loop through cars and update outputText
    var outputText = '';
    for (var i = 0; i < garage.length; i++) {
      outputText += '<p><strong>' + garage[i].year + ' ' + garage[i].make + ' ' + garage[i].model + '</strong></p>';
      outputText += '<p>' + garage[i].description + '</p>';
      outputText += '<img src="' + garage[i].picURL + '" />';
    }
    // set outputDiv's text to outputText
    $( '#outputDiv' ).html( outputText );
  }); // end on click for addCar

  var getCarsFromWebJsonPlaceSomewhereOutThereIsTheTruth = function(){
    console.log( 'in getCarsFromWebJsonPlaceSomewhereOutThereIsTheTruth' );
    // make an ajax call to a url
    $.ajax({
      url: 'http://devjana.net/support/cars.json',
      dataType: 'JSON',
      success: function( data ){
        console.log( 'success, received:', data );
        console.log( 'data.cars:', data.cars );
      }
    });
    // receive some data
    // display data
  }; // end getCarsFromWebJsonPlaceSomewhereOutThereIsTheTruth

  getCarsFromWebJsonPlaceSomewhereOutThereIsTheTruth();
}); // end doc ready
