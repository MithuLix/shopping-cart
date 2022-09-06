function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + "-input");
    const productCount = parseInt(productInput.value);

    if(isIncrease == false && productCount > 0){productNewCount = productCount - 1};
    if(isIncrease == true){productNewCount = productCount + 1};
    productInput.value = productNewCount;

    let productTotal = 0;
    if(product == "phone"){ productTotal = productNewCount * 519};
    if(product == "case"){ productTotal = productNewCount * 59};
    document.getElementById(product + "-total").innerText = "$"+ productTotal;
    calculateTotal();
} 


// calculate area
function calculateTotal(){
    const phoneInput = document.getElementById('phone-input');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById("case-input");
    const caseCount = parseInt(caseInput.value);

    const subTotalPrice =phoneCount * 519 + caseCount * 59;
    document.getElementById("subTotalPrice").innerText = "$" + subTotalPrice;

    const tax = Math.round(subTotalPrice * 0.1);
    document.getElementById("tax-amount").innerText = "$" + tax;

    const totalPrice = subTotalPrice + tax;
    document.getElementById("totalPrice").innerText = "$" + totalPrice;
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-input');
    const productCount = parseInt(productInput.value);
    return productCount;
}
