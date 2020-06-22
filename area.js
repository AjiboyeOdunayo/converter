// Acre convertion start here.
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
    // input2.addEventListener("keyup",acre);
    

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
// Acre convertion stop here.
     
     var input2 = document.getElementById("input2");
     var input1 = document.getElementById("input1");
     var input3 = document.getElementById("input3");
     var input4 = document.getElementById("input4");
     var input5 = document.getElementById("input5");
     var input6 = document.getElementById("input6");
     var input7 = document.getElementById("input7");
     var input8 = document.getElementById("input8");
     var input9 = document.getElementById("input9");


    input2.addEventListener("keyup",sqHectare);

     function sqHectare(){
      input1.value = input2.value * 2.4710538147;
      input3.value = input2.value  * 100000000;
      input4.value = input2.value * 107639.10417;
      input5.value = input2.value * 15500031;
      input6.value = input2.value / 100;
      input7.value = input2.value * 10000;
      input8.value = input2.value / 258.998811;
      input9.value = input2.value * 11959.900463;
     }

// square centimeter conversation start from here

     var input3 = document.getElementById("input3");
     var input1 = document.getElementById("input1");
     var input2 = document.getElementById("input2");
     var input4 = document.getElementById("input4");
     var input5 = document.getElementById("input5");
     var input6 = document.getElementById("input6");
     var input7 = document.getElementById("input7");
     var input8 = document.getElementById("input8");
     var input9 = document.getElementById("input9");


    input3.addEventListener("keyup",sqCent);

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
// square centimeter conversation stop from here


// square feet conversation start from here
     var input4 = document.getElementById("input4");
     var input1 = document.getElementById("input1");
     var input2 = document.getElementById("input2");
     var input3 = document.getElementById("input3");
     var input5 = document.getElementById("input5");
     var input6 = document.getElementById("input6");
     var input7 = document.getElementById("input7");
     var input8 = document.getElementById("input8");
     var input9 = document.getElementById("input9");


    input4.addEventListener("keyup",sqFeet);

    function sqFeet(){
      input1.value = input4.value / 43560;
      input2.value = input4.value / 107639.10417;
      input3.value = input4.value * 929.0304;
      input5.value = input4.value * 144;
      input6.value = input4.value / 10763910.417;
      input7.value = input4.value / 10763910.417;
      input8.value = input4.value / 27878400;
      input9.value = input4.value / 9;
     }
// square feet conversation stop from here

// square inch conversation satrt from here
     var input5 = document.getElementById("input5");
     var input1 = document.getElementById("input1");
     var input2 = document.getElementById("input2");
     var input3 = document.getElementById("input3");
     var input4 = document.getElementById("input4");
     var input6 = document.getElementById("input6");
     var input7 = document.getElementById("input7");
     var input8 = document.getElementById("input8");
     var input9 = document.getElementById("input9");


    input5.addEventListener("keyup",sqInch);

     function sqInch(){
      input1.value = input5.value / 6272640;
      input2.value = input5.value / 15500031;
      input3.value = input5.value * 6.4516;
      input4.value = input5.value / 144;
      input6.value = input5.value/ 1550003100;
      input7.value = input5.value / 1550.0031;
      input8.value = input5.value / 4014489599.9;
      input9.value = input5.value  / 1296;
     }

// square inch conversation stop from here
     
// square kilometer conversation satrt from here
     var input6 = document.getElementById("input6");
     var input1 = document.getElementById("input1");
     var input2 = document.getElementById("input2");
     var input3 = document.getElementById("input3");
     var input4 = document.getElementById("input4");
     var input5 = document.getElementById("input5");
     var input7 = document.getElementById("input7");
     var input8 = document.getElementById("input8");
     var input9 = document.getElementById("input9");


    input6.addEventListener("keyup",sqKm);

     function sqKm(){
      input1.value = input6.value * 247.105381476272640;
      input2.value = input6.value  * 100;
      input3.value = input6.value * 10000000000;
      input4.value = input6.value * 10763910.417;
      input5.value = input6.value* 1550003100;
      input7.value = input6.value  * 1000000;
      input8.value = input6.value / 2.58998811;
      input9.value = input6.value   * 1195990.0463;
     }

// square kilometer conversation stop from here

 // square meter conversation satrt from here

     var input7 = document.getElementById("input7");
     var input1 = document.getElementById("input1");
     var input2 = document.getElementById("input2");
     var input3 = document.getElementById("input3");
     var input4 = document.getElementById("input4");
     var input5 = document.getElementById("input5");
     var input6 = document.getElementById("input6");
     var input8 = document.getElementById("input8");
     var input9 = document.getElementById("input9");


    input7.addEventListener("keyup",sqMeter);

     function sqMeter(){
      input1.value = input7.value / 4046.8564224;
      input2.value = input7.value / 10000;
      input3.value = input7.value * 10000;
      input4.value = input7.value * 10.763910417;
      input5.value = input7.value * 1550.0031;
      input6.value = input7.value * 1000000;
      input8.value = input7.value / 2589988.1103;
      input9.value = input7.value * 1.19599005;
     }
// square meter conversation stop from here
     
// square mile conversation satrt from here

     var input8 = document.getElementById("input8");
     var input1 = document.getElementById("input1");
     var input2 = document.getElementById("input2");
     var input3 = document.getElementById("input3");
     var input4 = document.getElementById("input4");
     var input5 = document.getElementById("input5");
     var input6 = document.getElementById("input6");
     var input7 = document.getElementById("input7");
     var input9 = document.getElementById("input9");


    input8.addEventListener("keyup",sqMile);

     function sqMile(){
      input1.value = input8.value * 640;
      input2.value = input8.value * 258.998811;
      input3.value = input8.value * 25899881103;
      input4.value = input8.value * 27878400;
      input5.value = input8.value * 4014489599.9;
      input6.value = input8.value * 2.58998811;
      input7.value = input8.value * 2589988.1103;
      input9.value = input8.value * 3097600;
     }
// square mile conversation stop from here

// square yard conversation satrt from here

     var input9 = document.getElementById("input9");
     var input1 = document.getElementById("input1");
     var input2 = document.getElementById("input2");
     var input3 = document.getElementById("input3");
     var input4 = document.getElementById("input4");
     var input5 = document.getElementById("input5");
     var input6 = document.getElementById("input6");
     var input7 = document.getElementById("input7");
     var input8 = document.getElementById("input8");


    input9.addEventListener("keyup",sqYard);

     function sqYard(){
      input1.value = input9.value  / 4840;
      input2.value = input9.value  / 11959.900463;
      input3.value = input9.value  * 8361.2736;
      input4.value = input9.value  * 9;
      input5.value = input9.value  * 1296;
      input6.value = input9.value  / 1195990.0463;
      input7.value = input9.value  / 1.19599005;
      input8.value = input9.value  / 3097600;
     }
// square yard conversation stop from here
     
     