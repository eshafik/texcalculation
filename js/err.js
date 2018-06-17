class ErrorUI{
    showError(){
        // Hide results
        document.getElementById('results').style.display = 'none';
        
        // Hide loader
        document.getElementById('loading').style.display = 'none';
    
        // Create a div
        const errorDiv = document.createElement('div');
    
        // Get elements
        const card = document.getElementById('card-head');

        const heading = document.getElementById('heading');
    
        // Add class
        errorDiv.className = 'alert alert-danger';
    
        // Create text node and append to div
        errorDiv.appendChild(document.createTextNode("Please Check the fields.."));
    
        // Insert error above heading
        card.insertBefore(errorDiv, heading);
    
        // Clear error after 3 seconds
        setTimeout(() => document.querySelector('.alert').remove() , 3000);
    }
}