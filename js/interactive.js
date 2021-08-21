

// Every-Single-Price-Set-Function --
function changePrice(tagetId , Price){
    const costId = document.getElementById(tagetId);
    costId.innerText = Price;

    totalPricing()
}

// Total-Calculate --
function totalPricing(){
    const pcCostText = document.getElementById('pc-cost').innerText;
    const pcCost = parseInt(pcCostText);

    const memoryCostText = document.getElementById('memory-cost').innerText;
    const memoryCost = parseInt(memoryCostText);
    
    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCost = parseInt(storageCostText);

    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(deliveryCostText);

    const totalPriceId = document.getElementById('total-cost');
    const grandTotalId = document.getElementById('grand-total');
    const totalPrice = pcCost + memoryCost + storageCost + deliveryCost;  

    totalPriceId.innerText = totalPrice;
    grandTotalId.innerText = totalPrice;
}

// Promo-JS ---
function promo(){
    totalPricing();
    const inputValue = document.getElementById('promo-Input').value;
    const promoCode = 'stevekaku';
    const grandTotalId = document.getElementById('grand-total');
    const grandTotal = parseInt(grandTotalId.innerText);
    if(inputValue == promoCode){
        grandTotalId.innerText = grandTotal * (100 - 20) /100;
    }
    else if(inputValue != promoCode){
        alert('Please enter a  valid Promo Code');
    }
}

// Events ----

// -- Memory-Event's
document.getElementById('memory-first-option').addEventListener('click',function(){
    changePrice('memory-cost',0);
    
    
})

document.getElementById('memory-second-option').addEventListener('click',function(){
    changePrice('memory-cost', 180);


})


// -- Storage-Event's
document.getElementById('storage-first-option').addEventListener('click',function(){
    changePrice('storage-cost',0);


})

document.getElementById('storage-second-option').addEventListener('click',function(){
    changePrice('storage-cost', 100);


})

document.getElementById('storage-third-option').addEventListener('click',function(){
    changePrice('storage-cost', 180);


})


// -- Delivery-Event's
document.getElementById('delivery-first-option').addEventListener('click',function(){
    changePrice('delivery-cost',0);


})

document.getElementById('delivery-second-option').addEventListener('click',function(){
    changePrice('delivery-cost', 20);


})

// -- Promo-Apply-Event 

document.getElementById('promo-apply').addEventListener('click',function(){
    promo();
    const inputValue = document.getElementById('promo-Input');
    inputValue.value = '';
})
