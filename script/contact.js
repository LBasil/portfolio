const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Validation simple
  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Veuillez remplir tous les champs s\'il vous plait.');
    contactForm.style.backgroundColor = '#F9627D';
    function blinkBackgroundColor(color) {
      let intervalId = setInterval(() => {
        contactForm.style.backgroundColor = color === '#F9627D' ? '#fbe4b7' : '#F9627D';
        color = color === '#F9627D' ? '#fbe4b7' : '#F9627D';
      }, 900);

      setTimeout(() => {
        clearInterval(intervalId);
        contactForm.style.backgroundColor = '#fbe4b7'; 
      }, 2000);
    }

    blinkBackgroundColor('#F9627D');
      return;
    }

  // Afficher un message de confirmation
  alert('Le formulaire sera prochainement fonctionnel !');
  contactForm.style.backgroundColor = '#ABFC7A';
  setTimeout(() => {
    contactForm.style.backgroundColor = '#fbe4b7'; 
  }, 1000);

  // Vider le formulaire
  contactForm.reset();
});
