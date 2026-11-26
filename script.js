const sozler = [
    "Bir kitap, içimizdeki donmuş denizi kıracak bir balta olmalıdır. — Franz Kafka",
    "Okumak insanı doldurur, konuşmak hazırlar, yazmak olgunlaştırır. — Francis Bacon",
    "Şiir, güçlü duyguların kendiliğinden taşmasıdır. — William Wordsworth",
    "Edebiyat, güncelliğini koruyan haberdir. — Ezra Pound"
];

const rastgeleSayi = Math.floor(Math.random() * sozler.length);
  document.getElementById("rastgele-soz").textContent = sozler[rastgeleSayi];

document.getElementById("giris").addEventListener("click", function () {
    const sifre = document.getElementById("sifre").value;
    if(sifre.trim().toLowerCase() === "Efe".toLowerCase())
    {
        window.location.href = "Talha.html"
    }
    else
    {
        alert("sifre Yanlış")
    }
})
