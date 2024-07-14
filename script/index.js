const breakpoint = 768;

function isMobile() {
  return window.innerWidth <= breakpoint && window.innerHeight <= breakpoint;
}

const popup = document.createElement('div');
popup.id = 'mobile-popup';

const message = document.createElement('p');
message.id = 'message'
message.textContent = 'Ce portfolio n\'est pas encore compatible avec les mobiles. Merci de revenir sur un ordinateur pour une meilleure expérience.';

const closeButton = document.createElement('button');
closeButton.textContent = 'Fermer';
closeButton.id = 'close-button'

closeButton.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the popup when the button is clicked
});

popup.appendChild(message);
message.appendChild(closeButton);

if (isMobile()) {
  document.body.appendChild(popup); // Add popup to the body
}


