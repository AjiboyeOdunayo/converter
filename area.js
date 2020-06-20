// Acre convertion
     var input1 = document.getElementById("input1");
     var input2 = document.getElementById("input2");
     var input3 = document.getElementById("input3");
     var input4 = document.getElementById("input4");
     var input5 = document.getElementById("input5");
     var input6 = document.getElementById("input6");
     var input7 = document.getElementById("input7");
     var input8 = document.getElementById("input8");
     var input9 = document.getElementById("input9");


    input1.addEventListener("keyup",acre);
    input2.addEventListener("keyup",acre);
    

    function acre(){
      input2.value = input1.value / 2.4710538147;
      input3.value = input1.value * 40468564.224;
      input4.value = input1.value * 43560;
      input5.value = input1.value * 6272640;
      input6.value = input1.value / 247.10538147;
      input7.value = input1.value * 4046.8564224;
      input8.value = input1.value / 640;
      input9.value = input1.value * 4840;

     }



    //  var input2 = document.getElementById("input2");
    //  var input1 = document.getElementById("input1");
    //  var input3 = document.getElementById("input3");
    //  var input4 = document.getElementById("input4");
    //  var input5 = document.getElementById("input5");
    //  var input6 = document.getElementById("input6");
    //  var input7 = document.getElementById("input7");
    //  var input8 = document.getElementById("input8");
    //  var input9 = document.getElementById("input9");


    // input2.addEventListener("keyup",hectConvert);
    // input1.addEventListener("keyup",hectConvert);

    // function hectConvert(){
    //           input1.value = input2.value  * 2.4710538147;
    //           input3.value = input2.value * 100000000;
    //           input4.value = input2.value * 107639.10417;
    //           input5.value = input2.value  * 15500031;
    //           input6.value = input2.value / 100;
    //           input7.value = input2.value * 10000;
    //           input8.value = input2.value / 258.998811;
    //           input9.value = input2.value * 11959.900463;


    //          }

// square centimeter conversation start from here

     var input3 = document.getElementById("input3");
     var input1 = document.getElementById("input1");
     var input2 = document.getElementById("input2");
     var input3 = document.getElementById("input3");
     var input4 = document.getElementById("input4");
     var input5 = document.getElementById("input5");
     var input6 = document.getElementById("input6");
     var input7 = document.getElementById("input7");
     var input8 = document.getElementById("input8");


    input3.addEventListener("keyup",sqCent);
    // input2.addEventListener("keyup",area);

     function sqCent(){
      input1.value = input3.value / 40468564.224;
      input2.value = input3.value /  10000;
      input4.value = input3.value /  10000;
      input5.value = input3.value / 10.763910417;
      input6.value = input3.value /  1550.0031;
      input7.value = input3.value / 1000000;
      input8.value = input3.value / 2589988.1103;
      input9.value = input3.value / 8361.2736;
     }