let litres = Number(prompt("Enter the number of litres used:"));
let indigent = confirm("Are you indigent? Click OK for Yes, Cancel for No.");
let kl = litres / 1000;
let total = 0;

if (indigent===true) {
    if (kl <= 10.5) {
        total = 0;
    }
    else if (kl <= 35) {
        total = (kl - 10.5) * 31.77;
    
    }
    else { 
        total = (24.5 * 31.77) + (kl - 35) * 69.76;
    }
}
else {
    if(kl<= 6) {
        total = kl * 15.73;
    }
    else if(kl <= 10.5) {
        total =(6*15.73) + ((kl - 6) * 22.38);
    }
    else if(kl <= 35) {
        total = (6 * 15.73) + (4.5 * 22.38) + ((kl - 10.5) * 31.77);
    }   
    else {
        total = (6 * 15.73) + (4.5 * 22.38) + (24.5 * 31.77) + ((kl - 35) * 69.76);
    }   
}
alert("The total water tariff is: R" + total.toFixed(2));