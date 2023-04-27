document.getElementById("cart-total").innerText = localStorage.getItem("total") ?? 0

function checkout() {
    let bala_bala = document.getElementById("bala_bala")
    let cireng_isi = document.getElementById("cireng_isi")
    let pisang_goreng = document.getElementById("pisang_goreng")

    const checkoutSum = document.getElementById("cart-items")
    checkoutSum.style.display = "block"

    bala_bala.innerHTML = localStorage.getItem("Bala-bala") ?? 0
    cireng_isi.innerHTML = localStorage.getItem("Cireng Isi") ?? 0
    pisang_goreng.innerHTML = localStorage.getItem("Pisang Goreng") ?? 0
}

function addToCart(value) {
    let item = localStorage.getItem(value)
    if(item){
        localStorage.setItem(value, parseInt(item) + 1)
    } else {
        localStorage.setItem(value, "1")
    }

    alert("Gorengan berhasil ditambahkan")
    
    let total = 0
    for (let i = 0; i < localStorage.length; i++) {
        let namaBarang = localStorage.key(i)
        if(namaBarang == "Bala-bala") {
            let data = localStorage.getItem(namaBarang)
            let totalHarga = 50000 * parseInt(data)
            total += totalHarga
        } else if (namaBarang == "Pisang Goreng"){
            let data = localStorage.getItem(namaBarang)
            let totalHarga = 40000 * parseInt(data)
            total += totalHarga
        } else if (namaBarang == "Cireng Isi") {
            let data = localStorage.getItem(namaBarang)
            let totalHarga = 60000 * parseInt(data)
            total += totalHarga
        }
        
    }
    localStorage.setItem("total", total)
    document.getElementById("cart-total").innerText = localStorage.getItem("total")
    location.reload(true)
}

function clearcheckout() {
    const confirmation = confirm("Apakah ingin memesan ulang gorengan?")
    if(confirmation) {
        localStorage.clear()
        location.reload(true)
    }
}