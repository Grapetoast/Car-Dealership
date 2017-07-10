$(document).ready(function() {
  $(".taxbutton").click(function(){
    alert("The vehicle's tax would be:$" + this.value * 0.08)
  });
});
