const PRICE_SOAP = 15.658;
const PRICE_SHAMPOO = 123.965;
const PRICE_FACE_CREAM = 90.2345;
const SUM_PURCHASE = (PRICE_SOAP + PRICE_SHAMPOO + PRICE_FACE_CREAM);



//Використовуючи вбудований об'єкт Math – виведіть максимальне число

document.querySelector('.max').innerHTML += `<b>Максимальная цена</b>: ${Math.max(PRICE_SOAP, PRICE_SHAMPOO, PRICE_FACE_CREAM)} грн.`;
console.log(`Максимальная цена: ${Math.max(PRICE_SOAP, PRICE_SHAMPOO, PRICE_FACE_CREAM)} грн.`);



//Використовуючи вбудований об'єкт Math – виведіть мінімальне число

document.querySelector('.min').innerHTML += `<b>Минимальная цена</b>: ${Math.min(PRICE_SOAP, PRICE_SHAMPOO, PRICE_FACE_CREAM)} грн.`;
console.log(`Минимальная цена: ${Math.min(PRICE_SOAP, PRICE_SHAMPOO, PRICE_FACE_CREAM)} грн.`);



//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму


document.querySelector('.summ').innerHTML += `<b>Сумма покупки</b>: ${SUM_PURCHASE} грн.`;

console.log(`Сумма покупки: ${SUM_PURCHASE} грн.`);



//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.


document.querySelector('.summ-floor').innerHTML += `<b>Целая часть суммы покупки</b>: ${Math.floor(PRICE_SOAP)+Math.floor(PRICE_SHAMPOO)+Math.floor(PRICE_FACE_CREAM)} грн.`;

console.log(`Целая часть суммы покупки: ${Math.floor(PRICE_SOAP)+Math.floor(PRICE_SHAMPOO)+Math.floor(PRICE_FACE_CREAM)} грн.`);




//Виведіть суму товарів округлену до сотень.


document.querySelector('.round').innerHTML = `<b>Округление суммы покупки до сотен</b>: ${Math.ceil(SUM_PURCHASE/100)*100} грн.`;

console.log(`Округление суммы покупки до сотен: ${Math.ceil(SUM_PURCHASE/100)*100} грн.`);




//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?

const PAIRED_PRICE_NUMBER = function(){
    if(Math.floor(SUM_PURCHASE) %2 === 0){
    return true;
    }
    else{
        return false;
    }
}

document.querySelector('.paired-number').innerHTML = `<b>Сумма всех товаров - парное число</b>: ${PAIRED_PRICE_NUMBER()}`;

console.log(`Сумма всех товаров - парное число: ${PAIRED_PRICE_NUMBER()} грн.`);




//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const PAYMENT = 500;

    document.querySelector('.surrender').innerHTML = `<b>Сдача</b>: ${((PAYMENT) - (SUM_PURCHASE)).toFixed(2)} грн.`


console.log(`Сдача: ${((PAYMENT) - (SUM_PURCHASE)).toFixed(4)} грн.`);



//Виведіть середнє значення цін, округлене до другого знаку після коми


document.querySelector('.average').innerHTML = `<b>Среднее значение цены товара</b>: ${(SUM_PURCHASE/3).toFixed(2)} грн.`;

console.log(`Среднее значение цены товара: ${(SUM_PURCHASE/3).toFixed(2)} грн.`);




//Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.



const RANDOM_DISCOUNT = Math.random()*0.2;

document.querySelector('.random-discount').innerHTML = `<b>Сумма к оплате со скидкой</b>: ${(SUM_PURCHASE*RANDOM_DISCOUNT+SUM_PURCHASE).toFixed(2)} грн.`;

console.log(`Сумма к оплате со скидкой: ${(SUM_PURCHASE*RANDOM_DISCOUNT+SUM_PURCHASE).toFixed(2)} грн.`);




//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?


document.querySelector('.net-profit').innerHTML = `<b>Чистая прибыль составляет</b>: ${(SUM_PURCHASE/2-SUM_PURCHASE*RANDOM_DISCOUNT).toFixed(2)} грн.`;

console.log(`Чистая прибыль составляет: ${(SUM_PURCHASE/2-SUM_PURCHASE*RANDOM_DISCOUNT).toFixed(2)} грн.`);
