
function store(){
    var product = document.getElementById("Name of the product").value;
    var product_1 = document.getElementById("Description").value;
    var product_2 = document.getElementById("Model Number").value;
    var product_3 = document.getElementsById("Year").value;

    localStorage.setItem("Name of the product",product);
    localStorage.setItem("Description",product_1);
    localStorage.setItem("Model Number",product_2);
    localStorage.setItem("Year",product_3);

    var result = localStorage.getItem("Name of the product");
    var result_1 = localStorage.getItem("Description");
    var result_2 = localStorage.getItem("Model Number");
    var result_3 = localStorage.getItem("Year");

     document.getElementById("input_demo").innerHTML=result;
     document.getElementById("input_demo_1").innerHTML=result_1;
     document.getElementById("input_demo_2").innerHTML=result_2;
     document.getElementById("input_demo_3").innerHTML=result_3;

    console.log(result);
    console.log(result_1);
    console.log(result_2);
    console.log(result_3);
    
    }