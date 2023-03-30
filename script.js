function calculateBMI() {
    

    let weightInput = parseFloat(document.getElementById("weightInput").value);
    let heightInput = parseFloat(document.getElementById("heightInput").value) / 100;
    let output = document.getElementById("output");
  
  
    let bmi = weightInput / (heightInput * heightInput); 
  

  
  output.innerHTML = bmi.toFixed(2);
  
  }
  