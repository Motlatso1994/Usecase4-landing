// Countdown timer (24 hours from page load)
const end = new Date(Date.now() + 24 * 60 * 60 * 1000);

function updateCountdown() {
  const now = new Date();
  const diff = end - now;

  if (diff <= 0) {
    document.querySelector('.countdown').innerHTML = "<strong>⏰ Deal Expired</strong>";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Add to Cart button alert
document.querySelectorAll('.btn').forEach(btn => {
  if (btn.textContent === 'ADD TO CART') {
    btn.addEventListener('click', () => {
      alert('Added to cart! (Demo only)');
    });
  }
});
