document.addEventListener("DOMContentLoaded", () => {
    const typedMessage = document.getElementById("typedMessage");
    const toSlideshowButton = document.getElementById("toSlideshow");

    if (typedMessage) {
        const message = "Aku mau minta maaf karena belakangan ini aku sadar aku banyak maunya, sering banget overthinking, dan kadang terlalu butuh validasi dari kamu. Aku ngerti kalau itu bikin kamu mungkin ngerasa jenuh, capek, atau malah nggak bebas. Aku nggak ada maksud bikin kamu ngerasa gitu, tapi aku sadar sikapku akhir-akhir ini pasti berat buat kamu. Aku lagi belajar buat lebih ngendaliin diri, lebih paham sama kamu, dan nggak cuma mikirin apa yang aku mau. Aku nggak mau hubungan kita jadi kerasa berat atau bikin kamu nggak nyaman. Aku sayang banget sama kamu, dan aku pengen kita bisa terus bareng tanpa ada rasa beban di hati. Makasih ya, udah sabar dan tetep ada di sini buat aku. Aku bakal usaha buat jadi lebih baik, nggak cuma buat kamu, tapi juga buat kita. Aku nggak mau kehilangan kamu, dan aku bakal terus belajar biar hubungan ini lebih nyaman buat kita berdua. ";
        let index = 0;

        const typeEffect = () => {
            if (index < message.length) {
                typedMessage.textContent += message[index];
                index++;
                setTimeout(typeEffect, 50); // Efek mengetik 50ms per huruf
            } else {
                // Tampilkan tombol setelah pesan selesai
                toSlideshowButton.style.display = "block";
            }
        };

        typeEffect();

        // Tambahkan event listener untuk tombol
        toSlideshowButton.addEventListener("click", () => {
            window.location.href = "slideshow.html";
        });
    }
});
