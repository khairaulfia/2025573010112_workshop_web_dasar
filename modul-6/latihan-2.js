const produk = [
  {
    id:1,
    nama:"cincin",
    harga:12000000,
    gambar:"https://i.pinimg.com/1200x/44/4a/40/444a40311e7db2818e83b54610413761.jpg"
  },
  {
    id:2,
    nama:"anting",
    harga:8000000,
    gambar:"https://i.pinimg.com/1200x/0a/b2/b8/0ab2b89db94e6d08f130ad0a7d5290d4.jpg"
  },
  {
    id:3,
    nama:"kalung",
    harga:23000000,
    gambar:"https://i.pinimg.com/1200x/73/05/65/730565465ebff937c8e2c64e98b02e45.jpg"
  },
  {
    id:4,
    nama:"gelang",
    harga:18000000,
    gambar:"https://i.pinimg.com/736x/38/48/d0/3848d07574fb435ce65a1517d338d856.jpg"
  },
  {
    id:5,
    nama:"aksesoris",
    harga:5000000,
    gambar:"https://i.pinimg.com/736x/b0/44/86/b04486ca44504d41e5b0d82e0aa7e3b0.jpg"
  }
];

const produkGrid = document.getElementById("produk-grid");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const badge = document.getElementById("badge");
const checkoutBtn = document.getElementById("checkout");

let keranjang = [];

function renderProduk(){

  produkGrid.innerHTML = "";

  produk.forEach(item => {

    produkGrid.innerHTML += `
      <div class="card">
        <img src="${item.gambar}">
        <h3>${item.nama}</h3>
        <p>Rp ${item.harga.toLocaleString()}</p>

        <button class="btn-cart"
          onclick="tambahKeKeranjang(${item.id})">
          Tambah ke Keranjang
        </button>
      </div>
    `;
     });
}

function tambahKeKeranjang(id){

  const item = keranjang.find(p => p.id === id);

  if(item){
    item.qty++;
  }else{
    const produkDipilih = produk.find(p => p.id === id);

    keranjang.push({
      ...produkDipilih,
      qty:1
    });
  }

  renderKeranjang();
}

function renderKeranjang(){

  cartItems.innerHTML = "";

  let total = 0;
  let jumlahItem = 0;

  keranjang.forEach(item => {

    total += item.harga * item.qty;
    jumlahItem += item.qty;

    cartItems.innerHTML += `
      <div class="item-cart">

        <h4>${item.nama}</h4>

        <p>
          Rp ${item.harga.toLocaleString()}
        </p>

        <div class="qty">
        <button onclick="kurangQty(${item.id})">-</button>

          <span>${item.qty}</span>

          <button onclick="tambahQty(${item.id})">+</button>

        </div>

        <button class="hapus"
          onclick="hapusItem(${item.id})">
          Hapus
        </button>

      </div>
    `;
  });
   totalEl.textContent =
    `Total: Rp ${total.toLocaleString()}`;

  badge.textContent = jumlahItem;
}
function tambahQty(id){

  const item = keranjang.find(p => p.id === id);

  item.qty++;

  renderKeranjang();
}

function kurangQty(id){

  const item = keranjang.find(p => p.id === id);

  item.qty--;

  if(item.qty <= 0){
    keranjang =
      keranjang.filter(p => p.id !== id);
  }

  renderKeranjang();
}

function hapusItem(id){

  keranjang =
    keranjang.filter(p => p.id !== id);

  renderKeranjang();
}

// CHECKOUT
checkoutBtn.addEventListener("click", () => {

  if(keranjang.length === 0){
    alert("Keranjang masih kosong!");
    return;
  }
  let ringkasan = "=== RINGKASAN ORDER ===\n\n";

  let total = 0;

  keranjang.forEach(item => {

    ringkasan +=
      `${item.nama} (${item.qty}x)\n`;

    total += item.harga * item.qty;
  });

  ringkasan +=
    `\nTotal: Rp ${total.toLocaleString()}`;

  alert(ringkasan);
});
renderProduk();