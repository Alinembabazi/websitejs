// Simple interactions for the clone: subscribe form feedback
const subscribeForm = document.getElementById('subscribeForm');
const subscribeMsg = document.getElementById('subscribeMsg');
if (subscribeForm && subscribeMsg) {
	subscribeForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const email = document.getElementById('email').value.trim();
		if (!email || !email.includes('@')) {
			subscribeMsg.textContent = 'Please enter a valid email.';
			subscribeMsg.classList.remove('hidden');
			subscribeMsg.classList.remove('text-green-600');
			subscribeMsg.classList.add('text-red-600');
			return;
		}
		subscribeMsg.textContent = `Thanks — ${email} added!`;
		subscribeMsg.classList.remove('hidden');
		subscribeMsg.classList.remove('text-red-600');
		subscribeMsg.classList.add('text-green-600');
		subscribeForm.reset();
	});
}

// If the user dropped an `assets/header.jpg`, we can display it in a lightbox on click
const headerImg = document.querySelector('img[alt="Header screenshot"]');
if (headerImg) {
	headerImg.style.cursor = 'pointer';
	headerImg.addEventListener('click', () => {
		const modal = document.createElement('div');
		modal.style.position = 'fixed';
		modal.style.inset = '0';
		modal.style.background = 'rgba(0,0,0,0.8)';
		modal.style.display = 'flex';
		modal.style.alignItems = 'center';
		modal.style.justifyContent = 'center';
		modal.style.zIndex = '9999';
		const img = document.createElement('img');
		img.src = headerImg.src;
		img.style.maxWidth = '90%';
		img.style.maxHeight = '90%';
		img.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
		modal.appendChild(img);
		modal.addEventListener('click', () => document.body.removeChild(modal));
		document.body.appendChild(modal);
	});
}


   window.onload = function() {
      const text = document.getElementById("heroText");
      text.classList.remove("opacity-0", "translate-y-10");
    };
