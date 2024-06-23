// whatsapp.js

document.addEventListener('DOMContentLoaded', () => {
    // Seller's WhatsApp number
    const sellerNumber = '6285941395232'; // Replace with the seller's phone number

    // Message to send to the seller
    const message = "Hello, a new visitor has opened the website!";

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${sellerNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
});
