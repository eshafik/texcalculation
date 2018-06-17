class ConuntUI{
    countConvert(){
        const value = parseFloat(document.getElementById('input-count').value);
        let e = document.getElementById('selection-in');
        const inU = e.options[e.selectedIndex].value;
        e = document.getElementById('selection-out');
        const outU = e.options[e.selectedIndex].value;

        const outputCount = document.getElementById('output-count');
        const outputSpan = document.getElementById('output-span');
        let output;
        // Denier to others
        if(inU ==='D'){
            if(outU==='ktex'){
                output = value*0.00011;

            }else if(outU==='Tt'){
                output = value*0.111;

            }else if(outU==='dtex'){
                output = value*1.111;
            }else if(outU==='mtex'){
                output = value*111;
            }else if(outU=== 'Nm'){
                output = 9000/value;
            }else if(outU==='Ne'){
                output = 5315/value;
            }else if(outU==='Nl'){
                output = 14882/value;
            }else if(outU==='Nk'){
                output = 7972/value;
            }else if(outU==='Nw'){
                output = 17440/value;
            } else if(outU==='D'){
                output = value;
            }
            else{
                output = null;
            }
        }
        // Kilo tex to others
        else if(inU==='ktex'){
            if(outU==='D'){
               output = 9000*value;
            }else if(outU==='ktex'){
                output = value;
            }else if(outU==='Tt'){
                output = value*1000;
            }else if(outU==='dtex'){
                output = value*10000;
            }else if(outU==='mtex'){
                output = value*1000000;
            }else if(outU==='Nm'){
                output = 1/value;
            }else if(outU==='Ne'){
                output = 0.59/value;
            }else if(outU==='Nl'){
                output = 1.654/value;
            }else if(outU==='Nk'){
                output = 0.886/value;
            }else if(outU==='Nw'){
                output = 1.938/value;
            }else{
                output = null;
            }
        }
        //Tex to others
        else if(inU==='Tt'){
            if(outU==='D'){
               output = 9*value;
            }else if(outU==='ktex'){
                output = value*0.001;
            }else if(outU==='Tt'){
                output = value;
            }else if(outU==='dtex'){
                output = value*10;
            }else if(outU==='mtex'){
                output = value*1000;
            }else if(outU==='Nm'){
                output = 1000/value;
            }else if(outU==='Ne'){
                output = 590.5/value;
            }else if(outU==='Nl'){
                output = 1654/value;
            }else if(outU==='Nk'){
                output = 886/value;
            }else if(outU==='Nw'){
                output = 1938/value;
            }else{
                output = null;
            }
        }
        //DeciTex to others
        else if(inU==='dtex'){
            if(outU==='D'){
               output = value*0.9;
            }else if(outU==='ktex'){
                output = value*0.0001;
            }else if(outU==='Tt'){
                output = value*0.1;
            }else if(outU==='dtex'){
                output = value;
            }else if(outU==='mtex'){
                output = value*100;
            }else if(outU==='Nm'){
                output = 10000/value;
            }else if(outU==='Ne'){
                output = 5900/value;
            }else if(outU==='Nl'){
                output = 16540/value;
            }else if(outU==='Nk'){
                output = 8860/value;
            }else if(outU==='Nw'){
                output = 19380/value;
            }else{
                output = null;
            }
        }
        //MilliTex to others
        else if(inU==='mtex'){
            if(outU==='D'){
               output = value*0.009;
            }else if(outU==='ktex'){
                output = value*0.000001;
            }else if(outU==='Tt'){
                output = value*0.001;
            }else if(outU==='dtex'){
                output = value*0.01;
            }else if(outU==='mtex'){
                output = value;
            }else if(outU==='Nm'){
                output = 1000000/value;
            }else if(outU==='Ne'){
                output = 590000/value;
            }else if(outU==='Nl'){
                output = 1654000/value;
            }else if(outU==='Nk'){
                output = 886000/value;
            }else if(outU==='Nw'){
                output = 1938000/value;
            }else{
                output = null;
            }
        }
        //Metric count to others
        else if(inU==='Nm'){
            if(outU==='D'){
               output = 9000/value;
            }else if(outU==='ktex'){
                output = 1/value;
            }else if(outU==='Tt'){
                output = 1000/value;
            }else if(outU==='dtex'){
                output = 10000/value;
            }else if(outU==='mtex'){
                output = 1000000/value;
            }else if(outU==='Nm'){
                output = value;
            }else if(outU==='Ne'){
                output = value*0.59;
            }else if(outU==='Nl'){
                output = value*1.654;
            }else if(outU==='Nk'){
                output = value*0.886;
            }else if(outU==='Nw'){
                output = value*1.938;
            }else{
                output = null;
            }
        }
        //English Count To others
        else if(inU==='Ne'){
            if(outU==='D'){
               output = 5315/value;
            }else if(outU==='ktex'){
                output = 0.59/value;
            }else if(outU==='Tt'){
                output = 590.5/value;
            }else if(outU==='dtex'){
                output = 5900/value;
            }else if(outU==='mtex'){
                output = 590000/value;
            }else if(outU==='Nm'){
                output = value*1.693;
            }else if(outU==='Ne'){
                output = value;
            }else if(outU==='Nl'){
                output = value*2.80;
            }else if(outU==='Nk'){
                output = value*1.50;
            }else if(outU==='Nw'){
                output = value*3.28;
            }else{
                output = null;
            }
        }
        //Linen Count to others
        else if(inU==='Nl'){
            if(outU==='D'){
               output = 14882/value;
            }else if(outU==='ktex'){
                output = 1.654/value;
            }else if(outU==='Tt'){
                output = 1654/value;
            }else if(outU==='dtex'){
                output = 16540/value;
            }else if(outU==='mtex'){
                output = 1654000/value;
            }else if(outU==='Nm'){
                output = value*0.605;
            }else if(outU==='Ne'){
                output = value*0.357;
            }else if(outU==='Nl'){
                output = value;
            }else if(outU==='Nk'){
                output = value*0.536;
            }else if(outU==='Nw'){
                output = value*1.172;
            }else{
                output=null;
            }
        }
        //Worsted Count to others
        else if(inU==='Nk'){
            if(outU==='D'){
               output = 7972/value;
            }else if(outU==='ktex'){
                output = 0.886/value;
            }else if(outU==='Tt'){
                output = 886/value;
            }else if(outU==='dtex'){
                output = 8860/value;
            }else if(outU==='mtex'){
                output = 886000/value;
            }else if(outU==='Nm'){
                output = value*1.129;
            }else if(outU==='Ne'){
                output = value*0.667;
            }else if(outU==='Nl'){
                output = value*1.867;
            }else if(outU==='Nk'){
                output = value;
            }else if(outU==='Nw'){
                output = value*2.188;
            }else{
                output = null;
            }
        }
        //Woollen(Yokshire) Count to others
        else if(inU==='Nw'){
            if(outU==='D'){
               output = 17440/value;
            }else if(outU==='ktex'){
                output = 1.938/value;
            }else if(outU==='Tt'){
                output = 1938/value;
            }else if(outU==='dtex'){
                output = 19380/value;
            }else if(outU==='mtex'){
                output = 1938000/value;
            }else if(outU==='Nm'){
                output = value*0.516;
            }else if(outU==='Ne'){
                output = value*0.305;
            }else if(outU==='Nl'){
                output = value*0.853;
            }else if(outU==='Nk'){
                output = value*0.457;
            }else if(outU==='Nw'){
                output = value;
            }else{
                output = null;
            }
        }

        // else if(inU==='ktex'){
        //     if(outU==='den'){
        //        output = 
        //     }else if(outU==='ktex'){
        //         output = value
        //     }else if(outU==='Tt'){
        //         output = value
        //     }else if(outU==='dtex'){
        //         output = value
        //     }else if(outU==='mtex'){
        //         output = value
        //     }else if(outU==='Nm'){
        //         output = value
        //     }else if(outU==='Ne'){
        //         output = value
        //     }else if(outU==='Nl'){
        //         output = value
        //     }else if(outU==='Nk'){
        //         output = value
        //     }else if(outU==='Nw'){
        //         output = value
        //     }else{

        //     }
        // }

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