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
 function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateRandomNumber(mi, ma) {
    var min = mi;
    var max = ma;
    highlightedNumber = (Math.random() * (max - min) + min).toFixed(2);
    return parseFloat(highlightedNumber);
};

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
$(document).on('keypress', function(e){
    if(e.which === 96){

        var elms = document.getElementsByClassName('rec')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 100.00));

        var elms = document.getElementsByClassName('disassembly')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 50.00));

        var elms = document.getElementsByClassName('energy')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 6.00));

        var elms = document.getElementsByClassName('co2')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 4.00));

        var elms = document.getElementsByClassName('loss')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 10.00));

        var elms = document.getElementsByClassName('water')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 200.00));


        var elms = document.getElementsByClassName('parts')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", getRandomInt(501));

        var elms = document.getElementsByClassName('check')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 100.00));

        var elms = document.getElementsByClassName('remanufactured')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 100.00));


            var elms = document.getElementsByClassName('reused')
            var elms1 = document.getElementsByClassName('recycling')
            for (var i = 0; i < elms.length; i++){
                do{
                    var num1 = generateRandomNumber(0.00, 100.00);
                    var num2 = generateRandomNumber(0.00, 100.00);
                    console.log(typeof(num1));
                    console.log(typeof(num2));
                }
                while((num1 + num2) > 100.00 )

                elms[i].setAttribute("value", num1);
                elms1[i].setAttribute("value", num2);
            }



        var elms = document.getElementsByClassName('eol')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 100.00));

        var elms = document.getElementsByClassName('sec')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 100.00));

        var elms = document.getElementsByClassName('feed')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 100.00));


        var elms = document.getElementsByClassName('jobs')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", getRandomInt(5001));

        var elms = document.getElementsByClassName('project')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", getRandomInt(51));

        var elms = document.getElementsByClassName('capital')
        for (var i = 0; i < elms.length; i++)
           elms[i].setAttribute("value", generateRandomNumber(0.00, 100.00));



        var year = 2002
        $(':input[type="text"]').each(function(e){
            $(this).val(year++)
        });
    }
});