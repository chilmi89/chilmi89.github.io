// contoh.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to create a card based on the template
    function createCard(title, description, price) {
        // Clone the template content
        let template = document.getElementById('card-template');
        let clone = document.importNode(template.content, true);

        // Update the card content with provided data
        let card = clone.querySelector('.card');
        let titleElement = clone.querySelector('.card-title');
        let descriptionElement = clone.querySelector('.card-text');
        let priceElement = clone.querySelectorAll('.card-text')[1]; // Select the second .card-text element

        titleElement.textContent = title;
        descriptionElement.textContent = description;
        priceElement.textContent = `Harga: Rp ${price},-`;

        // Append the card to the container
        let cardContainer = document.getElementById('card-container');
        cardContainer.appendChild(clone);

        // Optionally, attach event listeners or additional functionality here
    }

    // Example data for cards
    let cardData = [
        { title: 'Mie GakCuan 1', description: 'Deskripsi Mie GakCuan 1', price: 'XX.XXX' },
        { title: 'Mie GakCuan 2', description: 'Deskripsi Mie GakCuan 2', price: 'YY.YYY' },
        // Add more card data as needed
    ];

    // Loop through cardData and create cards dynamically
    cardData.forEach(item => {
        createCard(item.title, item.description, item.price);
    });
});
