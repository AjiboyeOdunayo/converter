  var input = document.getElementById("input");
	var result = document.getElementById("result");
	var result2 = document.getElementById("result2");

    input.addEventListener("keyup",myResult);
    
function myResult(){
 		result.value = input.value *0.01;

 		var result2 = document.getElementById("result2").innerHTML
      = input.value + " CM  =   " +  result.value + " M "

 	}


  var result = document.getElementById("result");
  var input = document.getElementById("input");

  result.addEventListener("keyup",myMeter);

  function myMeter(){
    input.value = result.value *100

    var result2 = document.getElementById("result2").innerHTML
      = result.value + " CM  =   " +  input.value + " M "

}



 	


