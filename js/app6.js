//Woven Shirt Menu
document.getElementById('ws-menu').addEventListener('click',function(e){
  setHeading("Fabric Consumption For Woven Shirt");
  displayOn('ws-form');

  e.preventDefault();
})

//Woven Pant Menu
document.getElementById('wp-menu').addEventListener('click',function(e){
    setHeading("Fabric Consumption For Woven Pant");
    displayOn('wp-form');

    e.preventDefault();
})

//Basic   T-shirt Menu
document.getElementById('kt-menu').addEventListener('click',function(e){
  setHeading("Fabric Consumption For Basic T-Shirt ");
  displayOn('kt-form');

  e.preventDefault();
})

//Count Menu
document.getElementById('count-convert').addEventListener('click',function(e){
    
    setHeading("Count Converter");
    displayOn('count-form');
    
    e.preventDefault();
})
//Lenght Menu
document.getElementById('length-convert').addEventListener('click',function(e){
    
  setHeading("Length Converter");
  displayOn('length-form');
  
  e.preventDefault();
})

//Weight Menu
document.getElementById('weight-convert').addEventListener('click',function(e){
    
  setHeading("Weight Converter");
  displayOn('weight-form');
  
  e.preventDefault();
})
//Yarn Dia Menu
document.getElementById('yarn-dia').addEventListener('click',function(e){
    
  setHeading("Calculate Yarn Dia From Count");
  displayOn('dia-form');
  
  e.preventDefault();
})

//Listener for Woven Shirt Fabric consumption Calculate
document.getElementById('ws-form').addEventListener('submit',function(e){

  const ui = new WovenShirtUI;

  // Hide results
  // ui.wshirtConsumption();
  document.getElementById('results').style.display = 'none';
    
  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(ui.wshirtConsumption, 500);
  e.preventDefault();

})

//Listener for Woven Pant Fabric Consumption Calculation
document.getElementById('wp-form').addEventListener('submit',function(e){
    const ui = new WovenPantUI;
    // Hide results
  document.getElementById('results').style.display = 'none';
    
  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(ui.wpantConsumption, 500);
  e.preventDefault();
})

//Listener for Basic T-shirt Consumpiton calculation
document.getElementById('kt-form').addEventListener('submit',function(e){
      const ui = new KnitUI;

    // ui.tshirtConusmption();
    // Hide results
  document.getElementById('results').style.display = 'none';
    
  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(ui.tshirtConusmption, 500);
  
  e.preventDefault();
})



// listener for count calculating
document.getElementById('count-form').addEventListener('submit', function(e){
    console.log("get calculate");
    const ui = new ConuntUI;
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(ui.countConvert, 500);
  
    e.preventDefault();
  });

  // listener for length calculating
  document.getElementById('length-form').addEventListener('submit',function(e){
    const ui = new lengthUI;
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(ui.lengthConvert, 500);
  
    e.preventDefault();
  })

  // listener for weight calculating
  document.getElementById('weight-form').addEventListener('submit',function(e){
    const ui = new weightUI;
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(ui.weightConvert, 500);
  
    e.preventDefault();
  })

  //listener for Yarn dia calculating
  document.getElementById('dia-form').addEventListener('submit',function(e){
    const ui = new DiaUI;
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(ui.findDia, 500);
  
    e.preventDefault();
  })

// Heading for Display Form
  function setHeading(str){
    const header = document.getElementById('heading');
    header.innerText = str;
  }

// Display the selected input form which is disabled initially
  function displayOn(id){
    document.getElementById('count-form').style.display = 'none';
    document.getElementById('length-form').style.display = 'none';
    document.getElementById('weight-form').style.display = 'none';
    document.getElementById('dia-form').style.display = 'none';
    document.getElementById('ws-form').style.display = 'none';
    document.getElementById('wp-form').style.display = 'none';
    document.getElementById('kt-form').style.display = 'none';
    document.getElementById('my-image').style.display = 'none';
    document.getElementById(id).style.display = 'block';

  }

  

