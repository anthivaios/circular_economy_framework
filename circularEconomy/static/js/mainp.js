var stage =0;
$(document).ready(function() {

		$('.datepicker').datepicker({
			format: "yyyy",
			viewMode: "years", 
			minViewMode: "years"
		})


		var x = document.title;
		if(x == "Form page"){
        var elements = document.getElementsByClassName("k");
        for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute("placeholder", first(elements[i].getAttribute("placeholder")));
            elements[i].setAttribute("placeholder", second(elements[i].getAttribute("placeholder")));
            elements[i].setAttribute("placeholder", third(elements[i].getAttribute("placeholder")));
        }




		var x = document.getElementById('mainWindow').clientWidth;

		x = x * 0.04;
		y= x * 0.5;
		x = x + "px";
		y = y + "px";

		var all = document.getElementsByClassName('pCyrcle');
        for (var i = 0; i < all.length; i++) {
            all[i].style.height = x;
        }
        all[0].style.border = '4px solid green';
        all = document.getElementsByClassName('t2');
        all[0].style.color = "green";
        for (var i = 0; i < all.length; i++) {
            all[i].style.width = x;
        }
        all = document.getElementsByClassName('line');
        for (i = 0; i < all.length; i++) {
            all[i].style.marginTop = y;
        }
        $("#prevBtn").hide();
        var rowHeight = document.getElementById("bar2");
        var insideFormHeight = document.getElementById("regForm");
        var allHeight = (1.6 * rowHeight.offsetHeight) + insideFormHeight.offsetHeight;
        allHeight+= "px";

        var divHeight = document.getElementById("mainWindow");
        divHeight.style.height = allHeight;
        var $but = $('#next');
        var mR = parseFloat($but.css('margin-right'));
        mR = (0.2 * mR) + "px";
        insideFormHeight = document.getElementById("nextBtn");
        insideFormHeight.style.marginTop = mR;
        insideFormHeight = document.getElementById("prevBtn");
        insideFormHeight.style.marginTop = mR;
}
});

function superScript(ele){
    console.log(ele);
    var chars = '+−=()0123456789AaÆᴂɐɑɒBbcɕDdðEeƎəɛɜɜfGgɡɣhHɦIiɪɨᵻɩjJʝɟKklLʟᶅɭMmɱNnɴɲɳŋOoɔᴖᴗɵȢPpɸrRɹɻʁsʂʃTtƫUuᴜᴝʉɥɯɰʊvVʋʌwWxyzʐʑʒꝯᴥβγδθφχнნʕⵡ',
        sup   = '⁺⁻⁼⁽⁾⁰¹²³⁴⁵⁶⁷⁸⁹ᴬᵃᴭᵆᵄᵅᶛᴮᵇᶜᶝᴰᵈᶞᴱᵉᴲᵊᵋᶟᵌᶠᴳᵍᶢˠʰᴴʱᴵⁱᶦᶤᶧᶥʲᴶᶨᶡᴷᵏˡᴸᶫᶪᶩᴹᵐᶬᴺⁿᶰᶮᶯᵑᴼᵒᵓᵔᵕᶱᴽᴾᵖᶲʳᴿʴʵʶˢᶳᶴᵀᵗᶵᵁᵘᶸᵙᶶᶣᵚᶭᶷᵛⱽᶹᶺʷᵂˣʸᶻᶼᶽᶾꝰᵜᵝᵞᵟᶿᵠᵡᵸჼˤⵯ';
            ele.replace(/<sup[^>]*>(.*?)<\/sup>/g, function(x) {
            var str = '',
                txt = $.trim($(x).unwrap().text());

            for (var i=0; i<txt.length; i++) {
                var n = chars.indexOf(txt[i]);
                str += (n!=-1 ? sup[n] : txt[i]);
            }
            return str;
    })
    console.log(ele);
    return ele;
}
function first(ele){
    var chars = '+−=()0123456789AaÆᴂɐɑɒBbcɕDdðEeƎəɛɜɜfGgɡɣhHɦIiɪɨᵻɩjJʝɟKklLʟᶅɭMmɱNnɴɲɳŋOoɔᴖᴗɵȢPpɸrRɹɻʁsʂʃTtƫUuᴜᴝʉɥɯɰʊvVʋʌwWxyzʐʑʒꝯᴥβγδθφχнნʕⵡ',
        sup   = '⁺⁻⁼⁽⁾⁰¹²³⁴⁵⁶⁷⁸⁹ᴬᵃᴭᵆᵄᵅᶛᴮᵇᶜᶝᴰᵈᶞᴱᵉᴲᵊᵋᶟᵌᶠᴳᵍᶢˠʰᴴʱᴵⁱᶦᶤᶧᶥʲᴶᶨᶡᴷᵏˡᴸᶫᶪᶩᴹᵐᶬᴺⁿᶰᶮᶯᵑᴼᵒᵓᵔᵕᶱᴽᴾᵖᶲʳᴿʴʵʶˢᶳᶴᵀᵗᶵᵁᵘᶸᵙᶶᶣᵚᶭᶷᵛⱽᶹᶺʷᵂˣʸᶻᶼᶽᶾꝰᵜᵝᵞᵟᶿᵠᵡᵸჼˤⵯ';
    var new1 = sup[85] + sup[89];
    ele = ele.replace("st", new1);
    return ele;
}

