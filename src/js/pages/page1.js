var jquery = require('jquery');
window.$ = jquery;


console.log('otra pagina');
console.log('Página demo');
$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
    //$('body').css({'background-color': 'beige'});

});