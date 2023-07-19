const inputDate = document.querySelector("#input-date");
const inputNumber = document.querySelector("#input-number");
const buttonCheck = document.querySelector("#button-check");
const resultArea=document.querySelector("#resultArea");



function clickHandler() {
    let stringDate=inputDate.value;
    let sum=0;
    for(const char in stringDate )
    {
        
        if(stringDate[char]==="-")
        {
            continue;
        }
        else{
            sum+=Number(stringDate[char]);
        }
        
    }
    if(sum%inputNumber.value===0)
    {
        resultArea.innerHTML= `${inputNumber.value}is a lucky number!!🥳 🥳 🥳`
    }
    else{
        resultArea.innerHTML= inputNumber.value +"  is a not that lucky 😕"
    }
   
}

buttonCheck.addEventListener("click", clickHandler);