function second(ele){
    var chars = '+−=()0123456789AaÆᴂɐɑɒBbcɕDdðEeƎəɛɜɜfGgɡɣhHɦIiɪɨᵻɩjJʝɟKklLʟᶅɭMmɱNnɴɲɳŋOoɔᴖᴗɵȢPpɸrRɹɻʁsʂʃTtƫUuᴜᴝʉɥɯɰʊvVʋʌwWxyzʐʑʒꝯᴥβγδθφχнნʕⵡ',
        sup   = '⁺⁻⁼⁽⁾⁰¹²³⁴⁵⁶⁷⁸⁹ᴬᵃᴭᵆᵄᵅᶛᴮᵇᶜᶝᴰᵈᶞᴱᵉᴲᵊᵋᶟᵌᶠᴳᵍᶢˠʰᴴʱᴵⁱᶦᶤᶧᶥʲᴶᶨᶡᴷᵏˡᴸᶫᶪᶩᴹᵐᶬᴺⁿᶰᶮᶯᵑᴼᵒᵓᵔᵕᶱᴽᴾᵖᶲʳᴿʴʵʶˢᶳᶴᵀᵗᶵᵁᵘᶸᵙᶶᶣᵚᶭᶷᵛⱽᶹᶺʷᵂˣʸᶻᶼᶽᶾꝰᵜᵝᵞᵟᶿᵠᵡᵸჼˤⵯ';
    var new1 = sup[65] + sup[27];
    ele = ele.replace("nd", new1);
    return ele;
}

function third(ele){
    var chars = '+−=()0123456789AaÆᴂɐɑɒBbcɕDdðEeƎəɛɜɜfGgɡɣhHɦIiɪɨᵻɩjJʝɟKklLʟᶅɭMmɱNnɴɲɳŋOoɔᴖᴗɵȢPpɸrRɹɻʁsʂʃTtƫUuᴜᴝʉɥɯɰʊvVʋʌwWxyzʐʑʒꝯᴥβγδθφχнნʕⵡ',
        sup   = '⁺⁻⁼⁽⁾⁰¹²³⁴⁵⁶⁷⁸⁹ᴬᵃᴭᵆᵄᵅᶛᴮᵇᶜᶝᴰᵈᶞᴱᵉᴲᵊᵋᶟᵌᶠᴳᵍᶢˠʰᴴʱᴵⁱᶦᶤᶧᶥʲᴶᶨᶡᴷᵏˡᴸᶫᶪᶩᴹᵐᶬᴺⁿᶰᶮᶯᵑᴼᵒᵓᵔᵕᶱᴽᴾᵖᶲʳᴿʴʵʶˢᶳᶴᵀᵗᶵᵁᵘᶸᵙᶶᶣᵚᶭᶷᵛⱽᶹᶺʷᵂˣʸᶻᶼᶽᶾꝰᵜᵝᵞᵟᶿᵠᵡᵸჼˤⵯ';
    var new1 = sup[80] + sup[27];
    ele = ele.replace("rd", new1);
    return ele;
}

