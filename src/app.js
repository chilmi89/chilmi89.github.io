document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    category: "mie",
    items: [
      {
        id: 1,
        name: "mie gak cuan",
        img: "mi gk cuan.png",
        price: 30000,
        type: "mie",
      },
      {
        id: 2,
        name: "mie mikirin kmu",
        img: "mi mikirin kmu.png",
        price: 30000,
        type: "mie",
      },
      {
        id: 3,
        name: "mie kepastian",
        img: "mi nta kepastian.png",
        price: 30000,
        type: "mie",
      },
      {
        id: 4,
        name: "mie nyayangi kamu",
        img: "mi nyayangi kamu.png",
        price: 30000,
        type: "mie",
      },
      {
        id: 5,
        name: "mie nyaksikanmu",
        img: "mi nyaksikanmu.png",
        price: 30000,
        type: "mie",
      },
      {
        id: 6,
        name: "seblak buaya",
        img: "seblak buaya.png",
        price: 30000,
        type: "seblak",
      },
      {
        id: 8,
        name: "es endel",
        img: "es endel.png",
        price: 10000,
        type: "minuman",
      },
      {
        id: 9,
        name: "es kacau",
        img: "es kacau.png",
        price: 10000,
        type: "minuman",
      },
      {
        id: 10,
        name: "es keplak mantan",
        img: "es nice capek.png",
        price: 10000,
        type: "minuman",
      },
      {
        id: 11,
        name: "es endel",
        img: "es semanmu.png",
        price: 10000,
        type: "minuman",
      },
      {
        id: 12,
        name: "es sang jo",
        img: "es sang jo.png",
        price: 10000,
        type: "minuman",
      },
      {
        id: 13,
        name: "es sudah gembira",
        img: "es sudah gembira.png",
        price: 10000,
        type: "minuman",
      },
      {
        id: 14,
        name: "es setop mencintaimu",
        img: "essetop mencintaimu.png",
        price: 10000,
        type: "minuman",
      },
      {
        id: 15,
        name: "es setop mencintaimu",
        img: "seblak gamon.png",
        price: 10000,
        type: "seblak",
      },
      {
        id: 16,
        name: "es setop mencintaimu",
        img: "seblak hts.png",
        price: 10000,
        type: "seblak",
      },
      {
        id: 17,
        name: "es setop mencintaimu",
        img: "seblak jomblo.png",
        price: 10000,
        type: "seblak",
      },
      {
        id: 18,
        name: "es setop mencintaimu",
        img: "seblak redflag.png",
        price: 10000,
        type: "seblak",
      },
    ],
    get filteredItems() {
      return this.items.filter((item) => item.type === this.category);
    },
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,

    add(newItem) {
      const existingItem = this.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...newItem, quantity: 1 });
      }
      this.updateCart();
    },

    remove(itemToRemove) {
      const itemIndex = this.items.findIndex(
        (item) => item.id === itemToRemove.id
      );
      if (itemIndex !== -1) {
        this.items[itemIndex].quantity--;
        if (this.items[itemIndex].quantity === 0) {
          this.items.splice(itemIndex, 1);
        }
        this.updateCart();
      }
    },

    updateCart() {
      this.quantity = this.items.reduce((acc, item) => acc + item.quantity, 0);
      this.total = this.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  });

  Alpine.data("paymentFormHandler", () => ({
    form: {
      nama_pengguna: "",
      email: "",
      alamat: "",
    },
    handleSubmit() {
      if (this.form.email === "" || this.form.password === "") {
        console.log("Form validatisi terjadi kesalan");
        return;
      }

      const formData = {
        nama_pengguna: this.form.nama_pengguna,
        email: this.form.email,
        alamat: this.form.alamat,
        items: Alpine.store("cart").items.map((item) => ({
          id: item.id,
          nama: item.name,
          harga: item.price,
          quantity: item.quantity,
        })),
        total: Alpine.store("cart").total,
        quantity: Alpine.store("cart").quantity,
      };

      console.log(formData);


      const whatsappNumber = "6285941395232"; 

      const message = `Data Customer:
                nama_pengguna: ${formData.nama_pengguna}
                Email: ${formData.email}
                alamat: ${formData.alamat}
                
                            Data Pesanan:
                ${formData.items
                  .map(
                    (item) =>
                      `${item.nama} - Harga: Rp${item.harga} - Jumlah: ${item.quantity}`
                  )
                  .join("\n")}
                Total Harga: Rp${formData.total}`;

      const encodedMessage = encodeURIComponent(message);


      const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;


      window.open(whatsappURL, "_blank");


      this.form.email = "";
      this.form.password = "";
      Alpine.store("cart").items = [];
      Alpine.store("cart").total = 0;
      Alpine.store("cart").quantity = 0;
    },
  }));
});
