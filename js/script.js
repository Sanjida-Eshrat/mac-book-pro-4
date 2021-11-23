// choose memory 
function memory(size){
    if(size==8){
        document.getElementById('extra-memory-cost').innerText= 0;
    }
    else if(size==16){
        document.getElementById('extra-memory-cost').innerText= 180;
    }
}

// choose storage 
function storage(size){
    if(size==256){
        document.getElementById('extra-storage-cost').innerText= 0;
    }
    else if(size==512){
        document.getElementById('extra-storage-cost').innerText= 100;
    }
    else if(size==1){
        document.getElementById('extra-storage-cost').innerText= 180;
    }
}

// choose delivery option 
function delivery(cost){
    if(cost==0){
        document.getElementById('delivery-cost').innerText= 0;
    }
    else if(cost==1){
        document.getElementById('delivery-cost').innerText= 20;
    }
}

// calculate total price
function totalPrice(){
    // get best price
    const bestPriceText = document.getElementById('best-price').innerText;
    const bestPrice = parseInt(bestPriceText);
    // get memory cost
    const memoryCostText = document.getElementById('extra-memory-cost').innerText;
    const memoryCost = parseInt(memoryCostText);
    // get storage cost
    const storageCostText = document.getElementById('extra-storage-cost').innerText;
    const storageCost = parseInt(storageCostText);
    // get delivery cost
    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(deliveryCostText);
    // total cost
    const totalCost = bestPrice + memoryCost + storageCost + deliveryCost;
    // set total cost
    document.getElementById('total-cost').innerText = totalCost;
    document.getElementById('final-total-cost').innerText = totalCost;

    return totalCost;
}

// promo-code
function promo(code){
    const inputCode = 'stevekaku';
    if(code== inputCode){
        const total = totalPrice();
        const discount = parseFloat(total)*.2;
        const finalPrice = total-discount;
        document.getElementById('final-total-cost').innerText = finalPrice;
    }
}

// for 8GB memory 
document.getElementById('8gb-memory').addEventListener('click',
function(){
    memory(8);
    totalPrice();
});
// for 16GB memory
document.getElementById('16gb-memory').addEventListener('click',
function(){
    memory(16);
    totalPrice();
});
// for 256GB storage
document.getElementById('256gb-SSD').addEventListener('click',
function(){
    storage(256);
    totalPrice();
});
// for 256GB storage
document.getElementById('512gb-SSD').addEventListener('click',
function(){
    storage(512);
    totalPrice();
});
// for 256GB storage
document.getElementById('1tb-SSD').addEventListener('click',
function(){
    storage(1);
    totalPrice();
});

// for free delivery
document.getElementById('free').addEventListener('click',
function(){
    delivery(0);
    totalPrice();
});
// for delivery
document.getElementById('charge').addEventListener('click',
function(){
    delivery(1);
    totalPrice();
});

// promo code input
document.getElementById('promo-button').addEventListener('click',
 function(){
    const input = document.getElementById('promo-code').value;
    promo(input);
    //clear input field
    document.getElementById('promo-code').value = '';
});