$.fn.superScript = function() {

    var chars = '+−=()0123456789AaÆᴂɐɑɒBbcɕDdðEeƎəɛɜɜfGgɡɣhHɦIiɪɨᵻɩjJʝɟKklLʟᶅɭMmɱNnɴɲɳŋOoɔᴖᴗɵȢPpɸrRɹɻʁsʂʃTtƫUuᴜᴝʉɥɯɰʊvVʋʌwWxyzʐʑʒꝯᴥβγδθφχнნʕⵡ',
        sup   = '⁺⁻⁼⁽⁾⁰¹²³⁴⁵⁶⁷⁸⁹ᴬᵃᴭᵆᵄᵅᶛᴮᵇᶜᶝᴰᵈᶞᴱᵉᴲᵊᵋᶟᵌᶠᴳᵍᶢˠʰᴴʱᴵⁱᶦᶤᶧᶥʲᴶᶨᶡᴷᵏˡᴸᶫᶪᶩᴹᵐᶬᴺⁿᶰᶮᶯᵑᴼᵒᵓᵔᵕᶱᴽᴾᵖᶲʳᴿʴʵʶˢᶳᶴᵀᵗᶵᵁᵘᶸᵙᶶᶣᵚᶭᶷᵛⱽᶹᶺʷᵂˣʸᶻᶼᶽᶾꝰᵜᵝᵞᵟᶿᵠᵡᵸჼˤⵯ';

    return this.each(function() {

        this.placeholder = this.placeholder.replace(/<sup[^>]*>(.*?)<\/sup>/g, function(x) {
            var str = '',
                txt = $.trim($(x).unwrap().text());

            for (var i=0; i<txt.length; i++) {
                var n = chars.indexOf(txt[i]);
                str += (n!=-1 ? sup[n] : txt[i]);
            }
            return str;
        });
        console.log(this.placeholder);
    });
}



window.onresize = function(event) {
        var x = document.title;
		if(x == "Form page"){
    var x = document.getElementById('mainWindow').clientWidth;

		x = x * 0.04;
		y= x * 0.5;
		x = x + "px";
		y = y + "px";

		var all = document.getElementsByClassName('pCyrcle');
        for (var i = 0; i < all.length; i++) {
            all[i].style.height = x;
        }


        for (var i = 0; i < all.length; i++) {
            all[i].style.width = x;
        }
        all = document.getElementsByClassName('line');
        for (i = 0; i < all.length; i++) {
            all[i].style.marginTop = y;
        }
    }

};

function nextCategory(){
  if(stage != 5){
    var all = document.getElementsByClassName('pCyrcle');
    all[stage].style.borderColor = "green";
    all[stage +1].style.border = "4px solid green";
    all = document.getElementsByClassName('line');
    all[stage].style.borderColor = "green";
    all = document.getElementsByClassName('t2');
    all[stage +1].style.color = "green";
    stage++;
  }
}

function prevCategory(){
  if(stage != 0){
    var all = document.getElementsByClassName('pCyrcle');
    all[stage].style.borderColor= "grey";
    stage--;
    all = document.getElementsByClassName('line');
    all[stage].style.borderColor= "grey";
  }
}

        var x = document.title;
		if(x == "Form page"){
        var currentTab = 2;
		showTab(currentTab);

        var maxFormHeight = document.getElementById("regForm");
        var maxHeight = 1.1 * maxFormHeight.offsetHeight;
        maxHeight+= 'px';
        maxFormHeight.style.height = maxHeight;
        var x = document.getElementsByClassName("tab");
        x[currentTab].style.display = 'none';
        }
        currentTab = 0; // Current tab is set to be the first tab (0)
        showTab(currentTab); // Display the current tab

