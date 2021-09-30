var initialPrice = document.querySelector("#initialPrice");
var quantity = document.querySelector("#quanitity");
var currentPrice = document.querySelector("#currentPrice");
var showProfit = document.querySelector("#showProfit");
var result = document.querySelector("#result");
var error = document.querySelector("#error");


showProfit.addEventListener("click", function calculate() {

    if (initialPrice.value.length === 0 || quantity.value.length === 0 || currentPrice.value.length === 0 || Number(initialPrice.value) <= 0  || Number(quantity.value) <=0 || Number(currentPrice.value) < 0 ) {
        error.innerText = "Enter all the values with valid numbers";
        result.innerText = "";
    }
    
    else if (Number(initialPrice.value) > Number(currentPrice.value)) {
        var loss = (Number(initialPrice.value) - Number(currentPrice.value)) * Number(quantity.value);
        var lossPercentage = (loss / (Number(initialPrice.value)*Number(quantity.value))) * 100;
        error.innerText = `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
        result.innerText = "";
    } 
    else if (Number(currentPrice.value) > Number(initialPrice.value)) {
        var profit = (Number(currentPrice.value) - Number(initialPrice.value)) * Number(quantity.value);
        var profitPercentage = (profit / (Number(initialPrice.value)*Number(quantity.value))) * 100;
        error.innerText = "";
        result.innerText = `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    }
     else {
        error.innerText = "";
        result.innerText = `No pain no gain and no gain no pain`;
    }

})