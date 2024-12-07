



let opt_from = document.getElementById("selc_from");
let opt_to = document.getElementById("selc_to");
let flag_img_from = document.getElementById("img_from");
let flag_img_to = document.getElementById("img_to");
let final_ans = document.getElementById("final_ans");

let convert_bt = document.getElementById("convert_bt");







var code_1;
var code_2;
const curr_value= async (code_1,code_2)=>{
    let amt_value  = document.getElementById("amt_p").value.trim();

    let amt_num = Number(amt_value);
    
    const URL =`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${code_1.toLowerCase()}.json`
    let response = await fetch(URL);
    let data = await response.json();
    var rate = data[code_1.toLowerCase()][code_2.toLowerCase()];
    console.log("amt_value:", amt_value);
    console.log("amt_num:", amt_num);
    console.log(rate);

    final_ans.innerText = `${amt_num} ${code_1} is equal to ${amt_num*rate} ${code_2}`;

    



};

convert_bt.addEventListener("click",()=>{
    curr_value(code_1.toLowerCase(),code_2.toLowerCase());

})


//function for change from section flag image
opt_from.addEventListener("click", () => {
    
    for(code in countryList){
        var opt_value = opt_from.value;
        
        const new_opt_from = document.createElement("option");

        new_opt_from.innerText = code;
        new_opt_from.value = code;

        opt_from.appendChild(new_opt_from)

    }

    


    
    
    
    
    code_1 = opt_from.value;
   
    

    


    flag_img_from.src =`https://flagsapi.com/${countryList[opt_value]}/flat/64.png`;

});



// function for changing To section flag image
opt_to.addEventListener("click", () => {
    
    for(code in countryList){
        var opt_value = opt_to.value;
        
        const new_opt_from = document.createElement("option");

        new_opt_from.innerText = code;
        new_opt_from.value = code;

        opt_to.appendChild(new_opt_from)

    }

    code_2 = opt_to.value;
    
    
    
    

    
    

    flag_img_to.src =`https://flagsapi.com/${countryList[opt_value]}/flat/64.png`;

    
});














