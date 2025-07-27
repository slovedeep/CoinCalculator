const coinWeights = {
    1: 2.3,
    2: 3.06,
    5: 3.92,
    10: 4.1,
    20: 5.74,
    50: 7.8,
    100: 7.5,
    200: 8.5
};

function Calculate() {
    const coinValue = parseInt(document.getElementById('selectCoin').value);
    const inputWeight = parseFloat(document.getElementById('inputWeight').value);

    if (isNaN(coinValue) || isNaN(inputWeight) || inputWeight < 0) {
        document.getElementById('resultContainer').textContent = 'Please enter a valid quantity.';
        return;
    }

    const selectedCoin = coinValue / 100;
    const coinWeight = coinWeights[coinValue];
    const totalCoins = inputWeight / coinWeight;
    const totalQuantity = totalCoins * selectedCoin;
    totalQuantity = formatDecimal(totalQuantity);

    document.getElementById('resultContainer').innerHTML = `
          <p>Selected coin: ${selectedCoin.toFixed(2)}€</p>
          <p>Weight per Coin: ${coinWeight} g</p>
          <p>Total Value: ${totalQuantity}€</p>
        `;
}

function CalculateTotalGrams() {
    const coinValue = parseInt(document.getElementById('selectCoin').value);
    const inputQuantity = parseFloat(document.getElementById('inputQuantity').value);

    if (isNaN(coinValue) || isNaN(inputQuantity) || inputQuantity < 0) {
        document.getElementById('resultContainer').textContent = 'Please enter a valid quantity.';
        return;
    }

    const selectedCoin = coinValue / 100;
    const coinWeight = coinWeights[coinValue];
    const totalCoins = inputQuantity / selectedCoin;
    const totalWeight = totalCoins * coinWeight;

    document.getElementById('resultContainer').innerHTML = `
          <p>Selected coin: ${selectedCoin.toFixed(2)} €</p>
          <p>Weight per Coin: ${coinWeight} g</p>
          <p>Total Weight: ${totalWeight} g</p>
        `;
}

function formatDecimal(num) {
    // Round to 5 decimal places, then convert to string
    let rounded = num.toFixed(5);

    // Remove trailing zeroes but keep at least 2 decimals
    let trimmed = rounded.replace(/(\.\d*?[1-9])0+$/g, '$1'); // trim extra zeros
    trimmed = trimmed.replace(/(\.\d)$/, '$10');              // ensure at least 2 decimals
    trimmed = trimmed.replace(/(\.\d)$/, '$10');              // in case only 1 decimal

    return trimmed;
}