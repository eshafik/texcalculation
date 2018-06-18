class DiaUI{
    findDia(){
        const value = parseFloat(document.getElementById('input-dia').value);
        let e = document.getElementById('selection-in-dia');
        const inU = e.options[e.selectedIndex].value;

        const outputCount = document.getElementById('output-count');
        const outputSpan = document.getElementById('output-span');

        let count;
        //Convert all conut to Ne count
        if(inU=='D'){
            count = 5315/value;
        }else if(inU==='ktex'){
            count = 0.59/value;
        }else if(inU==='Tt'){
            count = 590.5/value;
        }else if(inU==='dtex'){
            count = 5900/value;
        }else if(inU==='mtex'){
            count = 590000/value;
        }else if(inU==='Nm'){
            count = 0.59*value;
        }else if(inU==='Ne'){
            count = value;
        }else if(inU==='Nl'){
            count = 0.357*value;
        }else if(inU==='Nk'){
            count = 0.667*value;
        }else if(inU==='Nw'){
            count = 0.305*value;
        }else{
            output = 0;
        }

        //Dia Calculation
        let output;
        let cal;
        cal = 28* (Math.sqrt(count));
        output = (1/cal)*2.54;
        

        if(isFinite(output)) {
            outputCount.value = output.toFixed(8);
            outputSpan.textContent = "Yarn dia(cm) is:";
      
          // Show results
          document.getElementById('results').style.display = 'block';
      
          // Hide loader
          document.getElementById('loading').style.display = 'none';
          
      
        } else {
            const ui = new ErrorUI;
            ui.showError();
        }
    }
}
