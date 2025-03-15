// contact.js
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Récupération des données du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value || "Aucun sujet",
        message: document.getElementById('message').value
    };

    // Configuration du bouton pendant l'envoi
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Envoi en cours...';

    try {
        // Envoi des données vers Google Apps Script
        const response = await fetch('https://script.google.com/macros/s/AKfycbzB8RgM8...VOTRE_ID.../exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Gestion de la réponse
        if (response.ok) {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('contactForm').reset();
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
            }, 5000);
        }
    } catch (error) {
        alert(`Erreur d'envoi : ${error.message}`);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Envoyer';
    }
});