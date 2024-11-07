const toko = { 
    "namaToko": "Toko SIDU", 
    "alamat": "Jl. Anggrek Blok.B1 No.10" 
  };
  
  alert("Nama Toko: " + toko.namaToko + "\nAlamat: " + toko.alamat);


        // Data barang awal
        let daftarBarang = [
            { nama: "Buku", harga: 7000, stok: 50 },
            { nama: "Pensil", harga: 2000, stok: 100 },
            { nama: "Penghapus", harga: 1500, stok: 30 },
            { nama: "Tipe-x Kertas" , harga: 1000, stok: 25},
        ];

        // Fungsi untuk menampilkan daftar barang
        function tampilkanBarang() {
            const tableBody = document.querySelector("#barangTable tbody");
            tableBody.innerHTML = ""; // Kosongkan tabel sebelum diisi ulang

            daftarBarang.forEach(barang => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${barang.nama}</td>
                    <td>Rp ${barang.harga}</td>
                    <td>${barang.stok}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Fungsi untuk mencari barang dengan nama tertentu
        function cariBarang(nama) {
            const hasil = daftarBarang.find(barang => barang.nama.toLowerCase() === nama.toLowerCase());
            const hasilPencarian = document.getElementById("hasilPencarian");
            if (hasil) {
                hasilPencarian.innerHTML = `Barang ditemukan: <strong>${hasil.nama}</strong>, Stok: <strong>${hasil.stok}</strong>`;
            } else {
                hasilPencarian.innerHTML = "Barang tidak ditemukan.";
            }
        }

        // Cari barang dengan nama "Buku" saat halaman pertama kali dimuat
        window.onload = function() {
            tampilkanBarang();
            cariBarang("Buku");
        };

        // Fungsi untuk menambah barang baru
        function tambahBarang() {
            const namaBarang = document.getElementById("namaBarang").value;
            const hargaBarang = parseInt(document.getElementById("hargaBarang").value);
            const stokBarang = parseInt(document.getElementById("stokBarang").value);

            if (namaBarang && hargaBarang && stokBarang) {
                daftarBarang.push({ nama: namaBarang, harga: hargaBarang, stok: stokBarang });
                tampilkanBarang(); // Tampilkan daftar barang yang sudah diperbarui
                // Kosongkan form input
                document.getElementById("namaBarang").value = "";
                document.getElementById("hargaBarang").value = "";
                document.getElementById("stokBarang").value = "";
            } else {
                alert("Harap isi semua data barang.");
            }
        }