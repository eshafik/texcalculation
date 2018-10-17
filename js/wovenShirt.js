class WovenShirtUI{
    wshirtConsumption(){
        //collect all input value
        //Body Part
        let body_length = parseFloat(document.getElementById('input-ws-bd').value);
        let body_length_al = parseFloat(document.getElementById('input-ws-bd-al').value);
        let e = document.getElementById('selection-in-ws-bd');
        let body_length_unit = e.options[e.selectedIndex].value;
        let chest = parseFloat(document.getElementById('input-ws-ch').value);
        let chest_al = parseFloat(document.getElementById('input-ws-ch-al').value);
        e = document.getElementById('selection-in-ws-ch');
        let chest_unit = e.options[e.selectedIndex].value;
        //Sleeve
        let sleeve_length = parseFloat(document.getElementById('input-ws-sl').value);
        let sleeve_length_al = parseFloat(document.getElementById('input-ws-sl-al').value);
        e = document.getElementById('selection-in-ws-sl');
        let sleeve_length_unit = e.options[e.selectedIndex].value;
        let armhole = parseFloat(document.getElementById('input-ws-ar').value);
        let armhole_al = parseFloat(document.getElementById('input-ws-ar-al').value);
        e = document.getElementById('selection-in-ws-ar');
        let armhole_unit = e.options[e.selectedIndex].value;
        //Collar
        let collar_length = parseFloat(document.getElementById('input-ws-cl-l').value);
        let collar_length_al = parseFloat(document.getElementById('input-ws-cl-l-al').value);
        e = document.getElementById('selection-in-ws-cl-l');
        let collar_length_unit = e.options[e.selectedIndex].value;
        let collar_width = parseFloat(document.getElementById('input-ws-cl-w').value);
        let collar_width_al = parseFloat(document.getElementById('input-ws-cl-w-al').value);
        e = document.getElementById('selection-in-ws-cl-w');
        let collar_width_unit = e.options[e.selectedIndex].value;
        //Collar Band
        let collar_b_length = parseFloat(document.getElementById('input-ws-clb-l').value);
        let collar_b_length_al = parseFloat(document.getElementById('input-ws-clb-l-al').value);
        e = document.getElementById('selection-in-ws-clb-l');
        let collar_b_length_unit = e.options[e.selectedIndex].value;
        let collar_b_width = parseFloat(document.getElementById('input-ws-clb-w').value);
        let collar_b_width_al = parseFloat(document.getElementById('input-ws-clb-w-al').value);
        e = document.getElementById('selection-in-ws-clb-w');
        let collar_b_width_unit = e.options[e.selectedIndex].value;
        //Cuff
        let cuff_length = parseFloat(document.getElementById('input-ws-cf-l').value);
        let cuff_length_al = parseFloat(document.getElementById('input-ws-cf-l-al').value);
        e = document.getElementById('selection-in-ws-cf-l');
        let cuff_length_unit = e.options[e.selectedIndex].value;
        let cuff_width = parseFloat(document.getElementById('input-ws-cf-w').value);
        let cuff_width_al = parseFloat(document.getElementById('input-ws-cf-w-al').value);
        e = document.getElementById('selection-in-ws-cf-w');
        let cuff_width_unit = e.options[e.selectedIndex].value;
        //Pocket
        let pocket_length = parseFloat(document.getElementById('input-ws-pk-l').value);
        let pocket_length_al = parseFloat(document.getElementById('input-ws-pk-l-al').value);
        e = document.getElementById('selection-in-ws-pk-l');
        let pocket_length_unit = e.options[e.selectedIndex].value;
        let pocket_width = parseFloat(document.getElementById('input-ws-pk-w').value);
        let pocket_width_al = parseFloat(document.getElementById('input-ws-pk-w-al').value);
        e = document.getElementById('selection-in-ws-pk-w');
        let pocket_width_unit = e.options[e.selectedIndex].value;
        //Yoke
        let yoke_length = parseFloat(document.getElementById('input-ws-yo-l').value);
        let yoke_length_al = parseFloat(document.getElementById('input-ws-yo-l-al').value);
        e = document.getElementById('selection-in-ws-yo-l');
        let yoke_length_unit = e.options[e.selectedIndex].value;
        let yoke_width = parseFloat(document.getElementById('input-ws-yo-w').value);
        let yoke_width_al = parseFloat(document.getElementById('input-ws-yo-w-al').value);
        e = document.getElementById('selection-in-ws-yo-w');
        let yoke_width_unit = e.options[e.selectedIndex].value;
        //Wastage
        let wastage = document.getElementById('input-ws-w').value;
        //Fabric width
        let fabric_width = parseFloat(document.getElementById('input-ws-fw').value);
        e = document.getElementById('selection-in-ws-fw');
        let fabric_width_unit = e.options[e.selectedIndex].value;
        //Total Quantity
        let total_quantity = parseFloat(document.getElementById('input-ws-qt').value);
        e = document.getElementById('selection-in-ws-qt');
        let total_quantity_unit = e.options[e.selectedIndex].value;
        //Expected result unit
        e = document.getElementById('selection-out-ws');
        const exp_result_unit = e.options[e.selectedIndex].value;



        e = document.getElementById('selection-out-ws');
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


        // Array of the all the length value of the parts
        let all_value = [body_length,
                        chest,
                        sleeve_length,
                        armhole,
                        collar_length,
                        collar_width,
                        collar_b_length,
                        collar_b_width,
                        cuff_length,
                        cuff_width,
                        pocket_length,
                        pocket_width,
                        yoke_length,
                        yoke_width,
                        
                    ]
        // Array of all the parts allowance
        let all_value_allowance = [body_length_al,
                        chest_al,
                        sleeve_length_al,
                        armhole_al,
                        collar_length_al,
                        collar_width_al,
                        collar_b_length_al,
                        collar_b_width_al,
                        cuff_length_al,
                        cuff_width_al,
                        pocket_length_al,
                        pocket_width_al,
                        yoke_length_al,
                        yoke_width_al,
            
        ]
        // Array of all length unit
        let all_value_unit = [body_length_unit,
                        chest_unit,
                        sleeve_length_unit,
                        armhole_unit,
                        collar_length_unit,
                        collar_width_unit,
                        collar_b_length_unit,
                        collar_b_width_unit,
                        cuff_length_unit,
                        cuff_width_unit,
                        pocket_length_unit,
                        pocket_width_unit,
                        yoke_length_unit,
                        yoke_width_unit,
            
        ]
        // check all value, if NaN then it will set the value zero
        all_value = all_value.map(x=>{
            if(!x){
                return x=0;
            }else{
                return x;
            }
        })
        // check all value allownace, if NaN then it will set the value zero
        all_value_allowance = all_value_allowance.map(x=>{
            if(!x){
                return x=0;
            }else{
                return x;
            }
        })
        // Check the length unit of the every part and if inch, then convert to centemeter
        all_value = all_value_unit.map((x,index)=>{
            if(x==='in'){
                return all_value[index]*2.54;
            }else{
                return all_value[index];
            }
        })
        //get all value with allowance
        let actual_value = all_value.map((x,index)=>{
            return (x+all_value_allowance[index]);
        })

        console.log(all_value);
        console.log(all_value_allowance);
        console.log(actual_value);

        let common_factor = (2*total_quantity/(fabric_width*36*2.54));
        console.log("common factor: "+common_factor);
        let result=0;
        let temp1=0;
        let temp2 =1;
        for(let i=0;i<actual_value.length;i++){
            temp1++;
            temp2 = temp2 * actual_value[i];
            if(i===2 || i===8){temp2=temp2*2;} // for sleeve and cuff
            if(temp1===2){
                result = result + temp2;
                temp2 = 1;
                temp1 = 0;
            }
        }
        
        result = (common_factor* result);
        wastage = (result*wastage)/100;
        result = result + wastage;

        if(result_unit==='m'){
            result = result*0.9144;
        }
        
        
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