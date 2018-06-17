class weightUI{
    weightConvert(){
        const value = parseFloat(document.getElementById('input-weight').value);
        let e = document.getElementById('selection-in-weight');
        const inU = e.options[e.selectedIndex].value;
        e = document.getElementById('selection-out-weight');
        const outU = e.options[e.selectedIndex].value;

        const outputCount = document.getElementById('output-count');
        const outputSpan = document.getElementById('output-span');
        let output;
  
        //gm to others
        if(inU ==='gm'){
            if(outU==='gm'){
                output = value;
            }else if(outU==='kg'){
                output = value*0.001;
            }else if(outU==='lb'){
                output = value*0.0022046226218488;
            }else if(outU==='oz'){
                output = value*0.03527396194958;
            }else if(outU==='carat'){
                output = value*5;
            }else if(outU==='ton-us'){
                output = value*0.0000011023113109244;
            }else if(outU==='ton-uk'){
                output = value*0.00000098420652761106;
            }else if(outU==='ton-metric'){
                output = value*0.000001;
            }else if(outU==='gr'){
                output = value*15.432358352941;
            }else{
                output=0;
            }   
        }
        //kg to others
        else if(inU ==='kg'){
            if(outU==='gm'){
                output = value*1000;
            }else if(outU==='kg'){
                output = value;
            }else if(outU==='lb'){
                output = value*2.2046226218488;
            }else if(outU==='oz'){
                output = value*35.27396194958;
            }else if(outU==='carat'){
                output = value*5000;
            }else if(outU==='ton-us'){
                output = value*0.0011023113109244;
            }else if(outU==='ton-uk'){
                output = value*0.00098420652761106;
            }else if(outU==='ton-metric'){
                output = value*0.001;
            }else if(outU==='gr'){
                output = value*15432.358352941;
            }else{
                output=0;
            }   
        }
        //lb to others
        else if(inU ==='lb'){
            if(outU==='gm'){
                output = value*453.59237;
            }else if(outU==='kg'){
                output = value*0.45359237;
            }else if(outU==='lb'){
                output = value;
            }else if(outU==='oz'){
                output = value*16;
            }else if(outU==='carat'){
                output = value*2267.96185;
            }else if(outU==='ton-us'){
                output = value*0.0005;
            }else if(outU==='ton-uk'){
                output = value*0.00044642857142857;
            }else if(outU==='ton-metric'){
                output = value*0.00045359237;
            }else if(outU==='gr'){
                output = value*7000;
            }else{
                output=0;
            }   
        }

        //oz to others
        else if(inU ==='oz'){
            if(outU==='gm'){
                output = value*28.349523125;
            }else if(outU==='kg'){
                output = value*0.028349523125;
            }else if(outU==='lb'){
                output = value*0.0625;
            }else if(outU==='oz'){
                output = value;
            }else if(outU==='carat'){
                output = value*141.747615625;
            }else if(outU==='ton-us'){
                output = value*0.00003125;
            }else if(outU==='ton-uk'){
                output = value*0.000027901785714286;
            }else if(outU==='ton-metric'){
                output = value*0.000028349523125;
            }else if(outU==='gr'){
                output = value*437.5;
            }else{
                output=0;
            }   
        }
        //carat to others
        else if(inU ==='carat'){
            if(outU==='gm'){
                output = value*0.2;
            }else if(outU==='kg'){
                output = value*0.0002;
            }else if(outU==='lb'){
                output = value*0.00044092452436976;
            }else if(outU==='oz'){
                output = value*0.0070547923899161;
            }else if(outU==='carat'){
                output = value;
            }else if(outU==='ton-us'){
                output = value*0.00000022046226218488;
            }else if(outU==='ton-uk'){
                output = value*0.00000019684130552221;
            }else if(outU==='ton-metric'){
                output = value*0.0000002;
            }else if(outU==='gr'){
                output = value*3.0864716705883;
            }else{
                output=0;
            }   
        }

        //ton-us to others
        else if(inU ==='ton-us'){
            if(outU==='gm'){
                output = value*907184.74;
            }else if(outU==='kg'){
                output = value*907.18474;
            }else if(outU==='lb'){
                output = value*2000;
            }else if(outU==='oz'){
                output = value*32000;
            }else if(outU==='carat'){
                output = value*4535923.7;
            }else if(outU==='ton-us'){
                output = value;
            }else if(outU==='ton-uk'){
                output = value*0.89285714285714;
            }else if(outU==='ton-metric'){
                output = value*0.90718474;
            }else if(outU==='gr'){
                output = value*14000000;
            }else{
                output=0;
            }   
        }

        //ton-uk to others
        else if(inU ==='ton-uk'){
            if(outU==='gm'){
                output = value*1016046.9088;
            }else if(outU==='kg'){
                output = value*1016.0469088;
            }else if(outU==='lb'){
                output = value*2240;
            }else if(outU==='oz'){
                output = value*35840;
            }else if(outU==='carat'){
                output = value*5080234.544;
            }else if(outU==='ton-us'){
                output = value*1.12;
            }else if(outU==='ton-uk'){
                output = value;
            }else if(outU==='ton-metric'){
                output = value*1.0160469088;
            }else if(outU==='gr'){
                output = value*15680000;
            }else{
                output=0;
            }   
        }
        //ton-metric to others
        else if(inU ==='ton-metric'){
            if(outU==='gm'){
                output = value*1000000;
            }else if(outU==='kg'){
                output = value*1000;
            }else if(outU==='lb'){
                output = value*2204.6226218488;
            }else if(outU==='oz'){
                output = value*35273.96194958;
            }else if(outU==='carat'){
                output = value*5000000;
            }else if(outU==='ton-us'){
                output = value*1.1023113109244;
            }else if(outU==='ton-uk'){
                output = value*0.984206527611061106;
            }else if(outU==='ton-metric'){
                output = value;
            }else if(outU==='gr'){
                output = value*15432358.352941
                ;
            }else{
                output=0;
            }   
        }
        //grain to others
        else if(inU ==='gr'){
            if(outU==='gm'){
                output = value*0.06479891;
            }else if(outU==='kg'){
                output = value*0.00006479891;
            }else if(outU==='lb'){
                output = value*0.00014285714285714;
            }else if(outU==='oz'){
                output = value*0.0022857142857143;
            }else if(outU==='carat'){
                output = value*0.32399455;
            }else if(outU==='ton-us'){
                output = value*0.000000071428571428571;
            }else if(outU==='ton-uk'){
                output = value*0.000000063775510204082;
            }else if(outU==='ton-metric'){
                output = value*0.00000006479891;
            }else if(outU==='gr'){
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
            console.log("count error");
            const ui = new ErrorUI;
            ui.showError();
        }
    }
}