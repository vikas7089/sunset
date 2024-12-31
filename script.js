const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

// Response for YES button
yesButton.addEventListener('click', () => {
  response.textContent = 'Goodbye 🫂';
  response.style.color = '#4caf50';
});

// Response for NO button
noButton.addEventListener('click', () => {
  response.textContent = 'I let you go. Always be happy.';
  response.style.color = '#f44336';
});
