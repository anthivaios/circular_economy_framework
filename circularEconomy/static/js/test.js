var stage =0;
$(document).ready(function() {
		$('.datepicker').datepicker({
			format: "yyyy",
			viewMode: "years",
			minViewMode: "years"
		})

});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

 }
 $(window).on('load', function() {
 var x = document.title;
 $('.navbar-nav li').removeClass('active').addClass('inactive');
 if(x == "Home page")
    $('.navbar-nav li:nth-child(1)').addClass('active');
  else if (x == "Form page")
    $('.navbar-nav li:nth-child(2)').addClass('active');
  else if (x == "Indicators")
    $('.navbar-nav li:nth-child(3)').addClass('active');

});