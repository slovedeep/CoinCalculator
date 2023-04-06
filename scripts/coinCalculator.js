var coinSelected;
var coinWeight;
var totalCoins;

function Calculate() {
    getHtmlValues();
    console.log('The coinWeight is ' + coinWeight);
    document.getElementById('total').innerHTML = '';
    total = 0;
    switch (coinSelected) {
        case 1:
            weight = 2.3;
            if (coinWeight >= weight){
                total = CalculateTotalValue(weight);
            }
            else{
                alert('You have to introduce the correct weight');
            }
            break;
        case 2:
            weight = 3;
            if (coinWeight >= weight){
                total = CalculateTotalValue(weight);
            }
            else{
                alert('You have to introduce the correct weight');
            }
            break;
        case 5:
            weight = 3.9;
            if (coinWeight >= weight){
                total = CalculateTotalValue(weight);
            }
            else{
                alert('You have to introduce the correct weight');
            }
            break;
        case 10:
            weight = 4.1;
            if (coinWeight >= weight){
                total = CalculateTotalValue(weight);
            }
            else{
                alert('You have to introduce the correct weight');
            }
            break;
        case 20:
            weight = 5.7;
            if (coinWeight >= weight){
                total = CalculateTotalValue(weight);
            }
            else{
                alert('You have to introduce the correct weight');
            }
            break;
        case 50:
            weight = 7.8;
            if (coinWeight >= weight){
                total = CalculateTotalValue(weight);
            }
            else{
                alert('You have to introduce the correct weight');
            }
            break;
        case 100:
            weight = 7.5;
            if (coinWeight >= weight){
                total = CalculateTotalValue(weight);
            }
            else{
                alert('You have to introduce the correct weight');
            }
            break;
        case 200:
            weight = 8.5;
            if (coinWeight >= weight){
                total = CalculateTotalValue(weight);
            }
            else{
                alert('You have to introduce the correct weight');
            }
            break;
        default:
            break;
    }
    if (total != 0) {

        document.getElementById('total').innerHTML = 'There are ' + getDecimalNum(totalCoins) + ' coins and the total value of the coin ' + coinSelected + '€ is ' + getDecimalNum(total) + ' €';
    }
}

function CalculateTotalValue(weight) {
    coinSelected = coinSelected / 100;
    totalCoins = coinWeight / weight;
    return ( totalCoins * coinSelected);
}

function getHtmlValues() {
    coinSelected = parseInt(document.getElementById('selectCoin').value) || 0;

    let coinW = document.getElementById('coinWeight').value;
    if (coinW.includes(',')) {
        coinW = coinW.replace(',', '.');
    }

    coinWeight = parseFloat(coinW) || 0;
}

function getDecimalNum(num) {
    num = num.toFixed(3).toString().replace(/(\.\d*?[1-9])0+$/g, "$1");
    if (num % 2 == 0) {
        num = Math.floor(num);
    }
    return (num)
}