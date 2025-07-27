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
    let totalQuantity = totalCoins * selectedCoin;
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
    const totalWeight = (totalCoins * coinWeight).toFixed(2);

    document.getElementById('resultContainer').innerHTML = `
          <p>Selected coin: ${selectedCoin.toFixed(2)} €</p>
          <p>Weight per Coin: ${coinWeight} g</p>
          <p>Total Weight: ${totalWeight} g</p>
        `;
}

function formatDecimal(num) {
  // Round to 5 decimals first
  let rounded = num.toFixed(5);

  // Trim trailing zeroes, keep at least 2 decimals
  rounded = rounded.replace(/(\.\d{2,}?)(0+)$/, '$1');   // Remove extra zeros beyond 2
  rounded = rounded.replace(/(\.\d)$/, '$10');           // Pad to 2 decimals if only 1
  rounded = rounded.replace(/(\.)(\d)$/, '$1$20');       // Extra guard

  return rounded;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("CalculateButton").click();
    }
});