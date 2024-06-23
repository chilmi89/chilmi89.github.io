//toogle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// toggle class active search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// toggle class activ shopping cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};


// klik diluar side bar untuk menghilangkan menu

const hamburger = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
});

// modal box

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');


itemDetailButtons.forEach((btn) =>{
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
})


// klik tombol close

document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

// diluar kolom modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}
//  button
// // Menangani klik tombol "Beli Sekarang"
// document.querySelector('.cta').addEventListener('click', function(event) {
//     event.preventDefault(); // Menghentikan perilaku default dari tombol tautan

//     // Mendapatkan detail item yang dipilih
//     var itemName = "Nama Item"; // Ganti dengan nama item yang sesuai
//     var itemPrice = 15000; // Ganti dengan harga item yang sesuai

//     // Simpan detail transaksi dalam objek atau struktur data yang sesuai
//     var transaction = {
//         itemName: itemName,
//         itemPrice: itemPrice,
//         quantity: 1, // Jika perlu, Anda bisa menambahkan input jumlah item dalam formulir
//         // Tambahkan properti lain jika diperlukan, seperti alamat pengiriman, metode pembayaran, dll.
//     };

//     // Lakukan sesuatu dengan detail transaksi, seperti menambahkannya ke keranjang belanja
//     addToCart(transaction);

//     // Notifikasi atau umpan balik kepada pengguna
//     alert('Item berhasil ditambahkan ke keranjang belanja!');
// });

// // Fungsi untuk menambahkan transaksi ke keranjang belanja (Anda bisa mengganti dengan logika sesuai dengan kebutuhan aplikasi Anda)
// function addToCart(transaction) {
//     // Lakukan sesuatu dengan detail transaksi, misalnya simpan dalam variabel, kirim ke server, dll.
//     console.log('Transaksi:', transaction);
// }
