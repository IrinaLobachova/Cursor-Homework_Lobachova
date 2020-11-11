let priceSoap = 15.658;
let priceShampoo = 123.965;
let priceFaceCream = 90.2345;
let sumPurchase = (priceSoap + priceShampoo + priceFaceCream);



//Використовуючи вбудований об'єкт Math – виведіть максимальне число

document.querySelector('.max').innerHTML += `<b>Максимальная цена</b>: ${Math.max(priceSoap, priceShampoo, priceFaceCream)} грн.`;
console.log(`Максимальная цена: ${Math.max(priceSoap, priceShampoo, priceFaceCream)} грн.`);



//Використовуючи вбудований об'єкт Math – виведіть мінімальне число

document.querySelector('.min').innerHTML += `<b>Минимальная цена</b>: ${Math.min(priceSoap, priceShampoo, priceFaceCream)} грн.`;
console.log(`Минимальная цена: ${Math.min(priceSoap, priceShampoo, priceFaceCream)} грн.`);



//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму


document.querySelector('.summ').innerHTML += `<b>Сумма покупки</b>: ${sumPurchase} грн.`;

console.log(`Сумма покупки: ${sumPurchase} грн.`);



//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.


document.querySelector('.summ-floor').innerHTML += `<b>Целая часть суммы покупки</b>: ${Math.floor(priceSoap)+Math.floor(priceShampoo)+Math.floor(priceFaceCream)} грн.`;

console.log(`Целая часть суммы покупки: ${Math.floor(priceSoap)+Math.floor(priceShampoo)+Math.floor(priceFaceCream)} грн.`);




//Виведіть суму товарів округлену до сотень.


document.querySelector('.round').innerHTML = `<b>Округление суммы покупки до сотен</b>: ${Math.round(sumPurchase)} грн.`;

console.log(`Округление суммы покупки до сотен: ${Math.round(sumPurchase)} грн.`);




//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?

let pairedPriceNumber = function(){
    if(Math.floor(sumPurchase)%2==0){
    return true;
    }
    else{
        return false;
    }
}

document.querySelector('.paired-number').innerHTML = `<b>Сумма всех товаров - парное число</b>: ${pairedPriceNumber()}`;

console.log(`Сумма всех товаров - парное число: ${pairedPriceNumber()} грн.`);




//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.

if(500){
    document.querySelector('.surrender').innerHTML = `<b>Сдача</b>: ${(500 - (sumPurchase)).toFixed(4)} грн.`
};

console.log(`Сдача: ${(500 - (sumPurchase)).toFixed(4)} грн.`);



//Виведіть середнє значення цін, округлене до другого знаку після коми


document.querySelector('.average').innerHTML = `<b>Среднее значение цены товара</b>: ${(sumPurchase/3).toFixed(2)} грн.`;

console.log(`Среднее значение цены товара: ${(sumPurchase/3).toFixed(2)} грн.`);




//Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.



let randomDiscount = Math.random()*0.2;

document.querySelector('.random-discount').innerHTML = `<b>Сумма к оплате со скидкой</b>: ${(sumPurchase*randomDiscount+sumPurchase).toFixed(2)} грн.`;

console.log(`Сумма к оплате со скидкой: ${(sumPurchase*randomDiscount+sumPurchase).toFixed(2)} грн.`);




//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?


document.querySelector('.net-profit').innerHTML = `<b>Чистая прибыль составляет</b>: ${(sumPurchase/2-sumPurchase*randomDiscount).toFixed(2)} грн.`;

console.log(`Чистая прибыль составляет: ${(sumPurchase/2-sumPurchase*randomDiscount).toFixed(2)} грн.`);
