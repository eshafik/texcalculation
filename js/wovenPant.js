class WovenPantUI{
    wpantConsumption(){
        //collect all input value
        //Body Part
        //Out Seam
        let outSeam_length = parseFloat(document.getElementById('input-wp-os').value);
        let e = document.getElementById('selection-in-wp-os');
        let outSeam_length_unit = e.options[e.selectedIndex].value;
        //Thigh
        let full_thigh = parseFloat(document.getElementById('input-wp-th').value);
        e = document.getElementById('selection-in-wp-th');
        let full_thigh_unit = e.options[e.selectedIndex].value;
        //Loop Length
        let loop_length = parseFloat(document.getElementById('input-wp-lp-l').value);
        e = document.getElementById('selection-in-wp-lp-l');
        let loop_length_unit = e.options[e.selectedIndex].value;
        //Loop Width
        let loop_width = parseFloat(document.getElementById('input-wp-lp-w').value);
        e = document.getElementById('selection-in-wp-lp-w');
        let loop_width_unit = e.options[e.selectedIndex].value;
        //No of loop parts and number
        let loop_parts = parseFloat(document.getElementById('input-wp-lp-p').value);
        let loop_number = parseFloat(document.getElementById('input-wp-lp-n').value);
        //Pocket Length
        let pocket_length = parseFloat(document.getElementById('input-wp-pk-l').value);
        e = document.getElementById('selection-in-wp-pk-l');
        let pocket_length_unit = e.options[e.selectedIndex].value;
        //Pocket Width
        let pocket_width = parseFloat(document.getElementById('input-wp-pk-w').value);
        e = document.getElementById('selection-in-wp-pk-w');
        let pocket_width_unit = e.options[e.selectedIndex].value;
        //No of pocket parts and number
        let pocket_parts = parseFloat(document.getElementById('input-wp-pk-p').value);
        let pocket_number = parseFloat(document.getElementById('input-wp-pk-n').value);
        //Wastage
        let wastage = document.getElementById('input-wp-w').value;
        //Fabric width
        let fabric_width = parseFloat(document.getElementById('input-wp-fw').value);
        e = document.getElementById('selection-in-wp-fw');
        let fabric_width_unit = e.options[e.selectedIndex].value;
        //Total Quantity
        let total_quantity = parseFloat(document.getElementById('input-wp-qt').value);
        e = document.getElementById('selection-in-wp-qt');
        let total_quantity_unit = e.options[e.selectedIndex].value;
        //Expected result unit

        e = document.getElementById('selection-out-wp');
        const result_unit = e.options[e.selectedIndex].value;

        const outputCount = document.getElementById('output-count');
        const outputSpan = document.getElementById('output-span');
        let output;

        //set wastage is equal to zero if there is no wastage percentage
        if(!wastage){
            wastage = 0;
        }
        //set fabric width is 52 inch if there is no value
        if(!fabric_width){
            fabric_width = 52;
        }else{
            // convert all unit to inch
            if(fabric_width_unit==='cm'){
                fabric_width = (fabric_width/2.54).toFixed(2);
            }else if(fabric_width_unit==='m'){
                fabric_width = (fabric_width*39.37).toFixed(2);
            }else if(fabric_width_unit==='yd'){
                fabric_width = (fabric_width*36);
            }
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
        if(!loop_parts){
            loop_parts = 1;
        }
        if(!loop_number){
            loop_number = 1;
        }
        if(!pocket_parts){
            pocket_parts = 1;
        }
        if(!pocket_number){
            pocket_number = 1;
        }

        // Get all value array
        let all_value = [
            outSeam_length,
            full_thigh,
            loop_length,
            loop_width,
            pocket_length,
            pocket_width
        ]
        //Get all unit array
        let all_unit = [
            outSeam_length_unit,
            full_thigh_unit,
            loop_length_unit,
            loop_width_unit,
            pocket_length_unit,
            pocket_width_unit
        ]
        //set all value zero if no value input
        all_value = all_value.map(x=>{
            if(!x){
                return x=0;
            }else{
                return x;
            }
        })

        //Convert all value to inch if input value is given cm
        all_value = all_unit.map((x,index)=>{
            if(x==='cm'){
                return all_value[index]/2.54;
            }else{
                return all_value[index];
            }
        })

        let common_factor = total_quantity/(fabric_width-1);
        common_factor = common_factor/36;

        let body_part = all_value[0]*all_value[1]*4;
        let belt_loop = all_value[2]*all_value[3]*loop_parts*loop_number;
        let pocket = all_value[4]*all_value[5]*pocket_parts*pocket_number;


        let result = (body_part+belt_loop+pocket)*common_factor;
        wastage = (result*wastage)/100;
        result = result + wastage;

        //result will be meter
        if(result_unit==='m'){
            result = result*0.9144;
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