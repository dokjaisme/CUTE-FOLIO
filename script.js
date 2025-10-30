// ===== KODE UNTUK SPARKLE CURSOR =====
const fairyDustColors = ['#FFC1E3', '#FFDAB9', '#E6E6FA', '#FFFACD'];

document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let sparkle = document.createElement('span');
    let x = e.pageX;
    let y = e.pageY;
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    let size = Math.random() * 12 + 5;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    let rotation = Math.random() * 360;
    sparkle.style.transform = `rotate(${rotation}deg)`;
    const color = fairyDustColors[Math.floor(Math.random() * fairyDustColors.length)];
    sparkle.style.background = color;
    body.appendChild(sparkle);
    let duration = Math.random() * 500 + 500;
    setTimeout(function() {
        sparkle.remove();
    }, duration);
});
// ===== AKHIR KODE UNTUK SPARKLE CURSOR =====

// ===== KODE UNTUK TUMPUKAN KARTU PROJECT =====

document.addEventListener('DOMContentLoaded', () => {
    const stackContainer = document.querySelector('.card-stack-container');
    if (stackContainer) {
        const cards = Array.from(stackContainer.querySelectorAll('.project-card'));
        const nextCardBtn = document.getElementById('nextCardBtn');
        let currentCardIndex = 0;

        // Fungsi untuk menata ulang tumpukan kartu
        function arrangeCards() {
            cards.forEach((card, index) => {
                card.style.zIndex = cards.length - index;

                // Atur posisi dan skala kartu berdasarkan posisinya dari kartu teratas
                if (index === currentCardIndex) {
                    // Kartu teratas (paling depan)
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.opacity = '1';
                } else if (index === currentCardIndex + 1) {
                    // Kartu persis di belakangnya (kelihatan sedikit)
                    card.style.transform = 'translateY(15px) scale(0.95)';
                    card.style.opacity = '1';
                } else if (index === currentCardIndex + 2) {
                    // Kartu ketiga (kelihatan lebih sedikit lagi)
                    card.style.transform = 'translateY(30px) scale(0.9)';
                    card.style.opacity = '1';
                } else {
                    // Semua kartu lain di belakangnya disembunyikan
                    card.style.transform = 'translateY(45px) scale(0.85)';
                    card.style.opacity = '0';
                }
            });
        }

        // Fungsi saat tombol "Next Card" diklik
        nextCardBtn.addEventListener('click', () => {
            // 1. Kartu teratas "terbang" ke samping dan menghilang
            if (cards[currentCardIndex]) {
                cards[currentCardIndex].style.transform = 'translateX(500px) rotate(30deg) scale(0.8)';
                cards[currentCardIndex].style.opacity = '0';
            }
            
            // 2. Ganti ke kartu berikutnya
            currentCardIndex++;

            // 3. Kalau sudah kartu terakhir, kembali ke awal
            if (currentCardIndex >= cards.length) {
                currentCardIndex = 0;
            }

            // 4. Setelah animasi terbang selesai, tata ulang tumpukan
            setTimeout(() => {
                // Reset kartu yang sudah terbang (tanpa animasi) biar bisa muncul lagi nanti
                if (currentCardIndex === 0) {
                     cards.forEach(card => {
                        card.style.transition = 'none'; // Matikan transisi sementara
                        card.style.transform = 'translateY(45px) scale(0.85)';
                     });
                     // Paksa browser update, lalu nyalakan lagi transisinya
                     setTimeout(() => {
                        cards.forEach(card => card.style.transition = 'transform 0.5s ease, opacity 0.5s ease');
                        arrangeCards();
                     }, 50);
                } else {
                    arrangeCards();
                }
            }, 250); // Delay harus setengah dari durasi transisi di CSS
        });

        // Panggil fungsi pertama kali untuk menata kartu saat halaman dimuat
        arrangeCards();
    }
});