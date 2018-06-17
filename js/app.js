class Count{
    constructor(inputValue,inputUnitValue,outputUnitValue){
        this.inputValue = inputValue;
        this.inputUnitValue = inputUnitValue;
        this.outputUnitValue = outputUnitValue;
    }
}



// Listen for submit
document.getElementById('convert-form').addEventListener('submit', function(e){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(calculateResults, 2000);
  
    e.preventDefault();
  });
  
  // Calculate Results
  function calculateResults(){
    console.log('Calculating...');
    // UI Vars
    const inputValue = parseFloat(document.getElementById('input-count').value);
    const unitIn = document.getElementById('selection-in');
    const inputUnitValue = unitIn.options[unitIn.selectedIndex].value;

    const unitOut = document.getElementById('selection-out');
    const outputUnitValue = unitOut.options[unitOut.selectedIndex].value;
    const outputCount = document.getElementById('output-count');
    const outputSpan = document.getElementById('output-span');

    let output;
  
    if(inputUnitValue==='english'){
        if(outputUnitValue==='tex'){
            output = 590.54/inputValue;

        }else if(outputUnitValue==='denier'){
            output = 5315/inputValue;

        }else{
            output = inputValue;
        }
    }

    else if(inputUnitValue==='tex'){
        if(outputUnitValue==='english'){
            output = 590.54/inputValue;

        }else if(outputUnitValue==='denier'){
            output = 9*inputValue;
            
        }else{
            output = inputValue;
        }
    }
    else if(inputUnitValue==='denier'){
        if(outputUnitValue==='tex'){
            output = (1/9)*inputValue;

        }else if(outputUnitValue==='english'){
            output = 5315/inputValue;
            
        }else{
            output = inputValue;
        }
    }
  
    if(isFinite(output)) {
        outputCount.value = output.toFixed(2);
        outputSpan.textContent = outputUnitValue;
  
      // Show results
      document.getElementById('results').style.display = 'block';
  
      // Hide loader
      document.getElementById('loading').style.display = 'none';
      
  
    } else {
      showError('Please check your numbers');
    }
  }
  
  // Show Error
  function showError(error){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  
    // Create a div
    const errorDiv = document.createElement('div');
  
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // Add class
    errorDiv.className = 'alert alert-danger';
  
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
  
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }
  
  // Clear error
  function clearError(){
    document.querySelector('.alert').remove();
  }