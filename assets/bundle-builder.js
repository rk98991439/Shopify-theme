document.querySelectorAll('.add-to-bundle').forEach(button => {
  button.addEventListener('click', () => {
    let countEl = document.getElementById('count');
    let currentCount = parseInt(countEl.innerText);
    
    // Increment by 4 (since they are 4-packs)
    if (currentCount < 12) {
      currentCount += 4;
      countEl.innerText = currentCount;
      
      // Update UI logic here...
    }
    
    if (currentCount === 12) {
      document.getElementById('add-to-cart-btn').style.background = "#000";
      document.getElementById('add-to-cart-btn').innerText = "ADD TO CART";
      document.getElementById('add-to-cart-btn').disabled = false;
    }
  });
});