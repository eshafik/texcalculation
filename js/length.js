class lengthUI{
    lengthConvert(){
        const value = parseFloat(document.getElementById('input-length').value);
        let e = document.getElementById('selection-in-length');
        const inU = e.options[e.selectedIndex].value;
        e = document.getElementById('selection-out-length');
        const outU = e.options[e.selectedIndex].value;

        const outputCount = document.getElementById('output-count');
        const outputSpan = document.getElementById('output-span');
        let output;
  
        //mm to others
        if(inU ==='mm'){
            if(outU==='mm'){
                output = value;
            }else if(outU==='cm'){
                output = value*0.1;
            }else if(outU==='m'){
                output = value*0.001;
            }else if(outU==='km'){
                output = value*0.000001;
            }else if(outU==='in'){
                output = value*0.039370078740157;
            }else if(outU==='ft'){
                output = value*0.0032808398950131;
            }else if(outU==='yd'){
                output = value*0.0010936132983377;
            }else if(outU==='mi'){
                output = value*0.00000062137119223733;
            }else if(outU==='nmi'){
                output = value*0.00000053995680345572;
            }else{
                output=0;
            }
            
        }
        //cm to others
        else if(inU ==='cm'){
            if(outU==='mm'){
                output = value*10;
            }else if(outU==='cm'){
                output = value;
            }else if(outU==='m'){
                output = value*0.01;
            }else if(outU==='km'){
                output = value*0.00001;
            }else if(outU==='in'){
                output = value*0.39370078740157;
            }else if(outU==='ft'){
                output = value*0.032808398950131;
            }else if(outU==='yd'){
                output = value*0.010936132983377;
            }else if(outU==='mi'){
                output = value*0.0000062137119223733;
            }else if(outU==='nmi'){
                output = value*0.0000053995680345572;
            }else{
                output=0;
            }    
        }
        // m to others
        else if(inU ==='m'){
            if(outU==='mm'){
                output = value*1000;
            }else if(outU==='cm'){
                output = value*100;
            }else if(outU==='m'){
                output = value;
            }else if(outU==='km'){
                output = value*0.001;
            }else if(outU==='in'){
                output = value*39.370078740157;
            }else if(outU==='ft'){
                output = value*3.2808398950131;
            }else if(outU==='yd'){
                output = value*1.0936132983377;
            }else if(outU==='mi'){
                output = value*0.00062137119223733;
            }else if(outU==='nmi'){
                output = value*0.00053995680345572;
            }else{
                output=0;
            }    
        }
        // km to others
        else if(inU ==='km'){
            if(outU==='mm'){
                output = value*1000000;
            }else if(outU==='cm'){
                output = value*100000;
            }else if(outU==='m'){
                output = value*1000;
            }else if(outU==='km'){
                output = value;
            }else if(outU==='in'){
                output = value*39370.078740157;
            }else if(outU==='ft'){
                output = value*3280.8398950131;
            }else if(outU==='yd'){
                output = value*1093.6132983377;
            }else if(outU==='mi'){
                output = value*0.62137119223733;
            }else if(outU==='nmi'){
                output = value*0.53995680345572;
            }else{
                output=0;
            }    
        }
        //inch to others
        else if(inU ==='in'){
            if(outU==='mm'){
                output = value*25.4;
            }else if(outU==='cm'){
                output = value*2.54;
            }else if(outU==='m'){
                output = value*0.0254;
            }else if(outU==='km'){
                output = value*0.0000254;
            }else if(outU==='in'){
                output = value;
            }else if(outU==='ft'){
                output = value*0.083333333333333;
            }else if(outU==='yd'){
                output = value*0.027777777777778;
            }else if(outU==='mi'){
                output = value*0.000015782828282828;
            }else if(outU==='nmi'){
                output = value*0.000013714902807775;
            }else{
                output=0;
            }    
        }
        //ft to others
        else if(inU ==='ft'){
            if(outU==='mm'){
                output = value*304.8;
            }else if(outU==='cm'){
                output = value*30.48;
            }else if(outU==='m'){
                output = value*0.3048;
            }else if(outU==='km'){
                output = value*0.0003048;
            }else if(outU==='in'){
                output = value*12;
            }else if(outU==='ft'){
                output = value;
            }else if(outU==='yd'){
                output = value*0.33333333333333;
            }else if(outU==='mi'){
                output = value*0.00018939393939394;
            }else if(outU==='nmi'){
                output = value*0.0001645788336933;
            }else{
                output=0;
            }    
        }
        //yd to others
        else if(inU ==='yd'){
            if(outU==='mm'){
                output = value*914.4;
            }else if(outU==='cm'){
                output = value*91.44;
            }else if(outU==='m'){
                output = value*0.9144;
            }else if(outU==='km'){
                output = value*0.0009144;
            }else if(outU==='in'){
                output = value*36;
            }else if(outU==='ft'){
                output = value*3;
            }else if(outU==='yd'){
                output = value;
            }else if(outU==='mi'){
                output = value*0.00056818181818182;
            }else if(outU==='nmi'){
                output = value*0.00049373650107991;
            }else{
                output=0;
            }    
        }
        //mile to others
        else if(inU ==='mi'){
            if(outU==='mm'){
                output = value*1609344;
            }else if(outU==='cm'){
                output = value*160934.4	;
            }else if(outU==='m'){
                output = value*1609.344;
            }else if(outU==='km'){
                output = value*1.609344;
            }else if(outU==='in'){
                output = value*63360;
            }else if(outU==='ft'){
                output = value*5280;
            }else if(outU==='yd'){
                output = value*1760;
            }else if(outU==='mi'){
                output = value;
            }else if(outU==='nmi'){
                output = value*0.86897624190065;
            }else{
                output=0;
            }    
        }
        // nmi to others
        else if(inU ==='nmi'){
            if(outU==='mm'){
                output = value*1852000;
            }else if(outU==='cm'){
                output = value*185200;
            }else if(outU==='m'){
                output = value*1852;
            }else if(outU==='km'){
                output = value*1.852;
            }else if(outU==='in'){
                output = value*72913.385826772;
            }else if(outU==='ft'){
                output = value*6076.1154855643;
            }else if(outU==='yd'){
                output = value*2025.3718285214;
            }else if(outU==='mi'){
                output = value*1.1507794480235;
            }else if(outU==='nmi'){
                output = value;
            }else{
                output=0;
            }    
        }
        if(isFinite(output)) {
            outputCount.value = output.toFixed(4);
            outputSpan.textContent = outU;
      
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