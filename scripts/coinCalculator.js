var coinSelected;
var coinWeight;
var totalCoins;

function Calculate() {
    getHtmlValues();
    console.log('The coinWeight is ' + coinWeight);
    document.getElementById('total').innerHTML = '';
    total = 0;

    weight = getCoinWeight(coinSelected);
    if (checkWeight(weight)) {
        total = CalculateTotalValue(weight);
    }

    if (total != 0) {
        document.getElementById('total').innerHTML = 'There are ' + getDecimalNum(totalCoins) + ' coins and the total value of the coin ' + coinSelected + '€ is ' + getDecimalNum(total) + ' €';
    }
}

function getHtmlValues() {
    coinSelected = parseInt(document.getElementById('selectCoin').value) || 0;

    let coinW = document.getElementById('coinWeight').value;
    if (coinW.includes(',')) {
        coinW = coinW.replace(',', '.');
    }

    coinWeight = parseFloat(coinW) || 0;
}

function getCoinWeight(coin) {
    
    switch (coin) {
        case 1:
            return 2.3;
            break;
        case 2:
            return 3;

            break;
        case 5:
            return 3.9;

            break;
        case 10:
            return 4.1;

            break;
        case 20:
            return 5.7;

            break;
        case 50:
            return 7.8;

            break;
        case 100:
            return 7.5;

            break;
        case 200:
            return 8.5;
            break;
        default:
            break;
    }
}

function checkWeight(weight) {
    if (coinWeight < weight) {
        alert('You have to introduce the correct weight \n ਤੁਸੀਂ ਸਹੀ ਵਜਨ ਲਿਖੋ।');
        return false;
    }
    return true;
}

function CalculateTotalValue(weight) {
    coinSelected = coinSelected / 100;
    totalCoins = coinWeight / weight;
    return (totalCoins * coinSelected);
}

function getDecimalNum(num) {
    num = num.toFixed(3).toString().replace(/(\.\d*?[1-9])0+$/g, "$1");
    if (num % 2 == 0) {
        num = Math.floor(num);
    }
    return (num)
}

function UpdatePlaceHolder(selectedCoin) {
    getHtmlValues;
    const input2 = document.getElementById("coinWeight");
    input2.placeholder = getCoinWeight(selectedCoin);
}