function showTab(n, l) {
  // This function will display the specified tab of the form ...
   var x = document.title;
		if(x == "Form page"){
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("post").innerHTML = " <input type='submit' class='btn btn-secondary btn-lg btn-block' value='submit'/>";
  } else {
    document.getElementById("post").innerHTML = "<button type='button' class='btn btn-primary btn-lg float-right ml-auto' id='nextBtn' onclick='nextPrev(1)'>Next</button>";
  }
  // ... and run a function that displays the correct step indicator:
  if(l == 1){
    if( n!=1 && n!=2 && n!=5 && n!=7 && n!=8 )
        fixStepIndicator(n, 1);
   }else{
    if(n!=7 && n!=6 && n!=4 && n != 1 && n!=0)
        fixStepIndicator(n, 0);
   }
   }
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:

  if (n == 1 && !validateForm()) return false;
  if(n == 1 && currentTab == 0){
    document.getElementById("dots").innerHTML = "<span class='step''></span>";
    newStepIndicator(1);
    nextCategory();
    document.getElementById("catName").innerHTML = "Years of Data:";
  }else if(n == -1 && currentTab == 1){
    document.getElementById("dots").innerHTML = "<span class='step''></span>";
    newStepIndicator(0);
    prevCategory();
    document.getElementById("catName").innerHTML = "Industry Information:";
  }
  if(n == 1 && currentTab == 1){
    document.getElementById("dots").innerHTML = "<span class='step''></span><span class='step''></span><span class='step''></span>";
    newStepIndicator(1);
    nextCategory();
    document.getElementById("catName").innerHTML = "Production and Consumption:";
  }else if(n == -1 && currentTab == 2){
    document.getElementById("dots").innerHTML = "<span class='step''></span>";
    newStepIndicator(0);
    prevCategory();
    document.getElementById("catName").innerHTML = "Years of Data:";
  }
  if(n == 1 && currentTab == 4){

    document.getElementById("dots").innerHTML = "<span class='step''></span><span class='step''></span>";
    newStepIndicator(1);
    nextCategory();
    document.getElementById("catName").innerHTML = "Waste Management:";
  }else if (n == -1 && currentTab == 5){
    document.getElementById("dots").innerHTML = "<span class='step''></span><span class='step''></span><span class='step''></span>";
    newStepIndicator(0);
    prevCategory();
    document.getElementById("catName").innerHTML = "Production and Consumption:";
  }
  if(n == 1 && currentTab == 6){
    document.getElementById("dots").innerHTML = "<span class='step''></span>";
    newStepIndicator(1);
    nextCategory()
    document.getElementById("catName").innerHTML = "Secondary Materials:";
  }else if (n == -1 && currentTab == 7){
    document.getElementById("dots").innerHTML = "<span class='step''></span><span class='step''></span>";
    newStepIndicator(0);
    prevCategory();
    document.getElementById("catName").innerHTML = "Waste Management:";
  }
  if(n == 1 && currentTab == 7){
    document.getElementById("dots").innerHTML = "<span class='step''></span>";
    newStepIndicator(1);
    nextCategory();
    document.getElementById("catName").innerHTML = "Competitiveness and Innovation:";
  }else if (n == -1 && currentTab == 8){
    document.getElementById("dots").innerHTML = "<span class='step''></span>";
    newStepIndicator(0);
    prevCategory();
    document.getElementById("catName").innerHTML = "Secondary Materials:";
  }

  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;

  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("mainWindow").submit();
    return false;
  }


  // Otherwise, display the correct tab:
  if(n ==1)
    showTab(currentTab, 1);
  else
    showTab(currentTab, 0);
}

