var jquery = require('jquery');
window.$ = jquery;


console.log('otra pagina');
$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
    //$('body').css({'background-color': 'beige'});

});