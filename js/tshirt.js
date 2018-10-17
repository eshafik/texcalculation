class KnitUI{
    tshirtConusmption(){
        //Body Length
        let body_length = parseFloat(document.getElementById('input-kt-bd').value);
        let e = document.getElementById('selection-in-kt-bd');
        let body_length_unit = e.options[e.selectedIndex].value;
        //Sleeve
        let sleeve_length = parseFloat(document.getElementById('input-kt-sl').value);
        e = document.getElementById('selection-in-kt-sl');
        let sleeve_length_unit = e.options[e.selectedIndex].value;
        let sleeve_al = parseFloat(document.getElementById('input-kt-sl-al').value);
        //Half Chest
        let chest_length = parseFloat(document.getElementById('input-kt-ch').value);
        e = document.getElementById('selection-in-kt-ch');
        let chest_length_unit = e.options[e.selectedIndex].value;
        let chest_al = parseFloat(document.getElementById('input-kt-ch-al').value);
        //GSM
        let gsm = parseFloat(document.getElementById('input-kt-gsm').value);
        
        //Wastage
        let wastage = document.getElementById('input-kt-w').value;
        //Total Quantity
        let total_quantity = parseFloat(document.getElementById('input-kt-qt').value);
        e = document.getElementById('selection-in-kt-qt');
        let total_quantity_unit = e.options[e.selectedIndex].value;
        //Expected result unit

        e = document.getElementById('selection-out-kt');
        const result_unit = e.options[e.selectedIndex].value;

        const outputCount = document.getElementById('output-count');
        const outputSpan = document.getElementById('output-span');
        let output;

        //set wastage is equal to zero if there is no wastage percentage
        if(!wastage){
            wastage = 0;
        }
        //set fabric GSM zero if not input gsm
        if(!gsm){
            gsm = 0;
        }
 
        // Get quantity amount and unit
        if(!total_quantity){
            total_quantity = 1;
        }else{
            if(total_quantity_unit==='dz'){
                total_quantity = total_quantity*12;
            }
        }

        //Set all parts and number default 1
        if(!sleeve_al){
            sleeve_al = 0;
        }
        if(!chest_al){
            chest_al = 0;
        }

        // Get all value array
        let all_value = [
            body_length,
            sleeve_length,
            chest_length
        ]
        //Get all unit array
        let all_unit = [
            body_length_unit,
            sleeve_length_unit,
            chest_length_unit
        ]
        //set all value zero if no value input
        all_value = all_value.map(x=>{
            if(!x){
                return x=0;
            }else{
                return x;
            }
        })
        console.log(all_value);
        //Convert all value to cm if input value is given inch
        all_value = all_unit.map((x,index)=>{
            if(x==='in'){
                return all_value[index]*2.54;
            }else{
                return all_value[index];
            }
        })
        console.log(all_value);
        console.log("total_quantity: "+ total_quantity);
        let common_factor = (2*total_quantity)/10000000;
        console.log("common_f: "+common_factor);

        let part1 = (all_value[0]+all_value[1]+sleeve_al);
        let part2 = (all_value[2]+chest_al);
        console.log("part1: "+part1);
        console.log("part2: "+part2);


        let result = common_factor*part1*part2*gsm;
        wastage = (result*wastage)/100;
        result = result + wastage;

        //result will be meter
        if(result_unit==='gm'){
            result = result*1000;
        }

        console.log(result);

        if(isFinite(result)) {
            outputCount.value = result.toFixed(4);
            outputSpan.textContent = result_unit;
      
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