function ValidateEmail(inputText)
{
var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(inputText.value.match(mailformat))
{

return true;
}
else
{

return false;
}
}
function isRight(mini, maxi, off){
        var x,y,y2, valid, cou =0, rec = 0;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        valid = true;
        if(off == 0 && currentTab == 6) rec =1;
        if( parseFloat(y[off].value) < mini || parseFloat(y[off].value) > maxi || y[off].value == "" ){

            y[off++].style.background = "#ffdddd";
            valid =false;
        }else{

            y[off++].style.background = "white";
            cou++;
            }
        if( parseFloat(y[off].value) < mini || parseFloat(y[off].value) > maxi || y[off].value == "" ){
            y[off++].style.background = "#ffdddd";
            valid =false;
        }else{
            y[off++].style.background = "white";
            cou++;
            }
        if( parseFloat(y[off].value) < mini || parseFloat(y[off].value) > maxi || y[off].value == "" ){
            y[off++].style.background = "#ffdddd";
            valid =false;
        }
        else{
            y[off++].style.background = "white";
            cou++;
            }
         if(rec == 1){

                y2 = x[currentTab -1].getElementsByTagName("input");
                if(parseFloat(y2[0].value) + parseFloat(y[0].value) > 100){
                    y[0].style.background = "#ffdddd";
                valid =false;
                cou--;
                }
                if(parseFloat(y2[1].value) + parseFloat(y[1].value) > 100){
                    y[1].style.background = "#ffdddd";
                valid =false;
                cou--;
                }
                if(parseFloat(y2[2].value) + parseFloat(y[2].value) > 100){
                    y[2].style.background = "#ffdddd";
                valid =false;
                cou--;
                }
                if(!valid)
                    alert("Reused + Recycled must not exceed 100%!")
            }
         if(cou == 3)
         valid =true;
        return valid;
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  if(currentTab == 0){
    if(y[0].value == ""){
     y[0].className+= "invalid";
     valid = false;
     }
     if(y[1].value == "" || ValidateEmail(y[1]) != true ){
     y[1].className+= "invalid";
     valid = false;
     }
     if(y[2].value == ""){
        y[2].className+= "invalid";
        valid = false;
     }
   }
   if(currentTab == 1){
   var date = /^(19[5-9]\d|20[0-4]\d|2050)$/;
    if(y[0].value == "" || !y[0].value.match(date)){
        y[0].style.background = "#ffdddd";
        valid =false;
    }
    if(y[1].value == "" || !y[1].value.match(date)){
        y[1].style.background = "#ffdddd";
        valid =false;
    }
    if(y[2].value == "" || !y[2].value.match(date)){
        y[2].style.background = "#ffdddd";
        valid =false;
    }

    if(parseInt(y[0].value) >= parseInt(y[1].value) || parseInt(y[1].value) >= parseInt(y[2].value) || parseInt(y[0].value) > 2020 || parseInt(y[1].value) > 2020 || parseInt(y[2].value) > 2020){

     y[0].style.background = "#ffdddd";
     y[1].style.background = "#ffdddd";
     y[2].style.background = "#ffdddd";
     valid = false;
     }
     if(!valid){
        alert("Years must be in chronological order and until current year.")
     }
   }

   if(currentTab == 2){
        if(!isRight(0 , 100 , 0))
            valid =false;
        if(!isRight(0 , 50 , 3))
            valid = false;
        if(!isRight(0 , 6 , 6))
            valid = false;
   }
   if(currentTab == 3){
        if(!isRight(0 , 4 , 0))
            valid =false;
        if(!isRight(0 , 10 , 3))
            valid = false;
        if(!isRight(0 , 200 , 6))
            valid = false;
   }
   if(currentTab == 4){
        if(!isRight(0 , 500 , 0))
            valid =false;
        if(!isRight(0 , 100 , 3))
            valid = false;
   }
   if(currentTab == 5){
        if(!isRight(0 , 100 , 0))
            valid =false;
        if(!isRight(0 , 100 , 3))
            valid = false;
   }
   if(currentTab == 6){
        if(!isRight(0 , 100 , 0))
            valid =false;
        if(!isRight(0 , 100 , 3))
            valid = false;
   }
   if(currentTab == 7){
        if(!isRight(0 , 100 , 0))
            valid =false;
        if(!isRight(0 , 100 , 3))
            valid = false;
   }
   if(currentTab == 8){
        if(!isRight(0 , 5000 , 0))
            valid =false;
        if(!isRight(0 , 100 , 3))
            valid = false;
        if(!isRight(0 , 100 , 6))
            valid = false;
   }

      if(valid){
        for(i = 0; i< y.length; i++)
              y[i].style.background = "white";
       }
   return valid; // return the valid status
}

function fixStepIndicator(n, l) {
  // This function removes the "active" class of all steps...

  if(l == 1){
    if(n>=3 && n<=5)
        n= n-2;

    if(n>=5 && n<7)
        n= n - 5;
   }else{
        if(n<=5 && n>4)
            n=  n -5;
       if(n<=3 && n >1)
        n = n -2;
    }
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function newStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the first step:
  if(n == 1)
    x[0].className += " active";
  else
   x[x.length - 1].className+= " active";
}

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