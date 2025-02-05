document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const formData = {
      Name: document.getElementById('Name').value,
      Regno: document.getElementById('Regno').value,
      email: document.getElementById('email').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      Program: document.getElementById('Program').value,
      Department: document.getElementById('Department').value,
      Choice1: document.getElementById('Choice-1').value,
      Choice2: document.getElementById('Choice-2').value,
      linkedin: document.getElementById('linkedin').value,
      github: document.getElementById('Github').value,
  };

  fetch('https://registration-website-mlsa-task.onrender.com/register', { // ✅ Corrected URL
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => alert(data.message))
  .catch(error => console.error('Fetch Error:', error)); // ✅ Debugging
});
